import { Breadcrumbs, Button, Container, createTheme, Grid, Link, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import React from 'react';
import Title from '../components/chart/title';
import MainCard from '../components/lawCard';
// --------------------------------------
const Statute = () => {
  const colorTool = createTheme({
    palette: {
      primary: {
        main: '#fe4279', //메인 분홍이
        light: '#828DF8',
        dark: '#3832A0',
        contrastText: '#ffebee'
      },
    }
  });

  const [testData, setTestData] = useState([])

  useEffect(() => {
    axios.post("/statute/getList", {})
      .then(res => res)
      .then(res => {
        setTestData(res.data)
      })
  }, [])
  function test(test) {
    const 조문제목 = test["조문제목"] + ")"
    return [test["조문내용"].split(조문제목)[0] + test["조문제목"] + ")", test["조문내용"].split(조문제목)[1]]
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12} lg={6}>
        <Typography theme={colorTool} align="center" component="h2" variant="h4" color="primary" gutterBottom>
          {"법령"}
        </Typography>
        <Stack spacing={3}>

          {testData.map(data => {
            return (
              <MainCard title={test(data)[0]} codeHighlight>
                {/* 1조 */}
                <Typography variant="body2" gutterBottom>
                  {test(data)[1]}
                </Typography>

                {data["항"].map(hang => {
                  return (
                    <>
                      <Typography variant="body2" gutterBottom>
                        {hang["항내용"]}
                      </Typography>
                      {hang["호"].map(ho => {
                        return (
                          <Typography color="textSecondary" variant="body2" gutterBottom>
                            {ho["호내용"]}
                          </Typography>
                        )
                      })}
                    </>
                  )
                })}
              </MainCard>
            )
          })}
        </Stack>
      </Grid>
    </Container>


  );
};



Statute.getLayout = (page) => (
  { page }
  // <DashboardLayout>
  //     {page}
  // </DashboardLayout>
);
export default Statute;