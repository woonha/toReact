import { Bar } from 'react-chartjs-2';
import { Box, TextField, Card, CardContent, CardHeader, Divider, getAccordionDetailsUtilityClass, Typography, useTheme, Paper, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';




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

export const DamageType = () => {

  const theme = useTheme();
  const [values, setValues] = useState({
    student: 'test'
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.debug(event)
  };

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


  const Dataset1 = {
    label: '언어폭력',
    data: [42.7, 37.0, 40.8],
    backgroundColor: '#a6def7',
    color: theme.palette.text.secondary,
  }
  const Dataset2 = {
    label: '집단 따돌림',
    data: [14.3, 15.0, 16.4],
    backgroundColor: '#fcf4dc',
    color: theme.palette.text.secondary,
  }
  const Dataset3 = {
    label: '스토킹',
    data: [6.9, 3.7, 3.4],
    backgroundColor: colorTool.palette.primary.light,
    color: colorTool.palette.primary.light,
  }
  const Dataset4 = {
    label: '신체폭력',
    data: [12.6, 12.4, 10.7],
    backgroundColor: '#acddc5',
    color: theme.palette.text.secondary,
  }
  const Dataset5 = {
    label: '사이버폭력',
    data: [8.4, 16.0, 12.9],
    backgroundColor: '#e1d1f2',
    color: theme.palette.text.secondary,
  }
  const Dataset6 = {
    label: '금품갈취',
    data: [5.9, 5.7, 6.5],
    backgroundColor: '#eee3a3',
    color: theme.palette.text.secondary,
  }
  const Dataset7 = {
    label: '성폭력',
    data: [3.7, 5.2, 6.5],
    backgroundColor: '#847eb4',
    color: theme.palette.text.secondary,
  }
  const Dataset8 = {
    label: '강요',
    data: [5.5, 5.0, 4.9],
    backgroundColor: '#3f4e57',
    color: theme.palette.text.secondary,
    borderRadius: 10,
  }
  const data = {
    labels: ['초등학생', '중학생', '고등학생'],
    datasets: [
      Dataset1,
      Dataset2,
      Dataset3,
      Dataset4,
      Dataset5,
      Dataset6,
      Dataset7,
      Dataset8,
    ]
  };

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
    <Paper
      elevation={16}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="middle"
          >
            2021년
          </Button>
        )}
        title="피해 유형별 비율"
      />
      <TextField
        fullWidth
        label="Select State"
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
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Paper>
  );
};