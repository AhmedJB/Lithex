import styles from "../../styles/modular/loader.module.css"
import { Fragment, useContext, useState, useEffect } from "react";
import { logout,isLogged } from "../../Utils";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link"
import Router from "next/router";


export default function Loader(props){

    const [User, setUser] = useContext(UserContext);
    

  useEffect(() => {
    async function checkUser(){
      let  resp = await isLogged();
      if (resp){
        let obj = {...User}
        obj.logged =  true;
        obj.username = resp.username;
        obj.joined = resp.joined;
        obj.emal = resp.email;
        setUser(obj)
        return obj;
      }else{
        console.log("logged out")
        logout(setUser);
        return {
          logged : false
        }
      }


    }


    checkUser().then((res) => {
      console.log("done check");
      if (res.logged) {
        console.log("logged in");
        props.setLoading(false);
      }else{
        console.log("need login");
        Router.push("/app/login")
      }
    })


    
  
  }, [User.logged]);


    return  <div className="flex items-center justify-center w-screen h-screen">
        <div className={styles["lds-grid"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    
    


}