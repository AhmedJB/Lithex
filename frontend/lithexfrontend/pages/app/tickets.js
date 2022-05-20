import { Fragment , useContext , useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../components/Loader";
import { UserContext } from "../../contexts/UserContext";
import { req,formatDate, postReq, handleResp } from "../../Utils";
import IdentityVerification from '../../components/IdentityVerification';
import Swap from "../../components/Swap";
import { useToasts } from "react-toast-notifications";



export default function Tickets(props){

    const [User,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(true);
    const {addToast} = useToasts();

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
          });
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/628367acb0d10b6f3e7293c0/1g38kpusk';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();

        }
        , []
    )


    async function submitTicket(e){
        e.preventDefault();
        let obj = document.getElementById("object").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let body = {
            obj,
            email,
            message 
        }
        let resp = await postReq("support",body);
        handleResp(resp,addToast);

    }

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
  
            <title>Support</title>
          </Head>
          
  
          <div id="nexo-platform" className="application">
            <Header location="tickets" setLoading={setLoading} />

            <main>
            <section className="DashboardPage">
                
            <section>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <h1 className="text-center"> Submit a support ticket</h1>
                <p className="text-center">Tickets will be responded via email</p>
                <form  className="f-col md:w-4/5 w-full mx-auto mt-4 " >
                    <input className="outline-none p-[10px] rounded-[5px] border-2 my-5"  type="text" placeholder="Object" id="object" />
                    <input className="outline-none p-[10px] rounded-[5px] border-2 my-5" type="email" placeholder="Email" id="email" />
                    <textarea className="outline-none p-[10px] rounded-[5px] border-2 my-5 min-h-[300px]" placeholder="Message" id="message" />
                    <button className="Button primary block" onClick={submitTicket}> Send </button>
                </form>



              </div>
              </div>
              </div>
              </section>

    

            </section>



                </main>
                </div>
                </Fragment>
    );




    return (loading ?  <Loader setLoading={setLoading} /> : html);




}