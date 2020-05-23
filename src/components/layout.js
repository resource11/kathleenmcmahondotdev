import React from "react"
import classnames from "classnames"
import "../utils/fontawesome"
import data from "../../data"

import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import css from "./layout.module.css"

const Layout = ({ children }) => {
  const { primaryNav, footerNav } = data

  const mainClasses = classnames(css.main, css.stack)

  return (
    <MdxEmbedProvider>
      <div className={css.contentWrapper}>
        <SiteHeader primaryNav={primaryNav} />
        <main id="main" className={mainClasses}>
          {children}
        </main>
        <SiteFooter footerNav={footerNav} />
      </div>
    </MdxEmbedProvider>
  )
}

export default Layout
