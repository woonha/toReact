import { Container, Grid, Stack, Typography } from "@mui/material"
import React, { useEffect } from "react";
import "react-chat-elements/dist/main.css";

import { MessageList } from 'react-chat-elements'
import logo from "../image/temp.png"
import yuni from "../image/myyuni.png"
import "./chat.css"

const Message = ({speaker})=>{
  console.debug(speaker)
  let cls = "message "
  if(speaker != null){
    cls = cls + "message personal"
  }
  return(
    <div className={cls}>
    이윤희 너
    </div>
  )

}
const Main = () => {
  const messageListReferance = React.createRef();
    useEffect(() => {
        
      }, []);
    
    return (
        <>




      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12} lg={6}>
          <Typography  align="center" component="h2" variant="h4" color="primary" gutterBottom>
            {"|"}
          </Typography>
          <Stack spacing={3}>
          <Container maxWidth="xs">
            
<div className="chat">
  <div className="chat-title">
    <h1>윤희♡</h1>
    <h2>영철윤희</h2>
    <figure className="avatar">
      <img src={yuni} />
    </figure>
  </div>
  <div className="messages">
    <div className="messages-content mCustomScrollBox">
<div className="mCSB_container">
    <div className="message message-personal">
      이윤희 너
      </div>
      <div className="message message-personal">
      얼굴이 왜그래?
      </div>
      <div className="message"><figure className="avatar"><img src={yuni}/></figure>
        ?
        </div>
      <Message speaker></Message>
      </div>
    </div>
  </div>
  <div className="message-box">
    <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
    <button type="submit" className="message-submit">Send</button>
  </div>

</div>

          {/* <MessageList
	referance={messageListReferance}
	className='message-list'
	lockable={true}
	toBottomHeight={'100%'}
	dataSource={[
	    {
	        position: 'right',
	        type: 'text',
	        text: '헤헤헹',
	        date: new Date(),
	    },
      {
        position: 'left',
        type: 'text',
        text: '히힝',
        date: new Date(),
    }
	]} />
   */}
  </Container>
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