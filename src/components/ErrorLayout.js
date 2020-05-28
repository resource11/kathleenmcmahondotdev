import React from "react"
import classnames from "classnames"
import "../utils/fontawesome"
import data from "../../data"
import { useExtraClasses } from "../utils/useExtraClasses"
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import styles from "./layout.module.css"

const Layout = ({ children, extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)
  const { primaryNav, footerNav } = data

  const mainClasses = classnames(css.main, css.stack)

  return (
    <MdxEmbedProvider>
      <div className={css.contentWrapper}>
        <SiteHeader primaryNav={primaryNav} />
        <main id="main" className={mainClasses}>
          {children}>
        </main>

        <SiteFooter footerNav={footerNav} />
      </div>
    </MdxEmbedProvider>
  )
}

export default Layout
