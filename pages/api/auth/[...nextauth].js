import authorizeUser from '@/mongodb/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  // Configure the session type for the application
  session: {
    strategy: 'jwt'
  },
  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id
      if (user?.isAdmin) token.isAdmin = user.isAdmin
      return token
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      return session
    }
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const { user, error } = await authorizeUser(credentials)
          if (error) throw new Error(error)
          return user
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ]
})
