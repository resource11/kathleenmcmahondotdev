/* Using this utility in your CSS modules-based functional 
component allows you to target overrides for specific CSS 
classes when using the component in an app.

The components in this library use the following naming 
convention for css imports:

'styles' is the import name for the css file that contains 
CSS selectors that are available for overrides. 

'protectedCSS' is the import name for the file that contains 
css selectors that cannot be changed.

You can use your own naming convention with this utility, 
yet you should make sure the name of your css import differs 
from the name assigned to the value returned by this function. 
(e.g., using `import css` at the top of the file and 
`const css = useExtraClasses(...)` inside your function component
body will not work)

Once this utility is imported into your component, you must 
declare a const of 'css' inside your component function body 
and assign the useExtraClasses function to it, passing in two arguments: 
the import name of the CSS file that is available for overrides 
and 'props.extraClasses' — which is the object of props that 
is passed into the component at implementation time.


Example usage of util in a functional component:

  import styles from '../path/to/file.css';
  import useExtraClasses from '../path/to/useExtraClasses';
  const myComponent = (props) => {
    const css = useExtraClasses(styles, props.extraClasses);

    return (
		<button
      className={css.button}
      onClick={onClick}>
			<span className={protectedCSS.btnContentWrap}>
				{children}
				<Icon
						extraClasses={{ icon: css.icon }}
					/>
				)}
			</span>
		</button>
	);
    //the rest of your component
  }

  Note that in the above example the `css.button` and `css.icon` classes
  can be overridden and the CSS class on the `span` is protected from 
  any style overrides.

  

  Using the extraClasses prop in a component:

  In order to target classes for overrides in a component, that 
  component must have CSS classes attached to the component, the CSS
  named import must me added to the useExtraclasses hook, **and** 
  those classes must exist in the component's CSS file as non-empty rules. 

  When passing in extraClasses to a override-enabled component, pass in 
  the override values in object format, where the keys are the names of the
  classes you want to override, and the values are the names of the classes 
  you want to pass in as the override.

  For example if you were using a Button in your app and wanted to pass in the
  overrideButton and overrideIcon classes into the Button:

  <Button extraclasses={{button: css.overrideButton, icon: css.overrideIcon}} />

  This will target the Button's button class to receive the overrideButton class,
  and the icon class to receive the overrideIcon class.

*/
export const useExtraClasses = (css, extraClasses) => {
  if (extraClasses === null) {
    return css
  }

  const newCss = { ...css }

  for (const className in extraClasses) {
    if (newCss[className]) {
      newCss[className] = `${newCss[className]} ${extraClasses[className]}`
    }
  }

  return newCss
}
