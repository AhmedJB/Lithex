import { Fragment , useContext , useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../components/Loader";
import { UserContext } from "../../contexts/UserContext";
import { req,formatDate } from "../../Utils";
import IdentityVerification from '../../components/IdentityVerification';
import Swap from "../../components/Swap";



export default function Exchange(props){

    const [User,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(true);

    const [verificationStatus , setVerificationStatus] = useState({
        status : null,
        path : null,
        verified : null,
  
  
  
      });

    async function fetchVerificationStatus(){
        let resp = await req("verify");
        if (resp) {
          console.log(resp);
          setVerificationStatus(resp)
        }else{
          console.log("fetching verification failed");
        }
      }

    useEffect(
        () => {
          fetchVerificationStatus().then( () => {
            console.log("done fetching data")
          })
        }
        , []
    )

    const html = (
        <Fragment>
  
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
            />
            <link rel="manifest" href="/assets/meta/manifest.json" />
            <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/assets/meta/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/assets/meta/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/assets/meta/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/assets/meta/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/assets/meta/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/assets/meta/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/assets/meta/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/assets/meta/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/assets/meta/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/assets/meta/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/assets/meta/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/assets/meta/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/assets/meta/favicon-16x16.png"
            />
  
            <title>Transactions</title>
          </Head>
          
  
          <div id="nexo-platform" className="application">
            <Header location="exchange" setLoading={setLoading} />

            <main>
            <section className="DashboardPage">
                
            {  false && <div className="w-full h-[300px]">
                <IdentityVerification customText={"Complete Identity Verification to unlock the Exchange"}  />
                </div> }

            {
              true && <Swap />
            }

            </section>



                </main>
                </div>
                </Fragment>
    );




    return (loading ?  <Loader setLoading={setLoading} /> : html);




}