
import Router from "next/router"
import { useEffect, useState } from "react"
import Details from "../../../pagesComponents/adpanel/Details";



export default function User(props){
    

    const {user} = Router.query;


    return <Details userid={user} />

}