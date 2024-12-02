import { rest } from 'msw'
import { productData } from '../mockData/productData'

export const productHandlers = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productData))
  }),
  rest.post('/api/products', (req, res, ctx) => {
    const { name, price } = req.body as { name: string; price: number }

    if (!name || price < 0) {
      return res(ctx.status(400), ctx.json({ error: 'Invalid product data' }))
    }

    const newProduct = { id: productData.length + 1, name, price }
    productData.push(newProduct)

    return res(ctx.status(201), ctx.json(newProduct))
  })
]
