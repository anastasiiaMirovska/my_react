import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <div className={styles.main_block}>
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;