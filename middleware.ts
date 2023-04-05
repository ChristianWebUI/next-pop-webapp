// @ts-nocheck
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const path = req.nextUrl.pathname

      if (path.startsWith('/admin')) {
        return token?.isAdmin
      }

      return token !== null
    }
  }
})

export const config = {
  matcher: [
    '/shipping',
    '/payment',
    '/placeorder',
    '/order/:path*',
    '/admin/:path*'
  ]
}
