import { Doughnut } from 'react-chartjs-2';
import { Box, TextField, Button, Card, CardContent, CardHeader, Paper, useTheme, Container, Stack, Grid } from '@mui/material'; import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import Title from './title';
import { useSearchParams } from 'react-router-dom';

const states1 = [
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' }
];
const states2 = [
    { value: '초', label: '초등학생' },
    { value: '중', label: '중학생' },
    { value: '고', label: '고등학생' }
];



export const Attacker = (props) => {

    const theme = useTheme();
    const [values, setValues] = useState({ type: "초", year: 2021 });
    const [datadata, setDatadata] = useState({ datasets: [{ data: [] }] });

    const chartSetting = () => {

        const params = {
            chart: 2,
            type: values["type"],
            year: values["year"]
        }
        console.debug("되고있냐고", params)
        axios.post("/chart/chart2", params)
            .then(res => res)
            .then(res => {
                const result = res.data;
                const chartData = [result.same_school_same_class
                    , result.same_school_same_grade
                    , result.same_school_other_grade
                    , result.other_school
                    , result.unknown
                    , result.other]

                setDatadata({
                    labels: ['같은 학교 같은 반', '같은 학교 같은 학년', '같은 학교 다른 학년', '다른 학교 학생', '잘 모르는 사람', '기타'],
                    datasets: [
                        {
                            data: chartData,
                            backgroundColor: ['#FFC288', '#F4E06D', '#B1BCE6', '#B7E5DD', '#FFFFDE', '#FF7396'],
                            borderWidth: 8,
                            borderColor: '#FFFFFF',
                            hoverBorderColor: '#FFFFFF'
                        }
                    ],
                })
                console.debug("되고있는거냐고")
            })
    }
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        chartSetting()
    }, [values])
    useEffect(() => {
        chartSetting()
    }, [])
    const options = {
        pieSliceText: 'label',
        pieHole: 0.41,
        animation: true,
        cutoutPercentage: 140,
        maintainAspectRatio: false,
        maintainAspectRatio: false,
        responsive: true,
        grid: {
            display: true,
            drawBorder: false
        },
        gridLines: {
            display: false,
            drawBorder: false
        },
        ticks: {
            display: false,
            stepSize: 1,
            fontColor: theme.palette.text.secondary
        },
    };
    return (
        <Container {...props}>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <Title>가해자 유형</Title>
                <Grid item >
                    <TextField
                        name="year"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                    >
                        {states1.map((option) => (
                            <option
                                key={option.value}
                                data={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}

                    </TextField>
                    <TextField
                        name="type"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                    >
                        {states2.map((option) => (
                            <option
                                key={option.value}
                                data={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}

                    </TextField>
                </Grid>
            </Stack>

            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: 'relative'
                    }}
                >
                    <Doughnut
                        data={datadata}
                        options={options}
                    />
                </Box>
            </CardContent>
        </Container >
    )
};

