
import { Bar, Line } from 'react-chartjs-2';
import { Box, TextField, Button, Card, CardContent, CardHeader, Paper, useTheme, Container, Stack } from '@mui/material';
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import Title from './title';

const states = [
    {
        value: 'elementary',
        label: '초등학생'
    },
    {
        value: 'middle',
        label: '중학생'
    },
    {
        value: 'high',
        label: '고등학생'
    }
];

export const DamageRate = (props) => {
    const theme = useTheme();
    const [values, setValues] = useState({ colName: 'high', states: 'high' });
    const [datadata, setDatadata] = useState({ datasets: [] });
    const chartSetting = () => {

        const params = {
            chart: 1,
            colName: values["colName"]
        }
        console.debug("되고있냐고1111", params)
        axios.post("/chart/chart1", params)
            .then(res => res)
            .then(res => {
                console.debug(res.data, "어떻게되냐dd????")
                const result = res.data;
                let barArray = [];
                let lineArray = [];

                result.map((el) => {
                    if (el["type"] == "비율") {
                        barArray.push(el[params.colName]);
                    } else {
                        lineArray.push(el[params.colName]);
                    }
                })
                setDatadata({
                    labels: ['2019', '2020', '2021'],
                    datasets: [
                        {
                            type: 'bar',
                            backgroundColor: '#fca4cc',
                            color: theme.palette.text.secondary,
                            barPercentage: 0.5,
                            barThickness: 30,
                            borderRadius: 10,
                            categoryPercentage: 0.5,
                            // maxBarThickness: 10,
                            data: lineArray

                        },
                        {
                            type: 'line',
                            color: theme.palette.text.inherit,
                            backgroundColor: '#b0a3e0',
                            borderColor: '#b0a3e0',
                            // barPercentage: 0.5,
                            barThickness: 12,
                            // borderRadius: 4,
                            // categoryPercentage: 0.5,
                            maxBarThickness: 10,
                            data: barArray,
                            yAxisID: 'y_sub'
                        }
                    ]


                })
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
        responsive: true,
        elements: {
            line: {
                fill: false
            },
            point: {
                hoverRadius: 7,
                radius: 5
            }
        },

        plugins: {
            legend: {
                display: false,
            },

        },
        animation: true,
        cornerRadius: 10,
        maintainAspectRatio: false,
        responsive: true,
        spanGaps: false,
        maxBarThickness: 40,
        scales: {
            xAxes: {
                stacked: true,
                ticks: {
                    autoSkip: false,
                    fontColor: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                grid: {
                    display: false,
                }
            },
            y: {
                stacked: false,
                suggestedMax: 70,
                ticks: {
                    stepSize: 20
                },
                display: false,
                position: 'left',
                title: {
                    display: false,
                    align: 'end',
                    color: '#808080',
                    text: '단위: 명(만명)',

                }
            },
            y_sub: {
                display: false,
                suggestedMax: 5,
                position: 'right',
                ticks: {
                    stepSize: 1
                },
                title: {
                    display: false,
                    align: 'end',
                    color: '#808080',
                    text: '단위:%'
                },
            },

        }

    };
    return (
        <Container {...props}>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <Title>피해 경험 추이</Title>

                <TextField
                    name="colName"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.colName}
                    variant="outlined"
                >
                    {states.map((option) => (
                        <option
                            key={option.value}
                            data={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}

                </TextField>
            </Stack>

            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: 'relative'
                    }}
                >
                    <Bar
                        data={datadata}
                        options={options}
                    />
                </Box>
            </CardContent>
        </Container>
    );
};