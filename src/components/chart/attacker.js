import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box, TextField, Button, Card, CardContent, CardHeader, Paper, useTheme, Container, Stack, Grid } from '@mui/material'; import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import Title from './title';

const states1 = [
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' }
];
const states2 = [
    { value: '초등학생', label: '초등학생' },
    { value: '중학생', label: '중학생' },
    { value: '고등학생', label: '고등학생' }
];


export const Attacker = (props) => {
    const theme = useTheme();
    const [datadata, setDatadata] = useState({
        labels: ['같은 학교 같은 반', '같은 학교 같은 학년', '같은 학교 다른 학년', '다른 학교 학생', '잘 모르는 사람', '기타'],
        datasets: [
            {
                data: [63, 15, 22, 11, 33, 44],
                backgroundColor: ['#FFC288', '#F4E06D', '#B1BCE6', '#B7E5DD', '#FFFFDE', '#FF7396'],
                borderWidth: 2,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF'
            }
        ]
    });

    const [values, setValues] = useState({ student: "초등학생" });
    const handleChange = (event) => {
        let tempData = [1, 2, 10]
        if (event.target.value == '초등학생') {
            tempData = [11, 12, 110]
        } else if (event.target.value == '중학생') {
            tempData = [111, 122, 10]
        }
        console.debug(event.target.value, "ㅋㅋㅋ")
        console.debug(event.target.name, " dmd")
        setValues({
            ...values,
            [event.target.name]: event.target.value

        });
    };

    useEffect(() => {
        const params = {
            type: "1",
            student: values["student"]
        }
        axios.post("/chart/chart1", params)
            .then(res => res)
            .then(res => {
                console.debug(res, " ㅂㅏㄷㅇㅡㄴㄱㅏㅂㅅ")
                console.debug(res.data.result1)
                console.debug(res.data.result2)
                setDatadata({
                    labels: ['같은 학교 같은 반', '같은 학교 같은 학년', '같은 학교 다른 학년', '다른 학교 학생', '잘 모르는 사람', '기타'],
                    datasets: [
                        {
                            data: [63, 15, 22, 11, 33, 44],
                            backgroundColor: ['#FFC288', '#F4E06D', '#B1BCE6', '#B7E5DD', '#FFFFDE', '#FF7396'],
                            borderWidth: 8,
                            borderColor: '#FFFFFF',
                            hoverBorderColor: '#FFFFFF'
                        }
                    ],

                })
            })
        console.debug(values)
    }, [values])


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
                        name="student"
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
                        name="student"
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

