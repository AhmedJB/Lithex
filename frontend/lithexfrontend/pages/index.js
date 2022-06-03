import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modular/Home.module.css'
import Router from "next/router"
import Home from '../components/Home'
import { Fragment, useEffect } from 'react';


export default function HomeComp() {

  /* useEffect(() => {
    Router.push("/app/login")
  },[]) */

  return <Fragment>
    <Home />
  </Fragment>
  
}
