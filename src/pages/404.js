import React from "react"
import { useExtraClasses } from "../utils/useExtraClasses"
import ErrorLayout from "../components/ErrorLayout"
import styles from "../common/styles/pageStyles/Error.module.css"

export const FourOhFourPage = ({ extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)

  return (
    <ErrorLayout>
      <article className={css.bodyWrapper}>
        <article className={css.cover}>
          <h1 className={css.errorHeader}>
            <span className={css.errorCode}>404</span>
            {/* <span className={css.errorDescription}>Whoops! Page not found</span> */}
          </h1>
          <div className={css.errorMessage}>
            Whoops! That not the page you want.
          </div>
        </article>
      </article>
    </ErrorLayout>
  )
}

export default FourOhFourPage
