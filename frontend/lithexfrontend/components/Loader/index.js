import styles from "../../styles/modular/loader.module.css"
import { Fragment, useContext, useState, useEffect } from "react";
import { logout,isLogged } from "../../Utils";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link"
import Router from "next/router";
import { useToasts } from "react-toast-notifications";


export default function Loader(props){

    const [User, setUser] = useContext(UserContext);
    const {addToast} = useToasts();
    

  useEffect(() => {
    async function checkUser(){
      let  resp = await isLogged();
      if (resp){
        let obj = {...User}
        obj.id = resp.id;
        obj.logged =  true;
        obj.username = resp.username;
        obj.path = resp.path;
        obj.isA = resp.s;
        obj.joined = resp.joined;
        obj.email = resp.email;
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
          console.log(res);
          if (props.admin && !res.isA){
            Router.push(res.path)
  
          }else if (!props.admin && res.isA){
            Router.push(res.path)
          }
          props.setLoading(false);
        }else{
          
          console.log("need login");
          if (props.register){
            Router.push("/app/register")
          }else{
            Router.push("/app/login")
          }
          
        }
      
       
       
      
    })


    
  
  }, [User.logged]);


    return  <div className="flex items-center justify-center w-screen h-screen">
        <div className={styles["lds-grid"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    
    


}