import React, { Fragment } from "react"
import { useMDXScope } from "gatsby-plugin-mdx/context"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import { DisplayBox } from "../DisplayBox"

// inspired by Twitch Livestream with Jason Lengstorf
// and Chris Biscardi's blog post:
// https://www.christopherbiscardi.com/post/using-mdx-scope-in-react-live-scope/

export const CodeBlock = ({ codeString, language, ...props }) => {
  const components = useMDXScope()
  // render component and editable code block. TODO: figure out how to adjust pre font-size to 1rem
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} scope={components} theme={theme}>
        <DisplayBox>
          <LivePreview  />
        </DisplayBox>
        <LiveEditor style={{ margin: 0, fontSize: '1.25rem' }} />
        <LiveError />
      </LiveProvider>
    )
  } else if (props["displaybox"]) {
    // render component and static code block
    return (
      <Fragment>
        <LiveProvider code={codeString} scope={components} theme={theme}>
          <DisplayBox>
            <LivePreview />
          </DisplayBox>
        </LiveProvider>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
          style={{ fontSize: '1.25rem' }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Fragment>
    )
  } else {
    // render code block only
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default CodeBlock
