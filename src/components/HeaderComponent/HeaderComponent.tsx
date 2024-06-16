import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.heading}>

            <span><NavLink to={"/"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Home</NavLink></span>
            <span><NavLink to={"users"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>User page</NavLink></span>
            <span><NavLink to={"posts"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Post page</NavLink></span>
            <span><NavLink to={"usersPosts"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Users posts page</NavLink></span>

        </div>
    );
};

export default HeaderComponent;