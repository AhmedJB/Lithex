
import Router from "next/router"
import { useEffect, useState } from "react"
import Details from "../../../pagesComponents/adpanel/Details";



export default function User(props){
    const [usr,setUser] = useState(null);
    

    useEffect(
        () => {
            const {user}  = Router.query;
            setUser(usr)
        }
    , [])


    return <Details userid={usr} />

}