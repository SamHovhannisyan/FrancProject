import React from "react";
import {Header, Footer} from "../../components";

const HelmetLayout = ({children }) => {
    return (
        <>
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        </>
    );
};


export default HelmetLayout;
