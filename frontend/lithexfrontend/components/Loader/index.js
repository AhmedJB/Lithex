import styles from "../../styles/modular/loader.module.css"



export default function Loader(){


    return  <div className="flex items-center justify-center w-screen h-screen">
        <div className={styles["lds-grid"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    
    


}