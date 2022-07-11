import { Bar } from 'react-chartjs-2';
import { Box, TextField, CardContent, CardHeader, Paper, useTheme, Container } from '@mui/material';
import React from "react";
import { useState } from 'react';

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

export const Test1 = (props) => {
    const [sendData, setSendData] = React.useState({
        type: '1',
        value: '초등학생'
    });
    const [values, setValues] = useState('');
    const handleChange = (event) => {
        let tempData = [1, 2, 10, 4, 5, 6]
        if (event.target.value == '초등학생') {
            tempData = [11, 12, 110, 14, 15, 16]
        } else if (event.target.value == '중학생') {
            tempData = [111, 122, 10, 114, 15, 16]
        }
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        console.debug(values)
        setDatadata({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: tempData,
                    borderColor: 'red',
                    borderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: 'rgb(75, 192, 192)',
                    data: [1, 2, 3, 4, 5, 6],
                    borderWidth: 2,
                }
            ]

        })
    };

    const [datadata, setDatadata] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [11, 22, 120, 14, 35, 46],
                borderColor: 'red',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [11, 2, 13, 4, 45, 46],
                borderWidth: 2,
            },
        ]

    });

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


    const Chart = () => {
        return (
            <Container>
                <Chart data={datadata} />
            </Container>
        );
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
