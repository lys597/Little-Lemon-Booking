import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={small_logo} />
            </div>
            <div>
                <p>Copyright Little Lemon</p>
            </div>
            </section>
        </footer>
    )
}

export default Footer;