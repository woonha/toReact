import { Bar } from 'react-chartjs-2';
import { Box, TextField, Card, CardContent, CardHeader, Divider, getAccordionDetailsUtilityClass, Typography, useTheme, Paper, Button, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import Title from './title';
import axios from 'axios';


const states = [
  {
    value: '2021',
    label: '2021'
  },
  {
    value: '2020',
    label: '2020'
  },
  {
    value: '2019',
    label: '2019'
  }
];
export const DamageType = (props) => {

  const theme = useTheme();
  const backColorList = ['#a6def7', '#fcf4dc', '#f8bbd0', '#acddc5', '#e1d1f2', '#eee3a3', '#847eb4', '#3f4e57']
  const labelList = ['언어폭력', '집단 따돌림', '스토킹', '신체폭력', '사이버폭력', '금품갈취', '성폭력', '강요'];
  const labelEngList = ['speech', 'bullying', 'stalking', 'physical', 'cyber', 'extortion', 'sexual', 'coercion']
  const [values, setValues] = useState({ year: 2021 });
  const [datadata, setDatadata] = useState({ datasets: [] });
  const chartSetting = () => {

    const params = {
      chart: 3,
      year: values["year"]
    }
    console.debug("되고있냐고", params)
    axios.post("/chart/chart3", params)
      .then(res => res)
      .then(res => {
        console.debug(res.data, "어떻게되냐")

        const result = res.data;
        let data = []
        labelList.map((label, idx) => {
          data.push({
            label: label,
            data: [result[0][labelEngList[idx]], result[1][labelEngList[idx]], result[2][labelEngList[idx]]],
            backgroundColor: backColorList[idx]
          })
          console.debug(idx)
        })

        setDatadata({
          labels: ['초등학생', '중학생', '고등학생'],
          datasets: data
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
  const colorTool = createTheme({
    palette: {
      primary: {
        light: '#f8bbd0',
        main: '#f48fb1',
        dark: '#002884',
        contrastText: '#fff'
      },
    },
    typography: {
      poster: {
        light: '#f8bbd0',
        main: '#f48fb1',
        dark: '#002884',
        contrastText: '#fff'
      },
      // Disable h3 variant
      h3: undefined,
    },
  });

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    animation: false,
    spanGaps: false,
    maxBarThickness: 60,
    scales: {
      x: { //x축값 누적
        stacked: true,
        suggestedMax: 100,
        ticks: {
          display: false,
          stepSize: 1,
          fontColor: theme.palette.text.secondary
        },
        grid: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false
        },

      },
      y: { //y축값 누적
        stacked: true,
        suggestedMax: 100,
        ticks: {
          stepSize: 10
        },
        grid: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
      },
    }


  };
  return (
    <Container {...props}>
      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <Title>피해 경험 추이</Title>

        <TextField
          name="year"
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