import React from "react"
import PropTypes from "prop-types"
import logo from "../../../images/logo.svg"
import "./styles.scss"
// import HeaderLogoImg from "../../landing-page/Images/HeaderLogo"

// const Logo = () => (
//     <div id="logo" >
//         <HeaderLogoImg /> <span>socialwise</span>
//     </div>
// )

const Logo = ({ size }) => (
    <div id="logo" className={size}>
        <img src={logo} alt="logo" /> <span>socialwise</span>
    </div>
)

Logo.propTypes = {
    size: PropTypes.string,
}

Logo.defaultProps = {
    size: `full`,
}

export default Logo

