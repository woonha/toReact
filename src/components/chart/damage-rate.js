
import { Bar, Line } from 'react-chartjs-2';
import { Box, TextField, Button, Card, CardContent, CardHeader, Paper, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

const states = [
    {
        value: '초등학생',
        label: '초등학생'
    },
    {
        value: '중학생',
        label: '중학생'
    },
    {
        value: '고등학생',
        label: '고등학생'
    }
];

export const DamageRate = (props) => {
    const theme = useTheme();
    // const [test, setTestdata] = useState(setTestdata)
    const [datadata, setDatadata] = useState({
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
                data: [45.5, 19.2, 28.8],

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
                data: [3.6, 1.8, 2.5],
                yAxisID: 'y_sub'
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
                            data: res.data.result1,

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
                            data: res.data.result2,
                            yAxisID: 'y_sub'
                        }
                    ]


                })
            })
        console.debug(values)

    }, [values])

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
        <Paper {...props}
            elevation={16}>
            <CardHeader title="피해 경험 추이" />

            <TextField
                name="student"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
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
        </Paper>
    );

};