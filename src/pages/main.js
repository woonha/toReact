import { Container, Grid, Stack, Typography } from "@mui/material"
import React, { useEffect } from "react";

import LawChat from "../components/chat";

const Main = () => {
  useEffect(() => {

  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} lg={6}>
          {/* <Typography  align="center" component="h2" variant="h4" color="primary" gutterBottom>
              </Typography> */}
          <Stack spacing={3}>
            <Container maxWidth="md" className="componentCenter">
              <LawChat></LawChat>
            </Container>
          </Stack>
        </Grid>
      </Container>
    </>
  )
}
Main.getLayout = (page) => (
  { page }
);
export default Main;