/**
 * One stop shop for helper hooks and decorators
 */
export * from "./useExtraClasses"
export * from "./fontawesome"

/**
 * Helper to produce a simple unique string.
 * @param {string} prefix - optional prefix
 */
export function uid(prefix) {
  let r
  // We don't want uniqueness when running tests, as that will cause snapshot
  // comparisons to fail.
  if (typeof process === "object" && process.env.ENV === "tests") {
    r = 1
  } else {
    r = Math.random().toString(36).substring(2, 16)
  }
  return `${prefix && `${prefix}-`}${r}`
}
