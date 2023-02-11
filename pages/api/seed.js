import db from '@/mongodb/db'
import User from '@/mongodb/models/User'
import data from '@/utils/data'

export const handler = async (req, res) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await db.disconnect()
  res.send({ message: 'seeded successfully' })
}

export default handler
