import React from "react"
import PropTypes from "prop-types"
import KMLogo from "../../svgs/KMLogo.svg"
import KMtxt from "../../svgs/KMtxt.svg"
import redOrangeSq from "../../svgs/redOrangeSq.svg"
import redPurpleSq from "../../svgs/redPurpleSq.svg"
import css from "./KMlogo.module.css"

export const KMlogo = ({ children }) => {
  return (
    <>
      <img src={KMtxt} alt="" className={css.KMtxt} />
      <div className={css.logoTmpGroup}>
        <img
          src={KMLogo}
          alt="KathleenMcMahon.dev"
          className={css.logoImg}
          role="img"
        />
      </div>
      <a className={css.logoImgLink} href="#">
        <div className={css.logoSqGroup}>
          <img src={redOrangeSq} alt="" className={css.redOrangeSq} />
          <img src={redPurpleSq} alt="" className={css.redPurpleSq} />
        </div>
      </a>
    </>
  )
}

export default KMlogo

KMlogo.propTypes = {
  children: PropTypes.object,
}
