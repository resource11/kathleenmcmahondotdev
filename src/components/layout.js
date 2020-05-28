import React from "react"
import classnames from "classnames"
import "../utils/fontawesome"
import data from "../../data"
import { useExtraClasses } from "../utils/useExtraClasses"
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { Link } from "./Link"
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
          {children}
          <Link
            size="small"
            to={"#top"}
            icon={"arrow-up"}
            extraClasses={{ root: css.backToTop }}
          >
            Back to top
          </Link>
        </main>

        <SiteFooter footerNav={footerNav} />
      </div>
    </MdxEmbedProvider>
  )
}

export default Layout
