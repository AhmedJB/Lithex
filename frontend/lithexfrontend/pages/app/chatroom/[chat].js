
import Router from "next/router"
import { useEffect, useState } from "react"
import ChatRoom from "../../../components/ChatRoom";




export default function User(props){
    const [chat,setChat] = useState(null);
    

    useEffect(
        () => {
            const {c}  = Router.query;
            setChat(c)
        }
    , [])


    return <ChatRoom chat={chat} />

}