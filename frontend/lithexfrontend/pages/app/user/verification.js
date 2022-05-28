import { Fragment , useContext , useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../../components/Loader";
import { UserContext } from "../../../contexts/UserContext";
import Profileaside from "../../../components/Profileaside";
import Router from "next/router";
import { req , handleFileSubmit } from "../../../Utils";


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {DropzoneDialog} from 'material-ui-dropzone'

import { useToasts } from "react-toast-notifications";






export default function Verification(props){
    const [User,setUser] = useContext(UserContext);
    const [ OpenAuth , setOpenAuth] = useState(false);
    const [loading,setLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [submited,setSubmited] = useState({
      "front" : null,
      "back"  : null,
      "selfie" : null
    })
    const [openDoc,setOpenDoc] = useState(false);
    const {addToast } = useToasts();
    const [step,setStep] = useState("front");
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
          setTimeout(() => {
            fetchVerificationStatus().then( () => {
              console.log("done fetching data")
            })
          },5000);
          
      },
      [User,verificationStatus]

    )


    const handleVerificationModal = () => {
      console.log("starting");
      setOpenAuth(true);
    }


    const verificationStep = () => {
      let status = verificationStatus.status;
      console.log(status);
      switch (status) {
        case "personal":
          Router.push(verificationStatus.path)
          break;

        case "upload":
          //handleVerificationModal();
          setOpenDoc(true);
          break;
        
        case "refused":
          //handleVerificationModal();
          setOpenDoc(true);
          break;

        
      
        default:
          console.log("not supported yet")
          break;
      }
  
  
    }


    const handleFiles = async (files) => {
      let temp = {...submited};
      if (!submited.front) {
        temp.front = files[0]
        setSubmited(temp);
        setStep("back");
      }else if (!submited.back) {
        temp.back = files[0]
        setSubmited(temp);
        setStep("selfie");
      }else if (!submited.selfie) {
        temp.selfie = files[0]
        setSubmited(temp);
        setStep("front")
        setOpenAuth(false);
        let res = await handleFileSubmit(temp);
        setSubmited({
          "front" : null,
          "back"  : null,
          "selfie" : null
        });
      if (res) {
        addToast("Uploaded successfuly",{
          appearance:"success",
          autoDismiss:true
        })
      }else{
        addToast("failed upload",{
          appearance : "error",
          autoDismiss : true
        })
      }
      }

      

    }


    const handleFileUploadError = (error) => {
      // Do something...
    }
    
    const handleFilesChange = (files) => {
      // Do something...
    }



    

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:"min(100%,1000px)",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    



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

          <title>Verification</title>
        </Head>
        <div id="nexo-platform" className="application">
          <Header location="verification" setLoading={setLoading} />

          <main>
            <section className="ProfilePage">
              <Profileaside location="verification" />
              <div className="ProfileVerifyIdentity">
                <h1>Identity Verification</h1>
                <p className="mb-l">
                  Complete Identity Verification to unlock all features
                </p>
                <div className="flex" style={{ alignItems: "stretch" }}>
                  <div className="VerificationProcessStep">
                    <div>
                      <h6>Verify Email</h6>
                      <p>
                        You already verified your email during the registration
                        process
                      </p>
                      <span className="step-status">
                        <i className="fa fa-check-circle tc-green-500 mr-xs" />
                        <span className="semi-bold tc-grey-700">Verified</span>
                      </span>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={40}
                      height={40}
                      src="/assets/icons/note.svg"
                    />
                  </div>
                  <div className="VerificationProcessStep mh-m">
                    <div>
                      <h6>Personal Info</h6>
                      <p>
                        Submit your personal information and add а mobile phone
                        number
                      </p>
                    {(!verificationStatus.verified && verificationStatus.status == "personal" ) && <span className="step-status">
                        <i className="fa fa-check-circle tc-grey-100 mr-xs" />
                        <span className="semi-bold tc-grey-300">
                          Not Verified
                        </span>
                      </span>}


                      {( verificationStatus.status == "pending" || verificationStatus.status == "refused" || verificationStatus.status == "upload" ) && <span className="step-status">
                        <i className="fa fa-check-circle tc-green-500 mr-xs" />
                        <span className="semi-bold tc-grey-700">Verified</span>
                      </span>}


                      
                    </div>
                    <img
                      alt
                      className="icon"
                      width={40}
                      height={40}
                      src="/assets/icons/icon-personal.svg"
                    />
                  </div>
                  <div className="VerificationProcessStep">
                    <div>
                      <h6>Identity Verification</h6>
                      <p>
                        Complete Identity Verification to unlock all features
                      </p>
                      {
                        !verificationStatus.verified &&<span className="step-status">
                        <i className="fa fa-check-circle tc-grey-100 mr-xs" />
                        <span className="semi-bold tc-grey-300">
                          Not Verified
                        </span>
                      </span>
                      }
                      

                      {
                        verificationStatus.verified && <span className="step-status">
                        <i className="fa fa-check-circle tc-green-500 mr-xs" />
                        <span className="semi-bold tc-grey-700">Verified</span>
                      </span>
                      }
                    </div>
                    <img
                      alt
                      className="icon"
                      width={40}
                      height={40}
                      src="/assets/icons/security/identity-verification.svg"
                    />
                  </div>
                </div>
                {!verificationStatus.verified && <div className="VerificationCTA">
                  <img alt src="/assets/svgs/mask-group.svg" />
                  <div>
                    {verificationStatus.status == "refused" && <div>
                      <h3>Your application is refused</h3>
                      <p>
                        Reason : {verificationStatus.reason}
                        </p>
                      <p>
                        Re Submit your documents and wait for approval
                      </p>
                    </div>}

                    {(verificationStatus.status == "pending") && <div>
                      <h3>Verification under process</h3>
                      <p>
                        your application waiting to be verified
                      </p>
                    </div>
                    
                    }

                    {
                      (verificationStatus.hasInfo && verificationStatus.status != "pending" && verificationStatus.status != "refused" && verificationStatus.status != "verified"   ) && <div>
                      <h3>Upload Your Indentity Documents</h3>
                      <p>
                        Upload a screenshot of the front/back side of your identity card and a selfie photo
                      </p>
                    </div>
                    }

                    {(verificationStatus.status != "pending" && verificationStatus.status != "refused" && !verificationStatus.hasInfo ) && <div>
                      <h3>Start Verification</h3>
                      <p>
                        Verify your identity and get access to all features of
                        the LIQD platform, including buying and selling crypto.
                        It will take just a few minutes.
                      </p>
                    </div>}
                    


                    
                    {
                      verificationStatus.status != "pending" && <button
                      type="button"
                      className="Button large secondary wide"
                      onClick={ verificationStep }
                    >
                      Start Verification
                    </button>
                    }
                    
                  </div>
                </div>}
                
                <h5 className="mt-xl2">
                  Features that will be unlocked after successful Identity
                  verification
                </h5>
                <div className="FeatureUnlocks p-0">
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/paper-plane.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">
                          Transfer../Assets
                        </h6>
                        <span>Top ups and withdrawals</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/cards.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">
                          Buy Crypto with Card
                        </h6>
                        <span>Use any Visa or Mastercard to buy crypto</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/up-arrow-group-block.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">Earn Interest</h6>
                        <span>Interest on your idle../assets</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/cards.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">LIQD Card</h6>
                        <span>Spend cash instantly</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/wallet-fiat.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">Borrow</h6>
                        <span>Cash or stablecoins</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/mentors.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">
                          Referral Program
                        </h6>
                        <span>Invite friends and earn Bitcoin</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/coins-swap.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">Exchange</h6>
                        <span>Buy, sell &amp; swap</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                  <div className="feature-list-item">
                    <div>
                      <img
                        alt
                        className="icon"
                        width={32}
                        height={32}
                        src="/assets/icons/governance-vote.svg"
                      />
                      <div>
                        <h6 className="semi-bold tc-grey-700">
                          Governance Vote
                        </h6>
                        <span>Decide the direction of LIQD</span>
                      </div>
                    </div>
                    <img
                      alt
                      className="icon"
                      width={16}
                      height={16}
                      src="/assets/icons/change-password.svg"
                    />
                  </div>
                </div>
                <h5>Limits</h5>
                <table className="LimitsInfoTable">
                  <thead>
                    <tr>
                      <th>
                        <i className="fa fa-circle mr-s tc-mint-500" />
                        <span className="tc-grey-700 fs-l">Savings Wallet</span>
                      </th>
                      <th>Top Up</th>
                      <th>Withdraw</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cryptocurrency</td>
                      <td>unlimited</td>
                      <td>
                        <span>
                          $<strong className="semi-bold">500,000.00</strong>
                        </span>
                        /day*
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Bank Transfer
                        <i className="fa fa-question-circle tc-grey-400 ml-xs fs-s" />
                      </td>
                      <td>$2,000,000.00/transfer</td>
                      <td>
                        <span>
                          $<strong className="semi-bold">100,000.00</strong>
                        </span>
                        /day*
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="LimitsInfoTable">
                  <thead>
                    <tr>
                      <th>
                        <i className="fa fa-circle mr-s tc-blue-500" />
                        <span className="tc-grey-700 fs-l">
                          Credit Line Wallet
                        </span>
                      </th>
                      <th>Top Up</th>
                      <th>Withdraw</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cryptocurrency</td>
                      <td>unlimited</td>
                      <td>
                        <span>
                          $<strong className="semi-bold">2,000,000.00</strong>
                        </span>
                        /day*
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Bank Transfer
                        <i className="fa fa-question-circle tc-grey-400 ml-xs fs-s" />
                      </td>
                      <td>$2,000,000.00/transfer</td>
                      <td>
                        <span>
                          $<strong className="semi-bold">2,000,000.00</strong>
                        </span>
                        /day*
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <Footer />
          </main>
        </div>




        {/* <Modal
        open={OpenAuth}
        onClose={() => setOpenAuth(false)}
        aria-labelledby="Upload Modal"
        aria-describedby="Documents Upload"
      >
        <Box sx={style}>

        <h1 className="text-center ">Upload your documents</h1>
     
     {/*  <FileUpload value={files} onChange={handleFiles} /> 
     



        </Box>

        </Modal> */}

<Modal
        open={openDoc}
        onClose={() =>  setOpenDoc(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className=" items-center justify-center">
          <div className="w-full h-full items-center" style={{display:"flex",flexDirection:"column"}} >
          <h1 className="text-center"> Upload Your Documents</h1>
          <p>Upload a screenshot of the front/back side of your identity card and a selfie photo
          </p>
          <button  type="button" onClick={() => { setOpenDoc(false); handleVerificationModal()}} className="Button primary my-5  w-1/5"> Upload </button>
          </div>
          </Box>

          </Modal>

              <DropzoneDialog
                    
                    open={OpenAuth}
                    onSave={handleFiles}
                    dropzoneText={`Drag or drop the ${step} Image`}
                    previewText={`Drag or drop the ${step} Image`}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    filesLimit={1}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={() => setOpenAuth(false)}
                />
      </Fragment>
    );




    return (loading ?  <Loader setLoading={setLoading} /> : html);


}