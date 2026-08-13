import React from "react";

const Footer = () => {

    const date = new Date();

    return(
        <footer>
            Copyright {date.getFullYear()}
        </footer>
    )
}

export default Footer;