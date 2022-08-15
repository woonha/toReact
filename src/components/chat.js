import axios from "axios";
import { useEffect, useState } from "react";
import img from "../image/law.png"
import "../pages/chat.css"
const LawChat = () => {

    const [chatBoxValue, setChatBoxValue] = useState("");

    const handleMessageChange = event => {
        setChatBoxValue(event.target.value);
    };
    const [chatIndex, setChatIndex] = useState(0);

    const [chatList, setChattList] = useState([]);
    const [myChatList, setMyChatList] = useState([]);
    const Message = ({ speaker, text, imageUrl }) => {
        console.debug(speaker)
        let cls = "message "
        if (speaker == null) {
            cls = cls + "message-personal"
        }
        return (
            <div className={cls}>
                {imageUrl != null ? <figure className="avatar"><img src={img} /></figure> : <></>}
                {text}
            </div>
        )

    }
    const onCheckEnter = (e) => {
        if (e.key === 'Enter') {
            console.debug(chatBoxValue, "으앙")
            chatButtonClick()
        }
    }
    const chatButtonClick = () => {
        console.debug(chatBoxValue.length, "렝렝")

        const chattemp = {
            index: chatIndex,
            text: chatBoxValue,
            speaker: undefined,
            imageUrl: undefined
        }
        console.debug(chattemp)
        setMyChatList([...myChatList, chattemp])
        console.debug("내챗ㅇ,ㄴ", myChatList)
    }


    useEffect(() => {
        const chattemp = {
            index: chatIndex,
            text: chatBoxValue,
            speaker: null,
            imageUrl: null
        }
        console.debug(chattemp)
        const chatLog = {
            message: chatBoxValue
        }
        setChattList([...chatList, chattemp])
        axios.post("/chat/send", chatLog)
            .then(res => res)
            .then(res => {
                console.debug(res, " gkgkgkgkgkgkgk")
                let aiTemp = {
                    index: chatIndex + 1,
                    text: res.data.message,
                    speaker: "LAWBOT",
                    imageUrl: img
                }
                console.debug(aiTemp, "aiTemp")
                setChatIndex(chatIndex + 1)

                setChattList(chatList.concat(aiTemp))
                console.debug(chatList)
                setChatBoxValue("")
            })


    }, [myChatList])
    return (
        <>
            <div className="chat">
                <div className="chat-title">
                    <h1>LawBot</h1>
                    <h2>판례기반학교폭력챗봇</h2>
                    <figure className="avatar">
                        <img src={img} />
                    </figure>
                </div>
                <div className="messages">
                    <div className="messages-content">
                        {chatList.map(chat => {
                            return (<Message text={chat.text} speaker={chat.speaker} imageUrl={chat.imageUrl} key={chat.index}></Message>)
                        })}

                        {/* <div className="message message-personal">
                            {"애들이 저를 발로 차고 커터칼로 위협했어요"}
                        </div>
                        <div className="message">
                            <figure className="avatar"><img src={img} /></figure>
                            <p>{"해당 사례는 신체폭력이며"}</p>
                            <p>{"출석정지 7일, 서면사과등의 조치가 예상됩니다."}</p>
                            <p>{"귀하의 상황과 유사한 판례는 다음과 같습니다."}</p>
                            <p><a href="">광주지방법원-2017가합57856</a><br /> <a href="">부산지방법원-2018가합48003</a><br /> <a href="">서울행정법원-2017구합88183</a></p>
                        </div> */}
                    </div>
                </div>
                <div className="message-box">
                    <textarea onKeyDown={onCheckEnter} value={chatBoxValue} type="text" className="message-input" onChange={handleMessageChange} placeholder="Type message..."></textarea>
                    <button onClick={chatButtonClick} className="message-submit">Send</button>
                </div>
            </div>
        </>
    );
};



LawChat.getLayout = (page) => (
    { page }
    // <DashboardLayout>
    //     {page}
    // </DashboardLayout>
);
export default LawChat;
