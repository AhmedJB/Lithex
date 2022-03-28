import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modular/Home.module.css'
import useRouter from "next/router"
import { Fragment } from 'react';

export default function Home() {
  const router = useRouter();
  return <Fragment>
    {router.push("/app/login")}
  </Fragment>
  
}
