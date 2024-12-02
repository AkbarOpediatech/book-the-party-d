import { rest } from 'msw'
import { userData } from '../mockData/userData'

export const userHandlers = [
  // Mock GET request for fetching user details
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userData))
  }),

  // Mock GET request for fetching a user by ID
  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params
    const user = userData.find(u => u.id === parseInt(id as string))

    if (!user) {
      return res(ctx.status(404), ctx.json({ error: 'User not found' }))
    }

    return res(ctx.status(200), ctx.json(user))
  }),

  // Mock POST request for creating a new user
  rest.post('/api/users', (req, res, ctx) => {
    const { name, email } = req.body as { name: string; email: string }

    if (!name || !email) {
      return res(ctx.status(400), ctx.json({ error: 'Invalid user data' }))
    }

    const newUser = { id: userData.length + 1, name, email }
    userData.push(newUser)

    return res(ctx.status(201), ctx.json(newUser))
  })
]
