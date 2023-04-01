export function normalizeCallbackUrl(callbackUrl) {
  const url = new URL(callbackUrl, window.location.origin)
  const path = url.pathname

  if (path.startsWith(window.location.pathname)) {
    // callback URL is relative to the current page
    return path.substring(window.location.pathname.length)
  } else {
    // callback URL is an absolute path
    return path
  }
}
