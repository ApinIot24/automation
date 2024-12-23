import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Grid, Divider, Select, MenuItem, InputLabel, FormControl, TextField, Typography, CardContent, Button } from '@mui/material';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// import { useNavigate } from "react-router-dom";
import MainCard from 'ui-component/cards/MainCard';
import ButtonSave from 'ui-component/ButtonSaveL7';
import ButtonOff from 'ui-component/ButtonOffL7';
// import axios from 'axios';
// ==============================|| HAPPY CODING ||============================== //

const FormLHP = ({ isLoading, label0, label1, label2, label3, label4, label5, label6, label7, label8 }) => {
    // const [alert, setAlert] = useState(false);
    // const [alertContent, setAlertContent] = useState('');
    const users = localStorage.getItem('username');
    const [valuedate, setValueDate] = useState(dayjs(new Date()));
    const [shift, setShift] = useState('');
    const [plan, setPlan] = useState('');
    const [real, setReal] = useState('');
    const [ach, setAch] = useState('');
    const [sku, setSKU] = useState('');
    const [cello, setCello] = useState('');
    const [cello1, setCello1] = useState('');
    const [cello2, setCello2] = useState('');
    const [cello3, setCello3] = useState('');
    const [cello4, setCello4] = useState('');
    const [cello5, setCello5] = useState('');
    const [cello6, setCello6] = useState('');
    const [cello7, setCello7] = useState('');
    const [cello8, setCello8] = useState('');
    const [sumpack, setSumPack] = useState('');
    const [pack1, setPack1] = useState('');
    const [pack2, setPack2] = useState('');
    const [pack3, setPack3] = useState('');
    const [pack4, setPack4] = useState('');
    const [pack5, setPack5] = useState('');
    const [pack6, setPack6] = useState('');
    const [pack7, setPack7] = useState('');
    const [pack8, setPack8] = useState('');
    const [speed1, setSpeed1] = useState('');
    const [speed2, setSpeed2] = useState('');
    const [speed3, setSpeed3] = useState('');
    const [speed4, setSpeed4] = useState('');
    const [speed5, setSpeed5] = useState('');
    const [speed6, setSpeed6] = useState('');
    const [speed7, setSpeed7] = useState('');
    const [speed8, setSpeed8] = useState('');
    const [adonan, setAdonan] = useState('');
    const [avgbook, setAVGBook] = useState('');
    const [avgsheet, setAVGSheet] = useState('');
    const [creamccb, setCreamCCB] = useState('');
    const [coklat, setCoklat] = useState('');
    const [sheet, setSheet] = useState('');
    const [book, setBook] = useState('');
    const [cutkasar, setCutkasar] = useState('');
    const [bubukcut, setBubukCut] = useState('');
    const [sapuancut, setSapuanCut] = useState('');
    const [qccello, setQCCello] = useState('');
    const [qcpacking, setQCPacking] = useState('');
    const [cellocpp, setCelloCPP] = useState('');
    const [dbsup, setDbSup] = useState('');
    const [dbproud, setDbProud] = useState('');
    const [plastik_pof, setPofKg] = useState('');
    const [ctnsup, setCtnSup] = useState('');
    const [ctnproud, setCtnProud] = useState('');
    const [cello_used, setCelloUsed] = useState('');
    const [pofkue, setPofKue] = useState('');
    const [sapuanpack, setSapuanPack] = useState('');
    const [buble, setBuble] = useState('');
    const [supcello, setSupCello] = useState('');
    const [samplectnqc, setSampleCtnQc] = useState('');
    const [forbanded, setForBanded] = useState('');
    const [forbanded2, setForBanded2] = useState('');
    const [cutoff, setCutOff] = useState('');
    const [ctnluar, setCtnLuar] = useState('');
    var celloall = {
        cello: cello,
        cello1: cello1,
        cello2: cello2,
        cello3: cello3,
        cello4: cello4,
        cello5: cello5,
        cello6: cello6,
        cello7: cello7,
        cello8: cello8,
    }
    var packall = {
        sumpack: sumpack,
        pack1: pack1,
        pack2: pack2,
        pack3: pack3,
        pack4: pack4,
        pack5: pack5,
        pack6: pack6,
        pack7: pack7,
        pack8: pack8,
    }
    var speedall = {
        speed1: speed1,
        speed2: speed2,
        speed3: speed3,
        speed4: speed4,
        speed5: speed5,
        speed6: speed6,
        speed7: speed7,
        speed8: speed8,
    }
    var ctnall = {
        ctnsup: ctnsup,
        ctnproud: ctnproud,
    }
    var dball = {
        dbsup: dbsup,
        dbproud: dbproud,
    }
    const LHP = {

        realdatetime: valuedate.format('YYYY-MM-DD'),
        grup: '7',
        shift: shift,
        sku: sku,
        plan: plan,
        real: real,
        ach: ach,
        cello: celloall,
        cellocpp: cellocpp,
        ctn_type: ctnall,
        d_b: dball,
        plastik_pof: plastik_pof,
        cello_used: cello_used,
        adonan_used: adonan,
        ccbcream_used: creamccb,
        coklat_used: coklat,
        avgsheet: avgsheet,
        avgbook: avgbook,
        sheet: sheet,
        book: book,
        cutkasar: cutkasar,
        bubukcuttig: bubukcut,
        sapuancut: sapuancut,
        qcpacking: qcpacking,
        qccello: qccello,
        packing_reject: packall,
        pof_kue: pofkue,
        sapuanpack: sapuanpack,
        buble: buble,
        suppliercello: supcello,
        speed_mesin: speedall,
        sample_ctn_qc: samplectnqc,
        banded_under: forbanded,
        banded_over: forbanded2,
        cutoff_jam: cutoff,
        ctn_luar: ctnluar,
        users_input: users
    };
    const LHPDUA = {
        realdatetime: valuedate,
        grup: label0,
        shift: shift,
        sku: "-",
        plan: 0,
        real: 0,
        ach: 0,
        cello: 0,
        cellocpp: 0,
        ctn_type: 0,
        cello_used: 0,
        adonan_used: 0,
        ccbcream_used: 0,
        avgsheet: 0,
        avgbook: 0,
        sheet: 0,
        book: 0,
        cutkasar: 0,
        bubukcuttig: 0,
        sapuancut: 0,
        qcpacking: 0,
        qccello: 0,
        packing_reject: 0,
        banded: 0,
        sapuanpack: 0,
        buble: 0,
        suppliercello: 0,
        speed_mesin: 0,
        kendala: 0,
        sample_ctn_qc: 0,
        banded_under: 0,
        banded_over: 0,
        cutoff_jam: 0,
        ctn_luar: 0
    };


    const handleSelectChange = (index, event) => {
        const updatedEntries = [...timeEntries];
        updatedEntries[index]['unit_mesin'] = event.target.value;
        setTimeEntries(updatedEntries);
    };
    const [timeEntries, setTimeEntries] = useState([{ time_start: null, time_stop: null, total_dt: '', kendala: '' }]);

    const addTimeEntry = () => {
        setTimeEntries([...timeEntries, { time_start: null, time_stop: null, total_dt: '', kendala: '' }]);
    };

    const removeTimeEntry = (index) => {
        if (timeEntries.length > 1) {
            const newEntries = timeEntries.filter((_, i) => i !== index);
            setTimeEntries(newEntries);
        }
    };

    const handleChange = (index, field, value) => {
        const updatedEntries = [...timeEntries];
        updatedEntries[index][field] = value;

        if (field === 'time_start' || field === 'time_stop') {
            const start = updatedEntries[index].time_start;
            const stop = updatedEntries[index].time_stop;

            if (start && stop) {
                let duration;
                if (stop.isBefore(start)) {
                    duration = stop.add(1, 'day').diff(start, 'minute');
                } else {
                    duration = stop.diff(start, 'minute');
                }
                updatedEntries[index].total_dt = duration;
            } else {
                updatedEntries[index].total_dt = '';
            }
        }

        setTimeEntries(updatedEntries);
    };

    useEffect(() => {
    }, []);
    const unitMesinOptions = [
        { value: 'None', label: 'none'},
        { value: 'G1', label: 'G1' },
        { value: 'G2', label: 'G2' },
        { value: 'G3', label: 'G3' },
        { value: 'G4', label: 'G4' },
        { value: 'G5', label: 'G5' },
        { value: 'G6', label: 'G6' },
        { value: 'G7', label: 'G7' },
        { value: 'G8', label: 'G8' },
        { value: 'Oven', label: 'Oven' },
        { value: 'MD', label: 'MD' },
        { value: 'Banded', label: 'Banded' },
        { value: 'Cooling', label: 'Cooling' },
        { value: 'BallMill', label: 'BallMill' },
        { value: 'Mixer', label: 'Mixer' },
        { value: 'Cream Builder', label: 'Cream Builder' },
        { value: 'Cooling Box', label: 'Cooling Box' },
        { value: 'Cutting', label: 'Cutting' },
        { value: 'Enrober', label: 'Enrober' },
        { value: 'Cooling Tunnel', label: 'Cooling Tunnel' },
        { value: 'Packing', label: 'Packing' },
        { value: 'Shrinking', label: 'Shrinking' },
        { value: 'Carton Sealer', label: 'Carton Sealer' }
    ];
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Typography variant="h5">Primary</Typography>
                        <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }} >
                            <Grid item xs={12} sm={2} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date"
                                        value={valuedate}
                                        onChange={(newValue) => {
                                            setValueDate(newValue);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <InputLabel id="demo-simple-select-required-label">Shift</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={shift}
                                        onChange={e => setShift(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'1'}>Shift 1</MenuItem>
                                        <MenuItem value={'2'}>Shift 2</MenuItem>
                                        <MenuItem value={'3'}>Shift 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <InputLabel id="demo-simple-select-required-label">SKU</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={sku}
                                        onChange={e => setSKU(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Wafello Chocoblast 12 x 10 x 17'}>Wafello Chocoblast 12 x 10 x 17 </MenuItem>
                                        <MenuItem value={'Wafello Chocoblast 6 x 10 x 43'}>Wafello Chocoblast  6 x 10 x 43</MenuItem>
                                        <MenuItem value={'Wafello Butter Caramel 12 x 10 x 17'}>Wafello Butter Caramel 12 x 10 x 17</MenuItem>
                                        <MenuItem value={'Superstar TCW 8 x 20 x 16'}>Superstar TCW 8 x 20 x 16</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={4} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPlan(e.target.value)}
                                        value={plan}
                                        required
                                        id="outlined-required"
                                        label="Plan (Ctn)"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setReal(e.target.value)}
                                        value={real}
                                        required
                                        id="outlined-required"
                                        label="Real(Ctn)"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setAch(e.target.value)}
                                        value={ach}
                                        required
                                        id="outlined-required"
                                        label="Ach(%)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">REJECT PM</Typography>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={2} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello(e.target.value)}
                                        value={cello}
                                        required
                                        id="outlined-required"
                                        label="Cello (Kg)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello1(e.target.value)}
                                        value={cello1}
                                        required
                                        id="outlined-required"
                                        label={label1}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello2(e.target.value)}
                                        value={cello2}
                                        required
                                        id="outlined-required"
                                        label={label2}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello3(e.target.value)}
                                        required
                                        value={cello3}
                                        id="outlined-required"
                                        label={label3}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello4(e.target.value)}
                                        required
                                        value={cello4}
                                        id="outlined-required"
                                        label={label4}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello5(e.target.value)}
                                        required
                                        value={cello5}
                                        id="outlined-required"
                                        label={label5}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello6(e.target.value)}
                                        required
                                        value={cello6}
                                        id="outlined-required"
                                        label={label6}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello7(e.target.value)}
                                        required
                                        value={cello7}
                                        id="outlined-required"
                                        label={label7}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCello8(e.target.value)}
                                        required
                                        value={cello8}
                                        id="outlined-required"
                                        label={label8}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={3} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCelloCPP(e.target.value)}
                                        value={cellocpp}
                                        required
                                        id="outlined-required"
                                        label="Cello CPP (Kg)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setDbSup(e.target.value)}
                                        value={dbsup}
                                        required
                                        id="outlined-required"
                                        label="Db Sup (lbr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setDbProud(e.target.value)}
                                        value={dbproud}
                                        required
                                        id="outlined-required"
                                        label="Db Proud (lbr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCtnSup(e.target.value)}
                                        value={ctnsup}
                                        required
                                        id="outlined-required"
                                        label="Ctn Sup (lbr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCtnProud(e.target.value)}
                                        value={ctnproud}
                                        required
                                        id="outlined-required"
                                        label="Ctn Proud (lbr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPofKg(e.target.value)}
                                        value={plastik_pof}
                                        required
                                        id="outlined-required"
                                        label="Plastik Pof (kg)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCelloUsed(e.target.value)}
                                        value={cello_used}
                                        required
                                        id="outlined-required"
                                        label="Pemakaian Cello"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={3} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setAdonan(e.target.value)}
                                        value={adonan}
                                        required
                                        id="outlined-required"
                                        label="Pemakaian Adonan"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCreamCCB(e.target.value)}
                                        value={creamccb}
                                        required
                                        id="outlined-required"
                                        label="Pemakaian Cream CCB(kg)"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCoklat(e.target.value)}
                                        value={coklat}
                                        required
                                        id="outlined-required"
                                        label="Pemakaian Coklat(kg)"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs
                                ={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setAVGSheet(e.target.value)}
                                        value={avgsheet}
                                        required
                                        id="outlined-required"
                                        label="Rata-rata Sheet(gr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setAVGBook(e.target.value)}
                                        value={avgbook}
                                        required
                                        id="outlined-required"
                                        label="Rata-rata Book (gr)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">REJECT(kg)</Typography>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={1.6} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSheet(e.target.value)}
                                        value={sheet}
                                        required
                                        id="outlined-required"
                                        label="Sheet"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setBook(e.target.value)}
                                        value={book}
                                        required
                                        id="outlined-required"
                                        label="Book"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCutkasar(e.target.value)}
                                        value={cutkasar}
                                        required
                                        id="outlined-required"
                                        label="Potongan Kasar"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setBubukCut(e.target.value)}
                                        value={bubukcut}
                                        required
                                        id="outlined-required"
                                        label="Bubuk Cutting"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSapuanCut(e.target.value)}
                                        value={sapuancut}
                                        required
                                        id="outlined-required"
                                        label="Sapuan Cutting"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setQCPacking(e.target.value)}
                                        value={qcpacking}
                                        required
                                        id="outlined-required"
                                        label="QC Packing"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={1.6}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setQCCello(e.target.value)}
                                        value={qccello}
                                        required
                                        id="outlined-required"
                                        label="QC Cello"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={2} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSumPack(e.target.value)}
                                        value={sumpack}
                                        required
                                        id="outlined-required"
                                        label="Total Packing"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack1(e.target.value)}
                                        value={pack1}
                                        required
                                        id="outlined-required"
                                        label={label1}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack2(e.target.value)}
                                        value={pack2}
                                        required
                                        id="outlined-required"
                                        label={label2}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack3(e.target.value)}
                                        value={pack3}
                                        required
                                        id="outlined-required"
                                        label={label3}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack4(e.target.value)}
                                        value={pack4}
                                        required
                                        id="outlined-required"
                                        label={label4}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack5(e.target.value)}
                                        value={pack5}
                                        required
                                        id="outlined-required"
                                        label={label5}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack6(e.target.value)}
                                        value={pack6}
                                        required
                                        id="outlined-required"
                                        label={label6}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack7(e.target.value)}
                                        value={pack7}
                                        required
                                        id="outlined-required"
                                        label={label7}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPack8(e.target.value)}
                                        value={pack8}
                                        required
                                        id="outlined-required"
                                        label={label8}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={3} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setPofKue(e.target.value)}
                                        value={pofkue}
                                        required
                                        id="outlined-required"
                                        label="Pof Kue"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSapuanPack(e.target.value)}
                                        value={sapuanpack}
                                        required
                                        id="outlined-required"
                                        label="Sapuan Packing"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setBuble(e.target.value)}
                                        value={buble}
                                        required
                                        id="outlined-required"
                                        label="Buble"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSupCello(e.target.value)}
                                        value={supcello}
                                        required
                                        id="outlined-required"
                                        label="Suplier Cello"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Speed Mesin Packing</Typography>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={2.4} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed1(e.target.value)}
                                        value={speed1}
                                        required
                                        id="outlined-required"
                                        label={label1}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed2(e.target.value)}
                                        value={speed2}
                                        required
                                        id="outlined-required"
                                        label={label2}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed3(e.target.value)}
                                        value={speed3}
                                        required
                                        id="outlined-required"
                                        label={label3}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed4(e.target.value)}
                                        value={speed4}
                                        required
                                        id="outlined-required"
                                        label={label4}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed5(e.target.value)}
                                        value={speed5}
                                        required
                                        id="outlined-required"
                                        label={label5}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed6(e.target.value)}
                                        value={speed6}
                                        required
                                        id="outlined-required"
                                        label={label6}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed7(e.target.value)}
                                        value={speed7}
                                        required
                                        id="outlined-required"
                                        label={label7}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSpeed8(e.target.value)}
                                        value={speed8}
                                        required
                                        id="outlined-required"
                                        label={label8}
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Tambahan</Typography>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={2.4} >
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setSampleCtnQc(e.target.value)}
                                        value={samplectnqc}
                                        required
                                        id="outlined-required"
                                        label="Sample Carton QC"
                                        type="number"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setForBanded(e.target.value)}
                                        value={forbanded}
                                        required
                                        id="outlined-required"
                                        label="Pengulangan Banded (under)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setForBanded2(e.target.value)}
                                        value={forbanded2}
                                        required
                                        id="outlined-required"
                                        label="Pengulangan Banded (over)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCutOff(e.target.value)}
                                        value={cutoff}
                                        required
                                        id="outlined-required"
                                        label="Cut Off(jam)"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={2.4}>
                                <FormControl required sx={{ m: 1, width: '100%' }}>
                                    <TextField
                                        onChange={e => setCtnLuar(e.target.value)}
                                        value={ctnluar}
                                        required
                                        id="outlined-required"
                                        label="Carton luar"
                                        defaultValue=""
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                            <Typography variant="h5">Downtime</Typography>

                            {timeEntries.map((entry, index) => (
                                <Grid container m={2} spacing={2} direction="row" key={index}>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Start"
                                            value={entry.time_start}
                                            onChange={(newValue) => handleChange(index, 'time_start', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth required />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Stop"
                                            value={entry.time_stop}
                                            onChange={(newValue) => handleChange(index, 'time_stop', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth required />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TextField
                                            name="total_dt"
                                            label="Total DT"
                                            value={entry.total_dt}
                                            fullWidth
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TextField
                                            name="part_mesin"
                                            label="Part Mesin"
                                            value={entry.part_mesin}
                                            onChange={(e) => handleChange(index, 'part_mesin', e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="unit-mesin-label">Unit Mesin</InputLabel>
                                            <Select
                                                labelId="unit-mesin-label"
                                                id="unit-mesin-select"
                                                name="unit_mesin"
                                                value={entry.unit_mesin || ''}
                                                label="Unit Mesin"
                                                onChange={(event) => handleSelectChange(index, event)} // Menggunakan handleSelectChange
                                            >
                                                {unitMesinOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            name="kendala"
                                            label="Kendala"
                                            value={entry.kendala}
                                            onChange={(e) => handleChange(index, 'kendala', e.target.value)}
                                            fullWidth
                                            required
                                            multiline
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            name="penyebab"
                                            label="penyebab"
                                            value={entry.penyebab}
                                            onChange={(e) => handleChange(index, 'penyebab', e.target.value)}
                                            fullWidth
                                            required
                                            multiline
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            name="perbaikan"
                                            label="perbaikan"
                                            value={entry.perbaikan}
                                            onChange={(e) => handleChange(index, 'perbaikan', e.target.value)}
                                            fullWidth
                                            required
                                            multiline
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <Button variant="outlined" onClick={() => removeTimeEntry(index)} disabled={timeEntries.length === 1}>
                                            Remove
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <Button variant="contained" onClick={addTimeEntry}>
                                            Add Time
                                        </Button>
                                    </Grid>
                                </Grid>
                            ))}
                        </LocalizationProvider>
                        <Grid container spacing={2} direction="row" >
                            <Grid item xs={12} sm={1} >
                                <ButtonSave lhp={LHP} downtime={timeEntries} />
                            </Grid>
                            <Grid item xs={12} sm={1} >
                                <ButtonOff lhp={LHPDUA} />
                            </Grid>
                        </Grid>

                    </CardContent>
                    {/* <div>
            {alert ? <Alert severity="success">{alertContent}</Alert> : <></> }
            </div> */}
                </MainCard>

            )}
        </>
    );
};

FormLHP.propTypes = {
    isLoading: PropTypes.bool,
    label0: PropTypes.bool,
    label1: PropTypes.bool,
    label2: PropTypes.bool,
    label3: PropTypes.bool,
    label4: PropTypes.bool,
    label5: PropTypes.bool,
    label6: PropTypes.bool,
    label7: PropTypes.bool,
    label8: PropTypes.bool,
};

export default FormLHP;