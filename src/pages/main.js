import { Container, Grid, Stack, Typography } from "@mui/material"
import { useEffect } from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from "../image/temp.png"
const Main = () => {
    useEffect(() => {
        
      }, []);
    
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };
    return (
        <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <Typography  align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"법령"}
          </Typography>
          <Stack spacing={3}>
          <Widget
          handleNewUserMessage={handleNewUserMessage}
          showBadge={true}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
            </Stack>
</Grid>
</Container>
</>
    )

}
Main.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default Main;