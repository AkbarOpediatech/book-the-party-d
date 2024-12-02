import { rest } from 'msw'
import { orderData } from '../mockData/orderData'

export const orderHandlers = [
  // Mock GET request for fetching orders
  rest.get('/api/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orderData))
  }),

  // Mock GET request for fetching a specific order by ID
  rest.get('/api/orders/:id', (req, res, ctx) => {
    const { id } = req.params
    const order = orderData.find(o => o.id === parseInt(id as string))

    if (!order) {
      return res(ctx.status(404), ctx.json({ error: 'Order not found' }))
    }

    return res(ctx.status(200), ctx.json(order))
  }),

  // Mock POST request for creating a new order
  rest.post('/api/orders', (req, res, ctx) => {
    const { userId, total, status } = req.body as { userId: number; total: number; status: string }

    if (!userId || total < 0 || !status) {
      return res(ctx.status(400), ctx.json({ error: 'Invalid order data' }))
    }

    const newOrder = { id: orderData.length + 1, userId, total, status }
    orderData.push(newOrder)

    return res(ctx.status(201), ctx.json(newOrder))
  })
]
