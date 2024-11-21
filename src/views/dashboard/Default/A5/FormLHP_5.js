import React, { useState, useEffect } from 'react';
import {
    Grid, Divider, Select, MenuItem, InputLabel, FormControl,
    TextField, Typography, CardContent, Button
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import ButtonSave from 'ui-component/ButtonSaveL5';
import dayjs from 'dayjs';

const FormLHP = ({ isLoading }) => {
    const [formState, setFormState] = useState({
        realdatetime: dayjs(new Date()),
        grup: 'l5',
        shift: '',
        sku: '',
        planning: '',
        reguler: '',
        hold: '',
        output: '',
        output_kg: '',
        bubuk: '',
        beratKering: '',
        beratBasah: '',
        rmd: '',
        rfeeding: '',
        sampahpacking: '',
        rpackinner: '',
        rpackTable: '',
        rmall: {
            rmE1: '',
            rmE2: '',
            rmE3: '',
            rmE4: '',
            rmE5: '',
            rmE6: '',
            rmE7: '',
            rmE8: '',
            rmE9: '',
            rmE10: '',
            rmE11: '',
            rmE12: '',
        },
        rejectpacking: '',
        rejectstacking: '',
        rejectcoolingconveyor: '',
        rmtotal: '',
        roll: '',
        roven: '',
        soven: '',
        mcbks: '',
        ptable: '',
        serbuk: '',
        tampungan: '',
        total: '',
        batch_tuang: '',
        batch_cetak: '',
        batch_buat: '',
        brtpcs: '',
        brtpack: '',
        weight_bsc_pcs: '',
        weight_bsc_pack: '',
        adonan_gagal_kg: '',
        adonan_gagal_kulit: '',
        wip_adonan_awal: '',
        wip_adonan_akhir: '',
        wip_adonan_selisih: '',
        wip_adonan_kulit: '',
        wipkulitawal: '',
        wipkulitakhir: '',
        wipselisih: '',
        wipkulit: '',
        viall: {
            viE1: '',
            viE2: '',
            viE3: '',
            viE4: '',
            viE5: '',
            viE6: '',
            viE7: '',
            viE8: '',
            viE9: '',
            viE10: '',
            viE11: '',
            viE12: '',
        },
        variance: '',
        variance_batch: '',
        variance_fg: '',
        viawal: '',
        viambil: '',
        vireturn: '',
        viinner: '',
        viRainner: '',
        viakhir: '',
        krkawal: '',
        krAwal: '',
        krpakai: '',
        kreturn: '',
        kreject: '',
        krakhir: '',
        users_input: '',
    });

    const [timeEntries, setTimeEntries] = useState([{ time_start: null, time_stop: null, total_dt: '', kendala: '' }]);
    const [rawData, setRawData] = useState(''); // For pasting raw data

    const handleChange = (name, value) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
    };



    const handleArrayChange = (key, value) => {
        setFormState((prev) => ({
            ...prev,
            rmall: {
                ...prev.rmall,
                [key]: value,
            },
        }));
    };

    const handleVarianceChange = (key, value) => {
        setFormState((prev) => ({
            ...prev,
            viall: {
                ...prev.viall,
                [key]: value,
            },
        }));
    };

    const calculateSum = (values) => values.reduce((acc, val) => acc + parseFloat(val || 0), 0).toFixed(2);

    useEffect(() => {
        const users = localStorage.getItem('username');
        if (users) {
            handleChange('users_input', users); // Save users_input in formState
        }
    }, []);

    const parseData = () => {
        const lines = rawData.split(/\r?\n/);
        const getValue = (label) => {
            const line = lines.find(l => l.includes(label));
            if (line) {
                const parts = line.split(':');
                return parts.length > 1 ? parts[1].trim().split(' ')[0] : ''; // Safely split
            }
            return '';
        };
        // Parse RM values (rmall)
        const rmall = {};
        for (let i = 1; i <= 12; i++) {
            const label = `E${i}`;  // Format for rmall is E1, E2, ..., E12
            rmall[`rm${i}`] = getValue(label);
        }

        // Parse VI values (viall)
        const viall = {};
        for (let i = 1; i <= 12; i++) {
            const label = `E${i}`;  // Format for viall is VI E1, VI E2, ..., VI E12
            viall[`vi${i}`] = getValue(label);
        }

        const shiftValue = getValue('SHIFT');
        let formattedShift = '';
        if (shiftValue === '1') {
            formattedShift = 'Shift 1';
        } else if (shiftValue === '2') {
            formattedShift = 'Shift 2';
        } else if (shiftValue === '3') {
            formattedShift = 'Shift 3';
        }

        setFormState({
            ...formState,
            shift: formattedShift,
            reguler: getValue('Release'),
            hold: getValue('Hold'),
            output: getValue('T. Output'),
            rmd: getValue('R.MD'),
            sampahpacking: getValue('R. Sampel QC'),
            rpackinner: getValue('R.pack inner'),
            rpackTable: getValue('R.pack table'),
            rejectpacking: getValue('TOTAL'),
            mcbks: getValue('Mc.bks'),
            ptable: getValue('P. Table'),
            serbuk: getValue('serbuk'),
            tampungan: getValue('Penampungan'),
            total: getValue('Total'),
            brtpack: getValue('Brt/Pack'),
            wipackinner: getValue('Pack Inner'),
            wikulit: getValue('Box Kulit'),
            wipkulit: getValue('Total WIP'),
            rmall: rmall,  // Set parsed RM values
            viall: viall   // Set parsed VI values
        });
    };
    // Output calculation
    useEffect(() => {
        const { planning, reguler, hold } = formState;
        if (planning && reguler && hold) {
            const outputCalc = ((parseFloat(reguler) + parseFloat(hold)) / parseFloat(planning)) * 100;
            const outputkg1 = (parseFloat(hold)) + (parseFloat(reguler));
            handleChange('output', outputCalc.toFixed(2));
            const outputKg = (outputkg1 * 8.4).toFixed(2);  // Mengalikan dengan 8.4 untuk mendapatkan output dalam kg
            handleChange('output_kg', outputKg);
        } else {
            handleChange('output', '');
            handleChange('output_kg');
        }
    }, [formState.planning, formState.reguler, formState.hold]);

    // RM Total Calculation
    useEffect(() => {
        const { rpackTable, rmd, sampahpacking, rpackinner, rfeeding, output_kg } = formState;
        // Jika tidak ada nilai, hentikan eksekusi
        if (!rpackTable && !rmd && !sampahpacking && !rpackinner && !rfeeding) { return; }
        const rmtotal = parseFloat(rpackTable || 0) + parseFloat(rmd || 0) + parseFloat(sampahpacking || 0) + parseFloat(rpackinner || 0) + parseFloat(rfeeding || 0);
        const rejectpacking = ((parseFloat(rmtotal || 0) * 100) / 100) / parseFloat(output_kg || 0);
        handleChange('rmtotal', rmtotal.toFixed(2));
        handleChange('rejectpacking', rejectpacking.toFixed(2));
    }, [formState.rpackTable, formState.rmd, formState.sampahpacking, formState.rpackinner, formState.rfeeding]);

    // RM Roll Calculation
    useEffect(() => {
        if (!formState.rmall) return;

        const roll = calculateSum(Object.values(formState.rmall));
        handleChange('roll', roll);
    }, [formState.rmall]);

    // Variance Calculation
    useEffect(() => {
        if (!formState.viall) return;

        const varianceTotal = calculateSum(Object.values(formState.viall));
        handleChange('variance', varianceTotal);
    }, [formState.viall]);

    // Waste Total Calculation
    useEffect(() => {
        const { mcbks, ptable, serbuk, tampungan } = formState;

        // Jika tidak ada nilai, hentikan eksekusi
        if (!mcbks && !ptable && !serbuk && !tampungan) {
            return;
        }

        const totalSampah = parseFloat(mcbks || 0) + parseFloat(ptable || 0) + parseFloat(serbuk || 0) + parseFloat(tampungan || 0);
        handleChange('total', totalSampah.toFixed(2));
    }, [formState.mcbks, formState.ptable, formState.serbuk, formState.tampungan]);

    // WIP Total Calculation
    useEffect(() => {
        const { wipkulitawal, wipkulitakhir, batch_buat, beratKering } = formState;
        // Jika tidak ada nilai, hentikan eksekusi
        if (!wipkulitawal && !wipkulitakhir) {
            return;
        }
        const wipSelisih = parseFloat(wipkulitakhir || 0) - parseFloat(wipkulitawal || 0);
        const wipKulit = (parseFloat(batch_buat || 0) * parseFloat(beratKering || 0)) / wipSelisih;
        handleChange('wipselisih', wipSelisih.toFixed(2));
        handleChange('wipkulit', wipKulit.toFixed(2));
    }, [formState.wipkulitawal, formState.wipkulitakhir]);

    // VI Akhir Calculation
    useEffect(() => {
        const { viawal, viambil, vireturn, viinner, viRainner } = formState;

        // Jika tidak ada nilai, hentikan eksekusi
        if (!viawal && !viambil && !vireturn && !viinner && !viRainner) {
            return;
        }

        const viAkhir = parseFloat(viawal || 0) + parseFloat(viambil || 0) - parseFloat(vireturn || 0) - parseFloat(viRainner || 0) - parseFloat(viinner || 0);
        handleChange('viakhir', viAkhir.toFixed(2));
    }, [formState.viawal, formState.viambil, formState.vireturn, formState.viinner, formState.viRainner]);

    // Karton Akhir Calculation
    useEffect(() => {
        const { krkawal, krAwal, krpakai, kreturn, kreject } = formState;

        // Jika tidak ada nilai, hentikan eksekusi
        if (!krkawal && !krAwal && !krpakai && !kreturn && !kreject) {
            return;
        }

        const krAkhir = parseFloat(krkawal || 0) + parseFloat(krAwal || 0) - parseFloat(krpakai || 0) - parseFloat(kreturn || 0) - parseFloat(kreject || 0);
        handleChange('krakhir', krAkhir.toFixed(2));
    }, [formState.krkawal, formState.krAwal, formState.krpakai, formState.kreturn, formState.kreject]);

    // WIP Adonan Selisih dan Kulit Calculation
    useEffect(() => {
        const { wip_adonan_awal, wip_adonan_akhir, beratBasah, beratKering, batch_buat } = formState;

        // Jika tidak ada nilai, hentikan eksekusi
        if (!wip_adonan_awal && !wip_adonan_akhir && !beratBasah) {
            return;
        }
        const awal = parseFloat(wip_adonan_awal) || 0;
        const akhir = parseFloat(wip_adonan_akhir) || 0;
        const beratBasahVal = parseFloat(beratBasah) || 0;
        const beratKeringVal = parseFloat(beratKering) || 0;
        const batchBuatVal = parseFloat(batch_buat) || 0;
        const selisih = (akhir - awal).toFixed(2);
        const kulit = beratBasahVal !== 0 ? ((selisih * (beratBasahVal / beratBasahVal)) / batchBuatVal * beratKeringVal).toFixed(2) : '0.00';
        setFormState((prev) => ({
            ...prev,
            wip_adonan_selisih: selisih,
            wip_adonan_kulit: kulit,
        }));
    }, [formState.wip_adonan_awal, formState.wip_adonan_akhir, formState.beratBasah]);

    // Adonan Gagal Kulit Calculation
    useEffect(() => {
        const { adonan_gagal_kg, beratBasah, beratKering } = formState;

        // Jika tidak ada nilai, hentikan eksekusi
        if (!adonan_gagal_kg && !beratBasah && !beratKering) {
            return;
        }

        const adonanGagalKg = parseFloat(adonan_gagal_kg) || 0;
        const beratBasahVal = parseFloat(beratBasah) || 0;
        const beratKeringVal = parseFloat(beratKering) || 0;

        if (beratKeringVal !== 0) {
            const adonanGagalKulit = ((adonanGagalKg * beratBasahVal) / beratKeringVal).toFixed(2);
            setFormState((prev) => ({
                ...prev,
                adonan_gagal_kulit: adonanGagalKulit,
            }));
        } else {
            setFormState((prev) => ({
                ...prev,
                adonan_gagal_kulit: '0.00',
            }));
        }
    }, [formState.adonan_gagal_kg, formState.beratBasah, formState.beratKering]);

    useEffect(() => {
        const { batch_buat, adonan_gagal_kg, wip_adonan_selisih, beratBasah } = formState;
        // Jika nilai-nilai yang diperlukan tidak tersedia, hentikan eksekusi
        if (!batch_buat || !beratBasah) {
            return;
        }
        // Konversi nilai menjadi angka
        const batchBuat = parseFloat(batch_buat);
        const adonanGagalKg = parseFloat(adonan_gagal_kg) || 0;
        const wipAdonanSelisih = parseFloat(wip_adonan_selisih) || 0;
        const beratBasahVal = parseFloat(beratBasah);
        // Pastikan beratBasahVal tidak nol untuk menghindari pembagian oleh nol
        if (beratBasahVal === 0) {
            return;
        }
        // Hitung Batch Tuang berdasarkan rumus: Batch Buat - (Adonan Gagal Kg / Berat Basah)
        const batchTuang = (batchBuat - (adonanGagalKg / beratBasahVal)).toFixed(2);
        // Hitung Batch Cetak berdasarkan rumus: Batch Buat - (WIP Adonan Selisih / Berat Basah)
        const batchCetak = (batchBuat - (wipAdonanSelisih / beratBasahVal)).toFixed(2);
        // Update state dengan nilai hasil perhitungan
        setFormState((prev) => ({
            ...prev,
            batch_tuang: batchTuang,
            batch_cetak: batchCetak,
        }));
    }, [formState.batch_buat, formState.adonan_gagal_kg, formState.wip_adonan_selisih, formState.beratBasah, formState.beratKering]);

    // brtpcs dan brtpack
    useEffect(() => {
        const { brtpcs, brtpack } = formState;
        if (!brtpack & !brtpcs) {
            return;
        }
        const brtpcsVal = parseFloat(brtpcs) || 0;
        const brtpackVal = parseFloat(brtpack) || 0;
        if (brtpcsVal !== 0) {
            const brtpcs1 = (((brtpcsVal - 5.75) / 5.75) * 100).toFixed(2);
            setFormState((prev) => ({
                ...prev,
                weight_bsc_pcs: brtpcs1,
            }));
        } else {
            setFormState((prev) => ({
                ...prev,
                weight_bsc_pcs: '0.00',
            }));
        }

        if (brtpackVal !== 0) {
            const brtpack1 = (((brtpackVal - 300) / 300) * 100).toFixed(2);
            setFormState((prev) => ({
                ...prev,
                weight_bsc_pack: brtpack1,
            }));
        } else {
            setFormState((prev) => ({
                ...prev,
                weight_bsc_pack: '0.00',
            }));
        }
    }, [formState.brtpcs, formState.brtpack]);


    // const handleKeyDown = (e, name) => {
    //     if (e.key === 'Enter') {
    //         const { beratBasah, wip_adonan_awal, wip_adonan_akhir } = formState;
    //         const awal = parseFloat(wip_adonan_awal) || 0;
    //         const akhir = parseFloat(wip_adonan_akhir) || 0;
    //         const beratBasahVal = parseFloat(beratBasah) || 0;

    //         if (name === 'wip_adonan_awal' && beratBasahVal) {
    //             const hasilAwal = (awal * beratBasahVal).toFixed(2);
    //             setFormState((prev) => ({
    //                 ...prev,
    //                 wip_adonan_awal: hasilAwal,
    //             }));
    //         }

    //         if (name === 'wip_adonan_akhir' && beratBasahVal) {
    //             const hasilAkhir = (akhir * beratBasahVal).toFixed(2);
    //             setFormState((prev) => ({
    //                 ...prev,
    //                 wip_adonan_akhir: hasilAkhir,
    //             }));
    //         }
    //     }
    // };

    // Handle Bubuk Change
    const beratKeringValues = [656.05, 666.674, 677.848, 689.037, 700.24, 711.457, 722.689];
    const beratBasahValues = [722.155, 732.155, 742.155, 752.155, 762.155, 772.155, 782.155];
    const handleBubukChange = (value) => {
        handleChange('bubuk', value);
        const bubukValue = parseInt(value, 10);
        const index = bubukValue / 10;
        if (index >= 0 && index < beratKeringValues.length) {
            const beratKeringVal = beratKeringValues[index].toFixed(2);
            const beratBasahVal = beratBasahValues[index].toFixed(2);
            handleChange('beratKering', beratKeringVal);
            handleChange('beratBasah', beratBasahVal);
            // Hitung ulang variance batch dan variance FG setelah berat kering diperbarui
            const { batch_buat, output_kg } = formState;

            if (batch_buat && output_kg) {
                const batchBuat = parseFloat(batch_buat);
                const outputKgVal = parseFloat(output_kg);

                // Variance batch
                const varianceBatch = ((batchBuat * beratKeringVal - outputKgVal) / (batchBuat * beratKeringVal) * 100).toFixed(4);
                handleChange('variance_batch', varianceBatch);

                // Variance FG
                const varianceFg = ((batchBuat * beratKeringVal - outputKgVal) / (batchBuat) * 100).toFixed(4);
                handleChange('variance_fg', varianceFg);
            } else {
                handleChange('variance_batch', '');
                handleChange('variance_fg', '');
            }
        } else {
            handleChange('beratKering', '');
            handleChange('beratBasah', '');
            handleChange('variance_batch', '');
            handleChange('variance_fg', '');
        }
    };


    // Handle Time Changes and Downtime
    const addTimeEntry = () => {
        setTimeEntries([...timeEntries, { time_start: null, time_stop: null, total_dt: '', kendala: '' }]);
    };

    const removeTimeEntry = (index) => {
        if (timeEntries.length > 1) {
            setTimeEntries(timeEntries.filter((_, i) => i !== index));
        }
    };

    const handleTimeChange = (index, field, value) => {
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
    const renderTextField = (label, name, isDisabled = false, onKeyDown) => (
        <TextField
            label={label}
            value={formState[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            fullWidth
            disabled={isDisabled}
            onKeyDown={onKeyDown}
        />
    );


    const renderSelectField = (label, name, options) => (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label} value={formState[name]}
                onChange={(e) => handleChange(name, e.target.value)}
            >
                {options.map((option, idx) => (
                    <MenuItem key={idx} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
    const renderArrayTextField = (label, key) => (
        <TextField
            label={label}
            value={formState.rmall[key]}
            onChange={(e) => handleArrayChange(key, e.target.value)}
            fullWidth
        />
    );
    const renderVarianceTextField = (label, key) => (
        <TextField
            label={label}
            value={formState.viall[key]}
            onChange={(e) => handleVarianceChange(key, e.target.value)}
            fullWidth
        />
    );

    const handleSelectChange = (index, event) => {
        const updatedEntries = [...timeEntries];
        updatedEntries[index]['unit_mesin'] = event.target.value;
        setTimeEntries(updatedEntries);
    };
    const unitMesinOptions = [
        { value: 'None', label: 'None' },
        { value: 'Vibro', label: 'Vibro' },
        { value: 'Storage Tank sugar cooking', label: 'Storage Tank sugar cooking' },
        { value: 'Tilting', label: 'Tilting' },
        { value: 'Mixer', label: 'Mixer' },
        { value: 'Rotary moulder/cetakan', label: 'Rotary moulder/cetakan' },
        { value: 'Hoper', label: 'Hoper' },
        { value: 'Conveyor / conveyor transfer', label: 'Conveyor / conveyor transfer' },
        { value: 'Conveyor swivel panner', label: 'Conveyor swivel panner' },
        { value: 'Wiremesh roll transfer', label: 'Wiremesh roll transfer' },
        { value: 'Loyang / scrapper/take Off', label: 'Loyang / scrapper/take Off' },
        { value: 'Oven/ burner', label: 'Oven/ burner' },
        { value: 'Spray Oil', label: 'Spray Oil' },
        { value: 'Metall detector CCP', label: 'Metall detector CCP' },
        { value: 'Cooling conveyor', label: 'Cooling conveyor' },
        { value: 'Metal detector OPRP', label: 'Metal detector OPRP' },
        { value: 'Stacking', label: 'Stacking' },
        { value: 'Packing table', label: 'Packing table' },
        { value: 'Bestpack', label: 'Bestpack' },
        { value: 'MC E1', label: 'MC E1' },
        { value: 'MC E2', label: 'MC E2' },
        { value: 'MC E3', label: 'MC E3' },
        { value: 'MC E4', label: 'MC E4' },
        { value: 'MC E5', label: 'MC E5' },
        { value: 'MC E6', label: 'MC E6' },
        { value: 'MC E7', label: 'MC E7' },
        { value: 'MC E8', label: 'MC E8' },
        { value: 'MC E9', label: 'MC E9' },
        { value: 'MC E10', label: 'MC E10' },
        { value: 'MC E11', label: 'MC E11' },
        { value: 'MC E12', label: 'MC E12' },
    ];
    

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Typography variant="h5">Primary</Typography>
                        <Grid container spacing={2} sx={{ mt: 3, mb: 2 }}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Paste Laporan"
                                    fullWidth
                                    multiline
                                    rows={10} // Atur berapa banyak baris yang diinginkan
                                    variant="outlined"
                                    value={rawData}
                                    onChange={(e) => setRawData(e.target.value)}
                                    // Tambahkan style jika perlu
                                    sx={{ mb: 2 }} // Margin bawah untuk memberi ruang pada button
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" fullWidth onClick={parseData}>
                                    Isi Form
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date"
                                        value={formState.realdatetime}
                                        onChange={(newValue) => handleChange('realdatetime', newValue)}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                {renderSelectField('Shift', 'shift', [
                                    { value: '', label: 'None' },
                                    { value: 'Shift 1', label: 'Shift 1' },
                                    { value: 'Shift 2', label: 'Shift 2' },
                                    { value: 'Shift 3', label: 'Shift 3' },
                                ])}
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                {renderSelectField('SKU', 'sku', [
                                    { value: '', label: 'None' },
                                    { value: 'ROMA KELAPA (410279)', label: 'ROMA KELAPA (410279)' },
                                    { value: 'ROMA KELAPA (310837)', label: 'ROMA KELAPA (310837)' },
                                ])}
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Planning and Output</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>{renderTextField('Planning', 'planning')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Release', 'reguler')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Hold', 'hold')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Output (%)', 'output', true)}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Output (KG)', 'output_kg', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Total dan Berat Pack</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>{renderTextField('Berat/Pack', 'brtpack')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Berat/pcs ', 'brtpcs')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Weight BSC PCS', 'weight_bsc_pcs')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Weight BSC PACK', 'weight_bsc_pack')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Batch Buat', 'batch_buat')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Batch Tuang', 'batch_tuang', true)}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Batch Cetak', 'batch_cetak', true)}</Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 3, mb: 2 }}>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Bubuk</InputLabel>
                                    <Select
                                        label="Bubuk"
                                        value={formState.bubuk}
                                        onChange={(e) => handleBubukChange(e.target.value)}
                                    >
                                        {[...Array(7)].map((_, idx) => {
                                            const value = idx * 10;
                                            return (
                                                <MenuItem key={value} value={value}>
                                                    {value}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Variance / Batch', 'variance_batch', true)}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Variance FG', 'variance_fg', true)}</Grid>
                        </Grid>

                        {/* Menampilkan Berat Kering dan Berat Basah jika bubuk dipilih */}
                        {/* Cek nilai bubuk dengan pengecekan eksplisit */}
                        {formState.bubuk !== '' && (
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Berat Kering"
                                        value={formState.beratKering}
                                        onChange={(e) => handleChange('beratKering', e.target.value)}
                                        fullWidth
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Berat Basah"
                                        value={formState.beratBasah}
                                        onChange={(e) => handleChange('beratBasah', e.target.value)}
                                        fullWidth
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        )}


                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Wip Adonan</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('Adonan Gagal Kg', 'adonan_gagal_kg')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Adonan Gagal Kulit ', 'adonan_gagal_kulit', true)}</Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('WIP Adonan Awal', 'wip_adonan_awal')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('WIP Adonan Akhir', 'wip_adonan_akhir')}
                            </Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Adonan Selisih ', 'wip_adonan_selisih', true)}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Adonan Kulit', 'wip_adonan_kulit', true)}</Grid>
                        </Grid>
                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Data Reject RM / Mesin (Kg)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('Reject Stacking', 'rejectstacking')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('Reject Cooling Conveyor', 'rejectcoolingconveyor')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R-Pack Table (RM)', 'rpackTable')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('RMD', 'rmd')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('Sampah Packing', 'sampahpacking')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R Pack Inner', 'rpackinner')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R Feeding', 'rfeeding')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('Reject Packing', 'rejectpacking', true)}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('RM Total', 'rmtotal', true)}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {Object.keys(formState.rmall).map((key, index) => (
                                <Grid item xs={12} sm={4} key={key}>
                                    {renderArrayTextField(`RM E ${index + 1}`, key)}
                                </Grid>
                            ))}
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Total RM Roll KG</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={12}>
                                {renderTextField('Total RM', 'roll', true)} {/* Menampilkan RM Total */}
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Sampah Oven</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>{renderTextField('Reject Oven', 'roven')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Sampah Oven', 'soven')}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Sampah (KG)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>{renderTextField('Mesin Bungkus', 'mcbks')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Packing Table', 'ptable')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Serbuk', 'serbuk')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Tampungan', 'tampungan')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Total', 'total', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Batch dan WIP</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit Awal', 'wipkulitawal')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit Akhir', 'wipkulitakhir')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Selisih', 'wipselisih', true)}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Total', 'wipkulit', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Variance Inner (VI)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('S Awal', 'viawal')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Ambil', 'viambil')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('R Inner', 'viRainner')}</Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('Return', 'vireturn')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Pakai', 'viinner')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('S Akhir', 'viakhir', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Data Variance Inner (VI)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {Object.keys(formState.viall).map((key, index) => (
                                <Grid item xs={12} sm={4} key={key}>
                                    {renderVarianceTextField(`VI E ${index + 1}`, key)}
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={12}>{renderTextField('Total Reject Inner Mesin Bungkus Roll', 'variance', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Karton Reguler</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('S Awal', 'krkawal')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Ambil', 'krAwal')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Pakai', 'krpakai')}</Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('Return', 'kreturn')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('Reject', 'kreject')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('S Akhir', 'krakhir', true)}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Downtime</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {timeEntries.map((entry, index) => (
                                <Grid container m={2} spacing={2} direction="row" key={index}>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Start"
                                            value={entry.time_start}
                                            onChange={(newValue) => handleTimeChange(index, 'time_start', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth required />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <TimePicker
                                            label="Time Stop"
                                            value={entry.time_stop}
                                            onChange={(newValue) => handleTimeChange(index, 'time_stop', newValue)}
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
                                            onChange={(e) => handleTimeChange(index, 'part_mesin', e.target.value)}
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
                                            onChange={(e) => handleTimeChange(index, 'kendala', e.target.value)}
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
                                            onChange={(e) => handleTimeChange(index, 'penyebab', e.target.value)}
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
                                            onChange={(e) => handleTimeChange(index, 'perbaikan', e.target.value)}
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

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <ButtonSave lhp={formState} downtime={timeEntries} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

export default FormLHP;
