import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Alert, Snackbar, Slide, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import * as XLSX from 'xlsx';
import MainCard from 'ui-component/cards/MainCard';
import { MultiGrid, AutoSizer, InfiniteLoader } from 'react-virtualized';
import 'react-virtualized/styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PMTableWafer = ({ group }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [editData, setEditData] = useState(null);

  const fetchData = async ({ startIndex = 0, stopIndex = 20 } = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://10.37.12.17:3000/api/pm_wafer/${group}/${selectedYear}?start=${startIndex}&end=${stopIndex}`);
      if (response.data && response.data.length > 0) {
        setData(response.data);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setOpenSnack(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteWafer = async () => {
    setLoading(true);
    handleCloseDialog();
    try {
      await axios.delete(`http://10.37.12.17:3000/api/deleted/wafer/${group}`);
      setOpenSuccessSnack(true);
      setData([]);
      fetchData();
    } catch (error) {
      console.error(`Error deleting data Grup ${group}:`, error);
      setOpenSnack(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveField = async (id, newValue, field) => {
    try {
      const response = await axios.put(`http://10.37.12.17:3000/api/update_field/${id}`, { field, value: newValue });
      if (response.data) {
        setData(prevData =>
          prevData.map(row => (row.id === id ? { ...row, [field]: newValue } : row))
        );
        setOpenSuccessSnack(true);
        fetchData();
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      setOpenSnack(true);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [group, selectedYear]);

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  const handleCloseSuccessSnack = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSuccessSnack(false);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const exportToExcel = () => {
    const worksheetData = [
      columnHeaders,
      ...filteredData.map(row => [
        row.machine_name,
        row.equipment,
        row.kode_barang,
        row.part_kebutuhan_alat,
        row.qty,
        row.periode_start,
        row.periode,
        ...Array.from({ length: 53 }, (_, i) => row.week ? row.week[`w${i + 1}`] : '')
      ])
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'PMTableWafer');
    XLSX.writeFile(workbook, `PMTableWafer_Group${group}.xlsx`);
  };

  const columnHeaders = ["Nama Mesin", "Equipment", "KODE Barang", "Part Alat", "Qty", "Periode Start", "Periode", ...Array.from({ length: 53 }, (_, i) => `w${i + 1}`)];
  const columnWidths = [150, 150, 150, 150, 50, 60, 90, ...Array(53).fill(60)];

  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    const isHeader = rowIndex === 0;
    const cellStyle = {
      ...style,
      backgroundColor: isHeader ? '#eeeeee' : '#ffffff',
      fontWeight: isHeader ? 'bold' : 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
    };
    let cellData = '';

    if (isHeader) {
      cellData = columnHeaders[columnIndex];
    } else {
      const rowData = filteredData[rowIndex - 1];
      const rowFieldKeys = ['machine_name', 'equipment', 'kode_barang', 'part_kebutuhan_alat', 'qty', 'periode_start', 'periode'];
      const field = rowFieldKeys[columnIndex];

      if (columnIndex <= 6) {
        // Kolom yang dapat diedit
        cellData = (
          <TextField
            value={editData?.id === rowData.id && editData.field === field ? editData.value : rowData[field]}
            onChange={(e) => setEditData({ id: rowData.id, field, value: e.target.value })}
            onBlur={() => {
              if (editData?.id === rowData.id && editData.field === field && editData.value !== rowData[field]) {
                handleSaveField(rowData.id, editData.value, field);
              }
              setEditData(null);
            }}
            variant="standard"
            size="small"
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: 'transparent', fontSize: 'inherit', padding: 0, textAlign: 'center' },
            }}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        );
      } else {
        // Kolom week yang tidak dapat diedit
        const weekIndex = columnIndex - 7;
        const weekKey = `w${weekIndex + 1}`;
        const weekData = rowData?.week ? rowData.week[weekKey] : '';
        cellData = weekData || '';

        // Pewarnaan sel berdasarkan nilai
        if (weekData === 'L') {
          cellStyle.backgroundColor = 'yellow';
        } else if (weekData === 'R') {
          cellStyle.backgroundColor = 'blue';
        }
      }
    }

    return (
      <div key={key} style={cellStyle}>
        {cellData}
      </div>
    );
  };

  const filteredData = data.filter(row => {
    return (
      row.machine_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.kode_barang?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.equipment?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.part_kebutuhan_alat?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const isRowLoaded = ({ index }) => !!data[index];
  const loadMoreRows = ({ startIndex, stopIndex }) => fetchData({ startIndex, stopIndex });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <MainCard title={`PMLine ${group} demo format periode start(2024w3), periode(L10w)`} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <TextField
            variant="outlined"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginLeft: 2 }}
          />
          <Button variant="contained" color="primary" onClick={exportToExcel} sx={{ marginLeft: 2 }}>
            Export to Excel
          </Button>
        </div>
        <TextField
          select
          label="Pilih Tahun"
          value={selectedYear}
          onChange={handleYearChange}
          SelectProps={{ native: true }}
          sx={{ marginRight: 2 }}
        >
          {[...Array(10)].map((_, index) => {
            const year = new Date().getFullYear() - index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </TextField>
        <Button variant="contained" color="error" onClick={handleOpenDialog} sx={{ marginRight: 2 }}>
          Hapus Data Grup {group}
        </Button>
      </div>

      <div style={{ height: 1000, width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              rowCount={hasMore ? data.length + 1 : data.length}
            >
              {({ onRowsRendered, registerChild }) => (
                <MultiGrid
                  cellRenderer={cellRenderer}
                  columnWidth={({ index }) => columnWidths[index]}
                  columnCount={columnHeaders.length}
                  fixedRowCount={1}
                  fixedColumnCount={7}
                  height={height}
                  rowHeight={50}
                  rowCount={filteredData.length + 1}
                  width={width}
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  style={{ border: '1px solid #ddd' }}
                  styleBottomLeftGrid={{ borderRight: '1px solid #ddd' }}
                  styleTopLeftGrid={{ borderBottom: '1px solid #ddd' }}
                  styleTopRightGrid={{ borderBottom: '1px solid #ddd' }}
                />
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Konfirmasi Hapus Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah Anda yakin ingin menghapus data Grup {group}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Batal</Button>
          <Button onClick={deleteWafer} color="error" autoFocus>Hapus</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleCloseSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Transition}>
        <Alert onClose={handleCloseSnack} severity="error" variant="filled" sx={{ width: '100%' }}>Tidak dapat menampilkan data di tabel</Alert>
      </Snackbar>

      <Snackbar open={openSuccessSnack} autoHideDuration={5000} onClose={handleCloseSuccessSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Transition}>
        <Alert onClose={handleCloseSuccessSnack} severity="success" variant="filled" sx={{ width: '100%' }}>Data berhasil diperbarui!</Alert>
      </Snackbar>

      <Snackbar open={isLoading} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="primary" variant="filled" sx={{ width: '100%' }}>Memuat data...</Alert>
      </Snackbar>
    </MainCard>
  );
};

export default PMTableWafer;
