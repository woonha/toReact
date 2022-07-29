import axios from "axios";
import { useEffect, useState } from "react";
import yuni from "../image/myyuni.png"
import "../pages/chat.css"
const LawChat = () => {

    const [chatBoxValue, setChatBoxValue] = useState("");
    
    const handleMessageChange = event => {
        setChatBoxValue(event.target.value);
      };
    const [chatIndex, setChatIndex] = useState(0);
    const [chatList, setChatList] = useState([]);
    const [myChatList, setMyChatList] = useState([]);
    const Message = ({speaker, text, imageUrl})=>{
        console.debug(speaker)
        let cls = "message "
        if(speaker == null){
          cls = cls + "message-personal"
        }
        return(
          <div className={cls}>
            {imageUrl!=null ? <figure className="avatar"><img src={yuni}/></figure> : <></>}
          {text}
          </div>
        )
      
      }
    const onCheckEnter = (e) => {
        if(e.key === 'Enter') {
            console.debug(chatBoxValue , "으앙")
            chatButtonClick()
        }
    }
    const chatButtonClick=()=>{
        console.debug(chatBoxValue.length , "렝렝")

        let chattemp = {
            index: chatIndex,
            text : chatBoxValue,
            speaker : null,
            imageUrl : null
        }
        setChatIndex(chatIndex+1)
        setChatList([...chatList,chattemp])
        setMyChatList([...myChatList,chattemp])
        setChatBoxValue("")
    }
    
    useEffect(() => {
        if(chatList.length>0){
            axios.get("/test?a="+chatBoxValue)
            .then(res=>res)
            .then(res=>{
                console.debug(res.data)
                let aiTemp = {
                    index: chatIndex,
                    text : res.data,
                    speaker : "LAWBOT",
                    imageUrl : "../image/myyuni.png"
                }
                setChatIndex(chatIndex+1)
                setChatList([...chatList,aiTemp])
            })
        }
        
    }, [myChatList])
    return(
    <>
        <div className="chat">
            <div className="chat-title">
                <h1>LawBot</h1>
                <h2>판례기반학교폭력챗봇</h2>
                <figure className="avatar">
                <img src={yuni} />
                </figure>
            </div>
            <div className="messages">
                <div className="messages-content">
                    {chatList.map(chat=>{
                        return (<Message text={chat.text} speaker={chat.speaker} imageUrl={chat.imageUrl} key= {chat.index}></Message>)
                    })}
                </div>
            </div>
            <div className="message-box">
                <textarea onKeyDown={onCheckEnter} value ={chatBoxValue} type="text" className="message-input" onChange={handleMessageChange} placeholder="Type message..."></textarea>
                <button onClick={chatButtonClick} className="message-submit">Send</button>
            </div>
        </div>
    </>
    );
};



LawChat.getLayout = (page) => (
    {page}
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default LawChat;