import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.heading}>
            <NavLink to={"/"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Auth form</NavLink>
            <NavLink to={"cars"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Cars</NavLink>
        </div>
    );
};

export default HeaderComponent;