import PropTypes from 'prop-types';
import { useState } from 'react';
import { Grid, Divider, Select, MenuItem, InputLabel, FormControl, TextField, Typography, CardContent } from '@mui/material';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// import { useNavigate } from "react-router-dom";
import MainCard from 'ui-component/cards/MainCard';
import ButtonSave from 'ui-component/ButtonSaveL5';
import ButtonOff from 'ui-component/ButtonOffL5';
// import { useGridNativeEventListener } from '@mui/x-data-grid';
// import axios from 'axios';
// ==============================|| HAPPY CODING ||============================== //

const FormLHP = ({ isLoading, label0 }) => {
    // const [alert, setAlert] = useState(false);
    // const [alertContent, setAlertContent] = useState('');
    // Mengambil data username dari localStorage
    const users = localStorage.getItem('username');

    // State untuk menyimpan tanggal menggunakan dayjs
    const [valueDate, setValueDate] = useState(dayjs(new Date()));

    // State untuk menyimpan data shift
    const [shift, setShift] = useState('');

    // State untuk menyimpan SKU produk
    const [sku, setSKU] = useState('');

    // State untuk menyiapkan bubuk
    const [bubuk, setbubuk] = useState('');

    // State untuk menyimpan jumlah reguler, hold, output, dan lainnya
    const [planning, setPlanning] = useState('');
    const [reguler, setReguler] = useState('');
    const [hold, setHold] = useState('');
    const [output, setOutput] = useState('');
    const [rmd, setRMD] = useState('');
    const [rfeeding, setRfeeding] = useState('');
    const [rsampleqc, setRsampleqc] = useState('');
    const [rpackinner, setRpackinner] = useState('');

    // State untuk menyimpan data produksi mesin atau equipment
    const [rmE1, setRmE1] = useState('');
    const [rmE2, setRmE2] = useState('');
    const [rmE3, setRmE3] = useState('');
    const [rmE4, setRmE4] = useState('');
    const [rmE5, setRmE5] = useState('');
    const [rmE6, setRmE6] = useState('');
    const [rmE7, setRmE7] = useState('');
    const [rmE8, setRmE8] = useState('');
    const [rmE9, setRmE9] = useState('');
    const [rmE10, setRmE10] = useState('');
    const [rmE11, setRmE11] = useState('');
    const [rmE12, setRmE12] = useState('');
    const [roll, setRejectinnermesinroll] = useState('');

    // State untuk data pack table dan total raw material
    const [rpackTable, setRPackTable] = useState('');
    const [rmtotal, setRmtotal] = useState('');

    // State untuk oven dan mesin lainnya
    const [roven, setRoven] = useState('');
    const [soven, setSoven] = useState('');
    const [mcbks, setMcbks] = useState('');
    const [ptable, setPtable] = useState('');

    // State untuk bahan serbuk dan tempat tampungan
    const [serbuk, setSerbuk] = useState('');
    const [tampungan, setTampungan] = useState('');

    // State untuk total keseluruhan dan berat pack
    const [total, setTotal] = useState('');
    const [brtpack, setBrtpack] = useState('');

    // State untuk batch dan WIP (work in progress) data
    const [batch, setBatch] = useState('');
    const wiinner = 0;
    const [wipackinner, setWipackinner] = useState('');
    const [wikulit, setWikulit] = useState('');
    const [witotal, setWitotal] = useState('');

    // State untuk menyimpan data vial (vi)
    const [viawal, setViawal] = useState('');
    const [viambil, setViambil] = useState('');
    const [viakhir, setViakhir] = useState('');
    const [vireturn, setVireturn] = useState('');
    const [viinner, setViinner] = useState('');
    const [viRainner, setViRainner] = useState('');

    // State untuk data vial dari E1 hingga E12
    const [viE1, setViE1] = useState('');
    const [viE2, setViE2] = useState('');
    const [viE3, setViE3] = useState('');
    const [viE4, setViE4] = useState('');
    const [viE5, setViE5] = useState('');
    const [viE6, setViE6] = useState('');
    const [viE7, setViE7] = useState('');
    const [viE8, setViE8] = useState('');
    const [viE9, setViE9] = useState('');
    const [viE10, setViE10] = useState('');
    const [viE11, setViE11] = useState('');
    const [viE12, setViE12] = useState('');

    // State untuk variance
    const [variance, setVariance] = useState('');

    // State untuk data krim (kr)
    const [krkawal, setKrkawal] = useState('');
    const [krAwal, setKrAwal] = useState('');
    const [krakhir, setKrakhir] = useState('');
    const [krpakai, setKrpakai] = useState('');
    const [kreturn, setKreturn] = useState('');
    const [kreject, setKreject] = useState('');

    // State untuk kendala (problem atau issues)
    const [kendala1, setKendala1] = useState('');
    const [kendala2, setKendala2] = useState('');
    const [kendala3, setKendala3] = useState('');
    const [kendala4, setKendala4] = useState('');
    const [kendala5, setKendala5] = useState('');

    // Definisi rmall
    const rmall = {
        rmE1: rmE1,
        rmE2: rmE2,
        rmE3: rmE3,
        rmE4: rmE4,
        rmE5: rmE5,
        rmE6: rmE6,
        rmE7: rmE7,
        rmE8: rmE8,
        rmE9: rmE9,
        rmE10: rmE10,
        rmE11: rmE11,
        rmE12: rmE12,
    };

    // Definisi viVarianall
    const viVarianall = {
        viE1: viE1,
        viE2: viE2,
        viE3: viE3,
        viE4: viE4,
        viE5: viE5,
        viE6: viE6,
        viE7: viE7,
        viE8: viE8,
        viE9: viE9,
        viE10: viE10,
        viE11: viE11,
        viE12: viE12,
    };

    // Definisi kendalaall
    const kendalaall = {
        kendala1: kendala1,
        kendala2: kendala2,
        kendala3: kendala3,
        kendala4: kendala4,
        kendala5: kendala5,
    };

    // Membuat objek LHP dengan memasukkan semua data yang ada
    const LHP = {
        users_input: users,
        realdatetime: valueDate.format('YYYY-MM-DD'), // Format tanggal dari valuedate
        grup: label0,                                 // Nilai dari grup (asumsi dari label0)
        shift: shift,                                 // Nilai dari shift
        sku: sku,                                     // Nilai dari SKU
        reguler: reguler,
        planning: planning,                            // Nilai dari reguler
        hold: hold,                                   // Nilai dari hold
        output: output,                               // Nilai dari output
        rmd: rmd,                                     // Nilai dari RMD
        rfeeding: rfeeding,
        rsampleqc: rsampleqc,
        rpackinner: rpackinner,                       // Nilai dari Rfeeding
        rmall: rmall,
        roll: roll,                                    // Objek rmall berisi semua nilai RM
        rpackTable: rpackTable,                       // Nilai dari RPackTable
        rmtotal: rmtotal,                             // Nilai dari RM Total
        roven: roven,                                 // Nilai dari Roven
        soven: soven,                                 // Nilai dari Soven
        mcbks: mcbks,                                 // Nilai dari MCBKS
        ptable: ptable,                               // Nilai dari Ptable
        serbuk: serbuk,                               // Nilai dari Serbuk
        tampungan: tampungan,                         // Nilai dari Tampungan
        total: total,                                 // Nilai dari total keseluruhan
        brtpack: brtpack,                             // Nilai dari berat pack
        batch: batch,                                 // Nilai dari batch
        wiinner: wiinner,                             // Nilai dari WI Inner
        wipackinner: wipackinner,                     // Nilai dari WI Pack Inner
        wikulit: wikulit,                             // Nilai dari WI Kulit
        witotal: witotal,                             // Nilai dari WI Total
        viawal: viawal,                               // Nilai dari VI Awal
        viambil: viambil,                             // Nilai dari VI Ambil
        viakhir: viakhir,                             // Nilai dari VI Akhir
        vireturn: vireturn,                           // Nilai dari VI Return
        viinner: viinner,                             // Nilai dari VI Inner
        viRainner: viRainner,                         // Nilai dari VI Rainner
        viall: viVarianall,                           // Objek viVarianall berisi semua nilai VI Equipment
        variance: variance,                           // Nilai dari Variance
        krkawal: krkawal,                             // Nilai dari KRK Awal
        krAwal: krAwal,                               // Nilai dari KR Awal
        krakhir: krakhir,                             // Nilai dari KR Akhir
        krpakai: krpakai,                             // Nilai dari KR Pakai
        kreturn: kreturn,                             // Nilai dari K Return
        kreject: kreject,                             // Nilai dari K Reject
        kendalaall: kendalaall                        // Objek kendalaall berisi semua kendala
    };

    const LHPDUA = {
        users: users,
        realdatetime: valueDate.format('YYYY-MM-DD'), // Format tanggal dari valuedate
        grup: label0,                                 // Nilai dari grup (asumsi dari label0)
        shift: shift,                                 // Nilai dari shift
        sku: "-",                                     // Nilai dari SKU
        reguler: 0,                                   // Nilai dari reguler
        hold: 0,                                      // Nilai dari hold
        output: 0,                                    // Nilai dari output
        rmd: 0,                                       // Nilai dari RMD
        rfeeding: 0,                                  // Nilai dari Rfeeding
        rmall: "{0}",                                 // Objek rmall berisi semua nilai RM
        rpackTable: 0,                                // Nilai dari RPackTable
        rmtotal: 0,                                   // Nilai dari RM Total
        roven: 0,                                     // Nilai dari Roven
        soven: 0,                                     // Nilai dari Soven
        mcbks: 0,                                     // Nilai dari MCBKS
        ptable: 0,                                    // Nilai dari Ptable
        serbuk: 0,                                    // Nilai dari Serbuk
        tampungan: 0,                                 // Nilai dari Tampungan
        total: 0,                                     // Nilai dari total keseluruhan
        brtpack: 0,                                   // Nilai dari berat pack
        batch: 0,                                     // Nilai dari batch
        wiinner: 0,                                   // Nilai dari WI Inner
        wipackinner: 0,                               // Nilai dari WI Pack Inner
        wikulit: 0,                                   // Nilai dari WI Kulit
        witotal: 0,                                   // Nilai dari WI Total
        viawal: 0,                                    // Nilai dari VI Awal
        viambil: 0,                                   // Nilai dari VI Ambil
        viakhir: 0,                                   // Nilai dari VI Akhir
        vireturn: 0,                                  // Nilai dari VI Return
        viinner: 0,                                   // Nilai dari VI Inner
        viRainner: 0,                                 // Nilai dari VI Rainner
        viall: "{0}",                                 // Objek viVarianall berisi semua nilai VI Equipment
        variance: 0,                                  // Nilai dari Variance
        krkawal: 0,                                   // Nilai dari KRK Awal
        krAwal: 0,                                    // Nilai dari KR Awal
        krakhir: 0,                                   // Nilai dari KR Akhir
        krpakai: 0,                             // Nilai dari KR Pakai
        kreturn: 0,                             // Nilai dari K Return
        kreject: 0,                             // Nilai dari K Reject
        kendalaall: "{0}"                       // Nilai dari Kendala 
    };

    const calculateSum = (newReguler, planning, newHold) => {
        const sum = ((parseFloat(newReguler) + parseFloat(newHold)) / parseFloat(planning)) * 100;
        const sumpersen = parseFloat(sum).toFixed(2);
        setOutput(sumpersen || 0);
    };
    const calculateSumRM = (packtable) => {
        const sum = parseFloat(packtable) + parseFloat(rmd) + parseFloat(rsampleqc) + parseFloat(rpackinner) + parseFloat(rfeeding);
        setRmtotal(sum || 0);
    };
    const handlePlaningChange = (e) => {
        const newPlanning = e.target.value;
        setPlanning(newPlanning);
        calculateSum(reguler, newPlanning, hold);
    };
    const handleRegulerChange = (e) => {
        const newReguler = e.target.value;
        setReguler(newReguler);
        calculateSum(newReguler, planning, hold);
    };
    const handleHoldChange = (e) => {
        const newHold = e.target.value;
        setHold(newHold);
        calculateSum(reguler, planning, newHold);
    };
    const handlermTotal = (e) => {
        const packtable = e.target.value;
        setRPackTable(packtable);
        calculateSumRM(packtable)
    }

    const calculateSumSampah = (newtampungan) => {
        const sum = parseFloat(newtampungan) + parseFloat(mcbks) + parseFloat(ptable) + parseFloat(serbuk);
        setTotal(sum || 0);
    };
    const handleSampahTotal = (e) => {
        const newtampungan = e.target.value;
        setTampungan(newtampungan);
        calculateSumSampah(newtampungan)
    }
    const calculateSumWip = (newwikulit) => {
        const sum = parseFloat(newwikulit) + parseFloat(wipackinner);
        setWitotal(sum || 0);
    };
    const sethandlerwip = (e) => {
        const newwikulit = e.target.value;
        setWikulit(newwikulit);
        calculateSumWip(newwikulit)
    }

    const calculatetotalRM = (newrme12) => {
        const sum = (parseFloat(rmE1) + parseFloat(rmE2) + parseFloat(rmE3) + parseFloat(rmE4) + parseFloat(rmE5) + parseFloat(rmE6) + parseFloat(rmE7) + parseFloat(rmE8) + parseFloat(rmE9) + parseFloat(rmE10) + parseFloat(rmE11) + parseFloat(newrme12)).toFixed(2);
        setRejectinnermesinroll(sum || 0);
    };
    const handletotalRM = (e) => {
        const newrme12 = e.target.value;
        setRmE12(newrme12);
        calculatetotalRM(newrme12)
    }

    const calculatetotalVi = (newVie12) => {
        const sum = (parseFloat(viE1) + parseFloat(viE2) + parseFloat(viE3) + parseFloat(viE4) + parseFloat(viE5) + parseFloat(viE6) + parseFloat(viE7) + parseFloat(viE8) + parseFloat(viE9) + parseFloat(viE10) + parseFloat(viE11) + parseFloat(newVie12)).toFixed(2);
        setVariance(sum || 0);
    };
    const handletotalVIE = (e) => {
        const newVie12 = e.target.value;
        setViE12(newVie12);
        calculatetotalVi(newVie12)
    }

    const calculatesakhirvi = (newreject) => {
        const sum = parseFloat(viawal) + parseFloat(viambil) - parseFloat(vireturn) - parseFloat(viRainner) - parseFloat(newreject);
        setViakhir(sum || 0);
    };
    const handlesakhirvi = (e) => {
        const newreject = e.target.value;
        setViinner(newreject);
        calculatesakhirvi(newreject)
    }

    const calculateskarton = (newkartonakhir) => {
        const sum = parseFloat(krkawal) + parseFloat(krAwal) - parseFloat(krpakai) - parseFloat(kreturn) - parseFloat(newkartonakhir);
        setKrakhir(sum || 0);
    };
    const handlekarton = (e) => {
        const newkartonakhir = e.target.value;
        setKreject(newkartonakhir);
        calculateskarton(newkartonakhir)
    }

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Typography variant="h5">Primary</Typography>
                        <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }}>
                            <Grid item xs={12} sm={2}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date"
                                        value={valueDate}
                                        onChange={(newValue) => setValueDate(newValue)}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <InputLabel>Shift</InputLabel>
                                    <Select
                                        value={shift}
                                        onChange={(e) => setShift(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Shift 1">Shift 1</MenuItem>
                                        <MenuItem value="Shift 2">Shift 2</MenuItem>
                                        <MenuItem value="Shift 3">Shift 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <InputLabel>SKU</InputLabel>
                                    <Select
                                        value={sku}
                                        onChange={(e) => setSKU(e.target.value)} >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="ROMA KELAPA (410279)">ROMA KELAPA (410279)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Planning"
                                    value={planning}
                                    onChange={handlePlaningChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Release"
                                    value={reguler}
                                    onChange={handleRegulerChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Hold"
                                    value={hold}
                                    onChange={handleHoldChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Output (%)"
                                    value={output}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl required sx={{ width: '100%' }}>
                                    <InputLabel>Bubuk</InputLabel>
                                    <Select
                                        value={bubuk}
                                        onChange={(e) => setbubuk(e.target.value)}
                                    >
                                        <MenuItem value="0">Murni</MenuItem>
                                        <MenuItem value="10">10</MenuItem>
                                        <MenuItem value="20">20</MenuItem>
                                        <MenuItem value="30">30</MenuItem>
                                        <MenuItem value="40">40</MenuItem>
                                        <MenuItem value="50">50</MenuItem>
                                        <MenuItem value="60">60</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">REJECT RM (Kg)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RMD"
                                    value={rmd}
                                    onChange={(e) => setRMD(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Rfeeding"
                                    value={rfeeding}
                                    onChange={(e) => setRfeeding(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="R sample qc"
                                    value={rsampleqc}
                                    onChange={(e) => setRsampleqc(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label=" R Pack Inner"
                                    value={rpackinner}
                                    onChange={(e) => setRpackinner(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Pack Table"
                                    value={rpackTable}
                                    onChange={handlermTotal}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Total RM"
                                    value={rmtotal}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Data Reject RM / Mesin (Kg)</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E1"
                                    value={rmE1}
                                    onChange={(e) => setRmE1(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E2"
                                    value={rmE2}
                                    onChange={(e) => setRmE2(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E3"
                                    value={rmE3}
                                    onChange={(e) => setRmE3(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E4"
                                    value={rmE4}
                                    onChange={(e) => setRmE4(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E5"
                                    value={rmE5}
                                    onChange={(e) => setRmE5(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E6"
                                    value={rmE6}
                                    onChange={(e) => setRmE6(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E7"
                                    value={rmE7}
                                    onChange={(e) => setRmE7(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E8"
                                    value={rmE8}
                                    onChange={(e) => setRmE8(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E9"
                                    value={rmE9}
                                    onChange={(e) => setRmE9(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E10"
                                    value={rmE10}
                                    onChange={(e) => setRmE10(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E11"
                                    value={rmE11}
                                    onChange={(e) => setRmE11(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="RM E12"
                                    value={rmE12}
                                    onChange={handletotalRM}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Total Reject Inner Mesin Bungkus kg"
                                    value={roll}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Sampah Oven</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Reject oven"
                                    value={roven}
                                    onChange={(e) => setRoven(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Sampah oven"
                                    value={soven}
                                    onChange={(e) => setSoven(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Sampah (KG)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Mesin Bungkus"
                                    value={mcbks}
                                    onChange={(e) => setMcbks(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Packing Table"
                                    value={ptable}
                                    onChange={(e) => setPtable(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Serbuk"
                                    value={serbuk}
                                    onChange={(e) => setSerbuk(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Tampungan"
                                    value={tampungan}
                                    onChange={handleSampahTotal}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Total"
                                    value={total}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Total dan Berat Pack</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Berat/Pack"
                                    value={brtpack}
                                    onChange={(e) => setBrtpack(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Batch Cetak"
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Batch dan WIP</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    label="WIP Inner"
                                    value={wiinner}
                                    onChange={(e) => setWiinner(e.target.value)}
                                    fullWidth
                                />
                            </Grid> */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="WIP Pack Inner"
                                    value={wipackinner}
                                    onChange={(e) => setWipackinner(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="WIP Kulit"
                                    value={wikulit}
                                    onChange={sethandlerwip}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="WIP Total"
                                    value={witotal}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5"> Variance Inner (VI)</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="S Awal"
                                    value={viawal}
                                    onChange={(e) => setViawal(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Ambil"
                                    value={viambil}
                                    onChange={(e) => setViambil(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="R inner"
                                    value={viRainner}
                                    onChange={(e) => setViRainner(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Return"
                                    value={vireturn}
                                    onChange={(e) => setVireturn(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Pakai"
                                    value={viinner}
                                    onChange={handlesakhirvi}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="S Akhir"
                                    value={viakhir}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            {[viE1, viE2, viE3, viE4, viE5, viE6, viE7, viE8, viE9, viE10, viE11].map((value, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <TextField
                                        label={`VI E${index + 1}`}
                                        value={value}
                                        onChange={(e) => {
                                            const setters = [setViE1, setViE2, setViE3, setViE4, setViE5, setViE6, setViE7, setViE8, setViE9, setViE10, setViE11];
                                            setters[index](e.target.value);
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            ))}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Vi E12"
                                    value={viE12}
                                    onChange={handletotalVIE}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Total Reject Inner Mesin Bungkus Roll"
                                    value={variance}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Karton reguler</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="S Awal"
                                    value={krkawal}
                                    onChange={(e) => setKrkawal(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Ambil"
                                    value={krAwal}
                                    onChange={(e) => setKrAwal(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Pakai"
                                    value={krpakai}
                                    onChange={(e) => setKrpakai(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Return"
                                    value={kreturn}
                                    onChange={(e) => setKreturn(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Reject"
                                    value={kreject}
                                    onChange={handlekarton}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="S Akhir"
                                    value={krakhir}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Kendala</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Kendala 1"
                                    value={kendala1}
                                    rows={4}
                                    multiline
                                    onChange={(e) => setKendala1(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Kendala 2"
                                    value={kendala2}
                                    rows={4}
                                    multiline
                                    onChange={(e) => setKendala2(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Kendala 3"
                                    value={kendala3}
                                    rows={4}
                                    multiline
                                    onChange={(e) => setKendala3(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Kendala 4"
                                    value={kendala4}
                                    rows={4}
                                    multiline
                                    onChange={(e) => setKendala4(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Kendala 5"
                                    value={kendala5}
                                    rows={4}
                                    multiline
                                    onChange={(e) => setKendala5(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={1} >
                                <ButtonSave lhp={LHP}  />
                            </Grid>
                            <Grid item xs={12} sm={1} >
                                <ButtonOff lhp={LHPDUA}  />
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <div>
            {alert ? <Alert severity="success">{alertContent}</Alert> : <></> }
            </div> */}
                </MainCard >

            )}
        </>
    );
};

FormLHP.propTypes = {
    isLoading: PropTypes.bool,
    label0: PropTypes.bool
};

export default FormLHP;