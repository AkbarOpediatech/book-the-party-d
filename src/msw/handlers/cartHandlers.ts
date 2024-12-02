import { rest } from 'msw'
import { cartData } from '../mockData/cartData'

export const cartHandlers = [
  // Mock GET request for fetching cart items
  rest.get('/api/cart', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData))
  }),

  // Mock POST request for adding an item to the cart
  rest.post('/api/cart', (req, res, ctx) => {
    const { productId, quantity } = req.body as { productId: number; quantity: number }

    if (!productId || quantity <= 0) {
      return res(ctx.status(400), ctx.json({ error: 'Invalid cart item' }))
    }

    const newCartItem = { id: cartData.length + 1, productId, quantity }
    cartData.push(newCartItem)

    return res(ctx.status(201), ctx.json(newCartItem))
  }),

  // Mock DELETE request for removing an item from the cart
  rest.delete('/api/cart/:id', (req, res, ctx) => {
    const { id } = req.params
    const index = cartData.findIndex(item => item.id === parseInt(id as string))

    if (index === -1) {
      return res(ctx.status(404), ctx.json({ error: 'Cart item not found' }))
    }

    cartData.splice(index, 1)

    return res(ctx.status(204))
  })
]
