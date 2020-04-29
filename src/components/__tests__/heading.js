// original test from unit testing example
// import React from "react"
// import renderer from "react-test-renderer"

// import Header from "../header"

// describe("Header", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(<Header siteTitle="Default Starter" />)
//       .toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })

// test from testing React Components example
import React from "react"
import { render } from "@testing-library/react"
import Heading from "../heading"

test("Displays the correct title", () => {
  const { getByTestId } = render(<Heading />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})
