import React from 'react';
import styles from "../../styles/modular/simpleloader.module.css"


const SimpleLoader = () => {
    return (
        <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>
    );
}

export default SimpleLoader;
