import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.block}>
            <span><NavLink to={'/'} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>Home</NavLink></span>
            <span><NavLink to={'users'} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>Users</NavLink></span>
            <span><NavLink to={'posts'} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>Posts</NavLink></span>
            <span><NavLink to={'comments'} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>Comments</NavLink></span>
        </div>
    );
};

export default HeaderComponent;