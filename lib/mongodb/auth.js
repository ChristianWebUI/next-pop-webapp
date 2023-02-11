import db from '@/mongodb/db'
import User from '@/mongodb/models/User'
import bcryptjs from 'bcryptjs'

export default async function authorizeUser(credentials) {
  try {
    await db.connect()
    const user = await User.findOne({
      email: credentials.email
    })
    await db.disconnect()
    if (!user) {
      return { error: 'email or password does not match with our records' }
    }
    const matched = bcryptjs.compareSync(credentials.password, user.password)
    if (!matched) {
      return { error: 'email or password does not match with our records' }
    }
    return {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        isAdmin: user.isAdmin
      }
    }
  } catch (error) {
    return { error: error.message }
  }
}
