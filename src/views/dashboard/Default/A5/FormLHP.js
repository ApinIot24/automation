import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Grid, Divider, Select, MenuItem, InputLabel, FormControl, TextField, Typography, CardContent, Button } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import MainCard from 'ui-component/cards/MainCard';
import ButtonSave from 'ui-component/ButtonSave';
import axios from 'axios';

// ==============================|| HAPPY CODING ||============================== //

const FormLHP = ({ isLoading, label0, label1, label2, label3, label4, label5 }) => {
    const [formState, setFormState] = useState({
        realdatetime: dayjs(new Date()),
        shift: '',
        sku: '',
        plan: '',
        real: '',
        ach: '',
        cello: {
            cello: '',
            cello1: '',
            cello2: '',
            cello3: '',
            cello4: '',
            cello5: ''
        },
        packing_reject: {
            sumpack: '',
            pack1: '',
            pack2: '',
            pack3: '',
            pack4: '',
            pack5: ''
        },
        speed_mesin: {
            speed1: '',
            speed2: '',
            speed3: '',
            speed4: '',
            speed5: ''
        },
        ctn_type: {
            ctnsup: '',
            ctnproud: ''
        },
        ctn_luar: '',
        cellocpp: '',
        cello_used: '',
        adonan_used: '',
        avgbook: '',
        avgsheet: '',
        ccbcream_used: '',
        sheet: '',
        book: '',
        cutkasar: '',
        bubukcutting: '',
        sapuancut: '',
        qcpacking: '',
        qccello: '',
        banded: '',
        sapuanpack: '',
        buble: '',
        suppliercello: '',
        sample_ctn_qc: '',
        banded_under: '',
        banded_over: '',
        cutoff_jam: '',
        // Field baru
        planning_hours: '',
        late_start_early_stop: '',
        late_start_early_stop_sbl: '',
        technical_breakdown: '',
        technical_breakdown_sbl: '',
        idle_minor_stoppages: '',
        idle_minor_stoppages_sbl: '',
        reduce_speed: {
            reduce_speed_1: '',
            reduce_speed_2: '',
            reduce_speed_3: '',
            reduce_speed_4: '',
            reduce_speed_5: '',
        },
        reduce_speed_menit: {
            reduce_speed_menit_1: '',
            reduce_speed_menit_2: '',
            reduce_speed_menit_3: '',
            reduce_speed_menit_4: '',
            reduce_speed_menit_5: '',
        },
        reduce_speed_sbl: '',
        users_input: '',
        uh: '',
        hadir: '',
        jam_kerja: '',
        jenis_adonan: '',
        give_ado: '',
        give_cream: '',
        give_cello: '',
        rej_ado: '',
        rej_cream: '',
        wip_kg: '',
        book_kotor: '',
        bs_cello: '',
        pakai_ctn: '',
        bs_cpp_roll: '',
        mc_quality: '',
        sbl_ls_es: '',
        sbl_tbd: '',
        sbl_sua: '',
        sbl_ims: '',
        sbl_rs: ''
    });
    const [dataControl, setDataControl] = useState({
        namaProduk: '',
        speedOven: '',
        beratSheetUtuh: '',
        beratSheet1Book: '',
        beratBook: '',
        perPcsSheet: '',
        perPcsCream: '',
        perPcsCoklat: '',
        perPcsKarton: '',
        planningPerMenitSheet: '',
        planningPerMenitCream: '',
        planningPerMenitCoklat: ''
    });
    // Fungsi untuk memperbarui formState termasuk objek nested
    const handleChange = (name, value, nestedObj = null) => {
        if (nestedObj) {
            setFormState((prevState) => ({
                ...prevState,
                [nestedObj]: {
                    ...prevState[nestedObj],
                    [name]: value,
                },
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    const renderTextField = (label, field, isRequired = false, nestedObj = null, type = 'text', isDisabled = false) => (
        <FormControl required={isRequired} sx={{ m: 1, width: '100%' }}>
            <TextField
                label={label}
                value={nestedObj ? formState[nestedObj][field] : formState[field]}
                onChange={(e) => handleChange(field, e.target.value, nestedObj)}
                fullWidth
                required={isRequired}
                type={type}
                disabled={isDisabled} // Menambahkan opsi disabled
            />
        </FormControl>
    );

    const [timeEntries, setTimeEntries] = useState([{
        time_start: null,
        time_stop: null,
        total_dt: '',
        part_mesin: '',
        unit_mesin: '',
        kategori_downtime: '',
        kendala: '',
        speed_oven_plan: '',
        speed_oven_reduce: '',
        total_sbl: ''
    }]);

    const addTimeEntry = () => {
        setTimeEntries([...timeEntries, {
            time_start: null,
            time_stop: null,
            total_dt: '',
            part_mesin: '',
            unit_mesin: '',
            kategori_downtime: '',
            kendala: '',
            speed_oven_plan: '',
            speed_oven_reduce: '',
            total_sbl: '',
            showSpeedOptions: false,
            showPartMesin: false,
        }]);
    };

    const removeTimeEntry = (index) => {
        if (timeEntries.length > 1) {
            const newEntries = timeEntries.filter((_, i) => i !== index);
            setTimeEntries(newEntries);
        }
    };

    // Fungsi untuk menghitung Total SBL
    const calculateTotalSBL = (entry) => {
        const { speed_oven_plan, speed_oven_reduce, total_dt } = entry;
        if (speed_oven_plan && speed_oven_reduce && total_dt && speed_oven_plan !== 0) {
            const sbl = ((speed_oven_plan - speed_oven_reduce) / speed_oven_plan) * total_dt;
            return sbl.toFixed(2); // hasil dibulatkan ke 2 angka desimal
        }
        return '';
    };

    // Menghitung Total DT dan Total SBL jika diperlukan
    const handleChangeTime = (index, field, value) => {
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

        // Update Total SBL
        updatedEntries[index].total_sbl = calculateTotalSBL(updatedEntries[index]);
        setTimeEntries(updatedEntries);
    };

    const handleSelectChangeTime = (index, field, value) => {
        const updatedEntries = [...timeEntries];
        updatedEntries[index][field] = value;

        // Tampilkan opsi tambahan ketika kategori 'Reduce Speed' dipilih
        if (field === 'kategori_downtime') {
            updatedEntries[index].showSpeedOptions = value === 'Reduce Speed';

            // Tampilkan Part Mesin jika kategori sesuai
            const showPartMesinCategories = ['Technical Breakdown', 'Set up & Adjustment', 'Idle & Minor Stop'];
            updatedEntries[index].showPartMesin = showPartMesinCategories.includes(value);

            // Reset field jika kategori berubah
            if (value !== 'Reduce Speed') {
                updatedEntries[index].speed_oven_plan = '';
                updatedEntries[index].speed_oven_reduce = '';
            }
            if (!updatedEntries[index].showPartMesin) {
                updatedEntries[index].part_mesin = '';
            }
        }

        updatedEntries[index].total_sbl = calculateTotalSBL(updatedEntries[index]);
        setTimeEntries(updatedEntries);
    };


    const unitMesinOptions = [
        { value: 'A1', label: 'A1' },
        { value: 'A2', label: 'A2' },
        { value: 'A3', label: 'A3' },
        { value: 'A4', label: 'A4' },
        { value: 'A5', label: 'A5' },
        { value: 'B1', label: 'B1' },
        { value: 'B2', label: 'B2' },
        { value: 'B3', label: 'B3' },
        { value: 'B4', label: 'B4' },
        { value: 'B5', label: 'B5' },
        { value: 'Oven', label: 'Oven' },
        { value: 'MD', label: 'MD' },
        { value: 'Banded', label: 'Banded' },
        { value: 'Cutting', label: 'Cutting' },
    ];
    const KategoriOptions = [
        { value: 'Reduce Speed', label: 'Reduce Speed' },
        { value: 'Late Start / Early Stop', label: 'Late Start / Early Stop' },
        { value: 'Set up & Adjustment', label: 'Set up & Adjustment' },
        { value: 'Technical Breakdown', label: 'Technical Breakdown' },
        { value: 'Idle & Minor Stop', label: 'Idle & Minor Stop' },
    ];


    // late_start_early_stop
    useEffect(() => {
        const { planning_hours, late_start_early_stop } = formState;
        if (planning_hours && late_start_early_stop) {
            const lateStartEarlyStopSBL = (parseFloat(late_start_early_stop) / (parseFloat(planning_hours) * 60)) * 100;
            setFormState((prevState) => ({
                ...prevState,
                late_start_early_stop_sbl: lateStartEarlyStopSBL.toFixed(2),
            }));
        }
    }, [formState.planning_hours, formState.late_start_early_stop]);
    // technical_breakdown
    useEffect(() => {
        const { planning_hours, technical_breakdown } = formState;

        if (planning_hours && technical_breakdown) {
            const techBreakdownSBL = (parseFloat(technical_breakdown) / (parseFloat(planning_hours) * 60)) * 100;
            setFormState((prevState) => ({
                ...prevState,
                technical_breakdown_sbl: techBreakdownSBL.toFixed(2),
            }));
        }
    }, [formState.planning_hours, formState.technical_breakdown]);
    // idle_minor_stoppages
    useEffect(() => {
        const { planning_hours, idle_minor_stoppages } = formState;

        if (planning_hours && idle_minor_stoppages) {
            const idleMinorStoppagesSBL = (parseFloat(idle_minor_stoppages) / (parseFloat(planning_hours) * 60)) * 100;
            setFormState((prevState) => ({
                ...prevState,
                idle_minor_stoppages_sbl: idleMinorStoppagesSBL.toFixed(2),
            }));
        }
    }, [formState.planning_hours, formState.idle_minor_stoppages]);

    useEffect(() => {
        const { reduce_speed, reduce_speed_menit, planning_hours } = formState;
        const { speedOven } = dataControl;
        console.log(speedOven);
        if (speedOven && planning_hours) {
            let totalReduceSBL = 0;
            for (let i = 1; i <= 5; i++) {
                const reduceValue = parseFloat(reduce_speed[`reduce_speed_${i}`]) || 0;
                const reduceMenit = parseFloat(reduce_speed_menit[`reduce_speed_menit_${i}`]) || 0;
                const reduceSBL = ((speedOven - reduceValue) / speedOven) * reduceMenit;
                totalReduceSBL += reduceSBL;
            }
            const reduceSpeedSBLPercentage = (totalReduceSBL / (planning_hours * 60)) * 100;
            setFormState((prevState) => ({
                ...prevState,
                reduce_speed_sbl: reduceSpeedSBLPercentage.toFixed(2),
            }));
        }
    }, [
        formState.reduce_speed,
        formState.reduce_speed_menit,
        formState.planning_hours
    ]);



    useEffect(() => {
        const users = localStorage.getItem('username');
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://10.37.12.17:3000/control_lhp/l${label0}`);
                if (response.status === 200) {
                    setDataControl(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (users) {
            handleChange('users_input', users); // Simpan 'users_input' ke formState
            handleChange('grup', label0); // Simpan 'grup' ke formState
            fetchData();
        }
    }, [label0]);

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Typography variant="h5">Primary</Typography>
                        <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }}>
                            <Grid item xs={12} sm={3}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date"
                                        value={formState.realdatetime}
                                        onChange={(newDate) => handleChange('realdatetime', newDate)}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel>Shift</InputLabel>
                                    <Select
                                        value={formState.shift}
                                        onChange={(e) => handleChange('shift', e.target.value)}
                                    >
                                        <MenuItem value="1">Shift 1</MenuItem>
                                        <MenuItem value="2">Shift 2</MenuItem>
                                        <MenuItem value="3">Shift 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel>SKU</InputLabel>
                                    <Select
                                        value={formState.sku}
                                        onChange={(e) => handleChange('sku', e.target.value)}
                                    >
                                        <MenuItem value="WAFELLO CHOCOBLAST 12 x 10 x 17">Wafello Chocoblast 12 x 10 x 17</MenuItem>
                                        <MenuItem value="WAFELLO CHOCOBLAST 6 x 10 x 43">Wafello Chocoblast 6 x 10 x 43</MenuItem>
                                        <MenuItem value="WAFELLO BUTTER CARAMEL 12 x 10 x 17">Wafello Butter Caramel 12 x 10 x 17</MenuItem>
                                        <MenuItem value="SUPERSTAR TCW 8 x 20 x 16">Superstar TCW 8 x 20 x 16</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('UH', 'uh', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Man power / hadir', 'hadir', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Jam kerja ', 'jam_kerja', false)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Production Plan</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Plan (Ctn)', 'plan', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Real (Ctn)', 'real', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Ach (%)', 'ach', true)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Reject PM</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Cello (Kg)', 'cello', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label1, 'cello1', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label2, 'cello2', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label3, 'cello3', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label4, 'cello4', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label5, 'cello5', false, 'cello')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Cello CPP (Kg)', 'cellocpp', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('CPP BS Cello (roll)', 'bs_cpp_roll', true)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Carton Information</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Ctn Sup (lbr)', 'ctnsup', false, 'ctn_type')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('BS karton (lbr)', 'ctnproud', false, 'ctn_type')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pemakaian Cello (roll)', 'cello_used', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Carton Luar', 'ctn_luar', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('BS Cello (roll)', 'bs_cello', true)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Material Usage</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pemakaian Adonan (batch)', 'adonan_used', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pemakaian Cream CCB (Kg)', 'ccbcream_used', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel>Jenis Pemakaian Adonan</InputLabel>
                                    <Select
                                        value={formState.jenis_adonan}
                                        onChange={(e) => handleChange('jenis_adonan', e.target.value)}
                                    >
                                        <MenuItem value="Alt 1">Alt 1</MenuItem>
                                        <MenuItem value="Alt 2">Alt 2</MenuItem>
                                        <MenuItem value="Alt 3">Alt 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Rata-rata Sheet (gr)', 'avgsheet', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Rata-rata Book (gr)', 'avgbook', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Give / take away adonan', 'give_ado', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Give / take away cream', 'give_cream', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Give / take away cello', 'give_cello', true)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Reject (Kg)</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Sheet / Opak', 'sheet', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Book', 'book', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Potongan Kasar', 'cutkasar', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Serbuk Cutting', 'bubukcutting', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Sapuan Cutting', 'sapuancut', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('QC Packing', 'qcpacking', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reject packing(kg)', 'qccello', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reject real / adonan (kg)', 'rej_ado', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reject real / cream (kg)', 'rej_cream', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('WIP (kg)', 'wip_kg', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reject real / cream (kg)', 'rej_cream', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Book kotor (kg)', 'book_kotor', true)}
                            </Grid>

                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Packing</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Total Packing', 'sumpack', false, 'packing_reject')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label1, 'pack1', false, 'packing_reject')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label2, 'pack2', false, 'packing_reject')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label3, 'pack3', false, 'packing_reject')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label4, 'pack4', false, 'packing_reject')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label5, 'pack5', false, 'packing_reject')}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Speed Mesin</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label1, 'speed1', false, 'speed_mesin')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label2, 'speed2', false, 'speed_mesin')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label3, 'speed3', false, 'speed_mesin')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label4, 'speed4', false, 'speed_mesin')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField(label5, 'speed5', false, 'speed_mesin')}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Additional Info</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Banded', 'banded', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Sapuan Packing', 'sapuanpack', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Buble (kotoran mesin)', 'buble', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Suplier Cello', 'suppliercello', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pakai karton', 'pakai_ctn', true)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('MC dari quality (%)', 'mc_quality', true)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Tambahan</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Sample Carton QC', 'sample_ctn_qc', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pengulangan Banded (under)', 'banded_under', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Pengulangan Banded (over)', 'banded_over', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Cut Off (jam)', 'cutoff_jam', false)}
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Six Big Losses</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Late Start / Early Stop', 'sbl_ls_es', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Technical Breakdown', 'sbl_tbd', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Set Up & Adjustment', 'sbl_sua', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('idle & minor stop', 'sbl_ims', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed', 'sbl_rs', false)}
                            </Grid>

                        </Grid>

                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">SBL  (Masih Dalam Pengerjaan)</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Planning Hours', 'planning_hours', true)}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Late Start Early Stop (Menit)', 'late_start_early_stop', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Late Start Early Stop SBL(%)', 'late_start_early_stop_sbl', false, null, 'text', true)}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Late Start Early Stop (Menit)', 'technical_breakdown', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Late Start Early Stop SBL(%)', 'technical_breakdown_sbl', false, null, 'text', true)}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Idle Minor Stoppages (Menit)', 'idle_minor_stoppages', false)}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Idle Minor Stoppages SBL(%)', 'idle_minor_stoppages_sbl', false, null, 'text', true)}
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Reduce Speed (Masih Dalam Pengerjaan)</Typography>
                        {/* <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Speed Oven', 'speed_oven', false)}
                            </Grid>
                        </Grid> */}
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed 1', 'reduce_speed_1', false, 'reduce_speed')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Durasi Speed 1 (Menit)', 'reduce_speed_menit_1', false, 'reduce_speed_menit')}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed 2', 'reduce_speed_2', false, 'reduce_speed')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Durasi Speed 2 (Menit)', 'reduce_speed_menit_2', false, 'reduce_speed_menit')}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed 3', 'reduce_speed_3', false, 'reduce_speed')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Durasi Speed 3 (Menit)', 'reduce_speed_menit_3', false, 'reduce_speed_menit')}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed 4', 'reduce_speed_4', false, 'reduce_speed')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Durasi Speed 4 (Menit)', 'reduce_speed_menit_4', false, 'reduce_speed_menit')}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Reduce Speed 5', 'reduce_speed_5', false, 'reduce_speed')}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Durasi Speed 5 (Menit)', 'reduce_speed_menit_5', false, 'reduce_speed_menit')}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Persentase SBL Reduce(%)', 'reduce_speed_sbl', false)}
                            </Grid>
                        </Grid>
                        {/* 
                        <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                        <Typography variant="h5">Reject Proses SBL</Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} sm={3}>
                                {renderTextField('Speed Oven', 'speed_oven', false)}
                            </Grid>
                        </Grid> */}

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
                            <Typography variant="h5">Downtime</Typography>

                            {timeEntries.map((entry, index) => (
                                <Grid container m={2} spacing={2} direction="row" key={index}>
                                    <Grid item xs={12} sm={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="kategori-label">Kategori</InputLabel>
                                            <Select
                                                labelId="kategori-label"
                                                id="kategori-select"
                                                name="kategori_downtime"
                                                value={entry.kategori_downtime || ''}
                                                label="Kategori Downtime"
                                                onChange={(event) => handleSelectChangeTime(index, 'kategori_downtime', event.target.value)}
                                            >
                                                {KategoriOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Start"
                                            value={entry.time_start}
                                            onChange={(newValue) => handleChangeTime(index, 'time_start', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth required />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Stop"
                                            value={entry.time_stop}
                                            onChange={(newValue) => handleChangeTime(index, 'time_stop', newValue)}
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
                                    {/* Tampilkan Part Mesin hanya ketika kategori adalah Technical Breakdown */}
                                    {entry.showPartMesin && (
                                        <Grid item xs={12} sm={1}>
                                            <TextField
                                                name="part_mesin"
                                                label="Part Mesin"
                                                value={entry.part_mesin}
                                                onChange={(e) => handleChangeTime(index, 'part_mesin', e.target.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                    )}
                                    <Grid item xs={12} sm={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="unit-mesin-label">Unit Mesin</InputLabel>
                                            <Select
                                                labelId="unit-mesin-label"
                                                id="unit-mesin-select"
                                                name="unit_mesin"
                                                value={entry.unit_mesin || ''}
                                                label="Unit Mesin"
                                                onChange={(event) => handleSelectChangeTime(index, 'unit_mesin', event.target.value)}
                                            >
                                                {unitMesinOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>


                                    {entry.showSpeedOptions && (
                                        <>
                                            <Grid item xs={12} sm={2}>
                                                <TextField
                                                    name="speed_oven_plan"
                                                    label="Speed Oven Plan"
                                                    value={entry.speed_oven_plan}
                                                    onChange={(e) => handleChangeTime(index, 'speed_oven_plan', e.target.value)}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <TextField
                                                    name="speed_oven_reduce"
                                                    label="Speed Oven Reduce"
                                                    value={entry.speed_oven_reduce}
                                                    onChange={(e) => handleChangeTime(index, 'speed_oven_reduce', e.target.value)}
                                                    fullWidth
                                                />
                                            </Grid>
                                        </>
                                    )}
                                    <Grid item xs={12} sm={1}>
                                        <TextField
                                            name="total_sbl"
                                            label="Total SBL"
                                            value={entry.total_sbl}
                                            fullWidth
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            name="kendala"
                                            label="Kendala"
                                            value={entry.kendala}
                                            onChange={(e) => handleChangeTime(index, 'kendala', e.target.value)}
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
                                            onChange={(e) => handleChangeTime(index, 'penyebab', e.target.value)}
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
                                            onChange={(e) => handleChangeTime(index, 'perbaikan', e.target.value)}
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
                        <Grid container sx={{ margin: 2 }} spacing={2} direction="row" >
                            <Grid item xs={12} sm={1} >
                                <ButtonSave lhp={formState} downtime={timeEntries} />
                            </Grid>
                        </Grid>

                    </CardContent>
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
    label5: PropTypes.bool
};

export default FormLHP;