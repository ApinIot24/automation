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
        bubuk: '',
        beratKering: '',
        beratBasah: '',
        rmd: '',
        rfeeding: '',
        rsampleqc: '',
        rpackinner: '',
        rpackTable: '',
        rmtotal: '',
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
        roll: '',
        roven: '',
        soven: '',
        mcbks: '',
        ptable: '',
        serbuk: '',
        tampungan: '',
        total: '',
        batch: '',
        brtpack: '',
        wipackinner: '',
        wikulit: '',
        witotal: '',
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
            handleChange('users_input', users); // Simpan users_input ke dalam formState
        }
    }, []);
    // Perhitungan Output
    useEffect(() => {
        const { planning, reguler, hold } = formState;
        if (planning && reguler && hold) {
            const outputCalc = ((parseFloat(reguler) + parseFloat(hold)) / parseFloat(planning)) * 100;
            handleChange('output', outputCalc.toFixed(2));
        } else {
            handleChange('output', '');
        }
    }, [formState.planning, formState.reguler, formState.hold]);

    // Perhitungan Rm Total
    useEffect(() => {
        const { rpackTable, rmd, rsampleqc, rpackinner, rfeeding } = formState;
        const rmtotal = parseFloat(rpackTable || 0) + parseFloat(rmd || 0) + parseFloat(rsampleqc || 0) + parseFloat(rpackinner || 0) + parseFloat(rfeeding || 0);
        handleChange('rmtotal', rmtotal.toFixed(2));
    }, [formState.rpackTable, formState.rmd, formState.rsampleqc, formState.rpackinner, formState.rfeeding]);

    // Perhitungan RM Roll
    useEffect(() => {
        const roll = calculateSum(Object.values(formState.rmall));
        handleChange('roll', roll);
    }, [formState.rmall]);

    // Perhitungan Variance
    useEffect(() => {
        const varianceTotal = calculateSum(Object.values(formState.viall));
        handleChange('variance', varianceTotal);
    }, [formState.viall]);

    // Perhitungan Total Sampah
    useEffect(() => {
        const { mcbks, ptable, serbuk, tampungan } = formState;
        const totalSampah = parseFloat(mcbks || 0) + parseFloat(ptable || 0) + parseFloat(serbuk || 0) + parseFloat(tampungan || 0);
        handleChange('total', totalSampah.toFixed(2));
    }, [formState.mcbks, formState.ptable, formState.serbuk, formState.tampungan]);

    // Perhitungan WIP Total
    useEffect(() => {
        const { wipackinner, wikulit } = formState;
        const wipTotal = parseFloat(wipackinner || 0) + parseFloat(wikulit || 0);
        handleChange('witotal', wipTotal.toFixed(2));
    }, [formState.wipackinner, formState.wikulit]);

    // Perhitungan VI Akhir
    useEffect(() => {
        const { viawal, viambil, vireturn, viinner, viRainner } = formState;
        const viAkhir = parseFloat(viawal || 0) + parseFloat(viambil || 0) - parseFloat(vireturn || 0) - parseFloat(viRainner || 0) - parseFloat(viinner || 0);
        handleChange('viakhir', viAkhir.toFixed(2));
    }, [formState.viawal, formState.viambil, formState.vireturn, formState.viinner, formState.viRainner]);

    // Perhitungan Karton Akhir
    useEffect(() => {
        const { krkawal, krAwal, krpakai, kreturn, kreject } = formState;
        const krAkhir = parseFloat(krkawal || 0) + parseFloat(krAwal || 0) - parseFloat(krpakai || 0) - parseFloat(kreturn || 0) - parseFloat(kreject || 0);
        handleChange('krakhir', krAkhir.toFixed(2));
    }, [formState.krkawal, formState.krAwal, formState.krpakai, formState.kreturn, formState.kreject]);

    // Menangani perubahan bubuk dan otomatis mengisi berat kering dan berat basah
    const beratKeringValues = [656.05, 666.674, 677.848, 689.037, 700.24, 711.457, 722.689];
    const beratBasahValues = [722.155, 732.155, 742.155, 752.155, 762.155, 772.155, 782.155];
    const handleBubukChange = (value) => {
        handleChange('bubuk', value);
        const bubukValue = parseInt(value, 10); // Konversi nilai bubuk ke integer
        const index = bubukValue / 10; // Menghitung indeks

        // Pengecekan indeks yang benar (gunakan &&, bukan ||)
        if (index >= 0 && index < beratKeringValues.length) {
            handleChange('beratKering', beratKeringValues[index].toFixed(2)); // Set berat kering
            handleChange('beratBasah', beratBasahValues[index].toFixed(2));   // Set berat basah
        } else {
            handleChange('beratKering', ''); // Kosongkan jika tidak valid
            handleChange('beratBasah', '');
        }
    };



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

                // Cek apakah time_stop lebih kecil dari time_start (melewati tengah malam)
                if (stop.isBefore(start)) {
                    // Tambahkan 24 jam ke time_stop untuk perhitungan durasi yang benar
                    duration = stop.add(1, 'day').diff(start, 'minute');
                } else {
                    duration = stop.diff(start, 'minute');
                }

                updatedEntries[index].total_dt = duration + ' minutes';
            } else {
                updatedEntries[index].total_dt = '';
            }
        }

        setTimeEntries(updatedEntries);
    };


    const renderTextField = (label, name, isDisabled = false) => (
        <TextField
            label={label}
            value={formState[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            fullWidth
            disabled={isDisabled}
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

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Typography variant="h5">Primary</Typography>
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

                        <Divider sx={{ mb: 2, mt: 2 }} />
                        <Typography variant="h5">Data Reject RM / Mesin (Kg)</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R-Pack Table (RM)', 'rpackTable')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('RMD', 'rmd')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R Sample Qc', 'rsampleqc')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R Pack Inner', 'rpackinner')}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                {renderTextField('R Feeding', 'rfeeding')}
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
                        <Typography variant="h5">Total RM Roll</Typography>
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
                        <Typography variant="h5">Total dan Berat Pack</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>{renderTextField('Berat/Pack', 'brtpack')}</Grid>
                            <Grid item xs={12} sm={6}>{renderTextField('Batch Cetak', 'batch')}</Grid>
                        </Grid>

                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography variant="h5">Batch dan WIP</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Pack Inner', 'wipackinner')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit', 'wikulit')}</Grid>
                            <Grid item xs={12} sm={4}>{renderTextField('WIP Total', 'witotal', true)}</Grid>
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
                                <Grid container spacing={2} sx={{ mt: 2 }} key={index}>
                                    <Grid item xs={12} sm={2}>
                                        <TimePicker
                                            label="Time Start"
                                            value={entry.time_start}
                                            onChange={(newValue) => handleTimeChange(index, 'time_start', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <TimePicker
                                            label="Time Stop"
                                            value={entry.time_stop}
                                            onChange={(newValue) => handleTimeChange(index, 'time_stop', newValue)}
                                            renderInput={(params) => <TextField {...params} fullWidth />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <TextField
                                            label="Total DT"
                                            value={entry.total_dt}
                                            fullWidth
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Kendala"
                                            value={entry.kendala}
                                            onChange={(e) => handleTimeChange(index, 'kendala', e.target.value)}
                                            fullWidth
                                            multiline
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => removeTimeEntry(index)}
                                            disabled={timeEntries.length === 1}
                                        >
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
