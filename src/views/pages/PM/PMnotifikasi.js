import * as React from 'react'; 
import { useEffect, useState } from 'react';
import { Alert, Snackbar, Slide, TextField } from '@mui/material';
import axios from 'axios';
import MainCard from 'ui-component/cards/MainCard';
import { MultiGrid, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PMnotifikasi = () => {
  const [openSnack, setOpenSnack] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk input pencarian

  // Function to fetch data from backend
  const fetchData = () => {
    setLoading(true);
    axios.get(`http://10.37.12.17:3000/api/pm_wafer_l1`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setOpenSnack(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  // Configure columns and table headers
  const columnHeaders = ["No.", "Nama Mesin", "Equipment", "Part Alat", "Qty", "Periode", ...Array.from({ length: 52 }, (_, i) => `w${i + 1}`)];
  const columnWidths = [50, 150, 150, 150, 100, 100, ...Array(52).fill(60)];

  // Function to render each cell in MultiGrid
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
      const rowData = filteredData[rowIndex - 1]; // -1 because row 0 is the header
      switch (columnIndex) {
        case 0: cellData = rowData?.no || ''; break; // No.
        case 1: cellData = rowData?.machine_name || ''; break; // Machine Name
        case 2: cellData = rowData?.equipment || ''; break; // Equipment
        case 3: cellData = rowData?.part_kebutuhan_alat || ''; break; // Part Tool
        case 4: cellData = rowData?.qty || ''; break; // Quantity
        case 5: cellData = rowData?.periode || ''; break; // Period
        default: {
          const weekIndex = columnIndex - 6;
          const weekKey = `w${weekIndex + 1}`;
          cellData = rowData?.week ? rowData.week[weekKey] : ''; // Weekly data (w1, w2, ..., w52)
          if (cellData === 'L') {
            cellStyle.backgroundColor = 'yellow';
          }
          break;
        }
      }
    }

    return (
      <div key={key} style={cellStyle}>
        {cellData}
      </div>
    );
  };

  // Fungsi untuk memfilter data berdasarkan input pencarian
  const filteredData = data.filter(row => {
    return (
      row.machine_name?.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter berdasarkan nama mesin
      row.equipment?.toLowerCase().includes(searchTerm.toLowerCase()) || // Filter berdasarkan equipment
      row.part_kebutuhan_alat?.toLowerCase().includes(searchTerm.toLowerCase()) // Filter berdasarkan part alat
    );
  });

  return (
    <MainCard title="PMLine 1" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TextField
        variant="outlined"
        placeholder="Cari..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state saat input berubah
        sx={{ margin: 2 }}
      />
      <div style={{ height: 500, width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <MultiGrid
              cellRenderer={cellRenderer}
              columnWidth={({ index }) => columnWidths[index]}
              columnCount={columnHeaders.length}
              fixedRowCount={1} // Fixed header row
              fixedColumnCount={6} // Fixed columns (if needed)
              height={height}
              rowHeight={50}
              rowCount={filteredData.length + 1} // +1 for header
              width={width}
              style={{ border: '1px solid #ddd' }}
              styleBottomLeftGrid={{ borderRight: '1px solid #ddd' }}
              styleTopLeftGrid={{ borderBottom: '1px solid #ddd' }}
              styleTopRightGrid={{ borderBottom: '1px solid #ddd' }}
            />
          )}
        </AutoSizer>
      </div>

      {/* Snackbar for error handling */}
      <Snackbar
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Transition}
      >
        <Alert onClose={handleCloseSnack} severity="error" variant="filled" sx={{ width: '100%' }}>
          Tidak dapat menampilkan data di tabel
        </Alert>
      </Snackbar>
      
      {/* Snackbar for loading */}
      <Snackbar
        open={isLoading}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="primary" variant="filled" sx={{ width: '100%' }}>
          Memuat data...
        </Alert>
      </Snackbar>
    </MainCard>
  );
};

export default PMnotifikasi;
