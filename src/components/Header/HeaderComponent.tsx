import React from 'react';
import {Link} from "react-router-dom";
import css from "./HeaderComponent.module.css"


const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <div>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;