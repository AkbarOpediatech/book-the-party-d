import { rest, server } from '../../msw/server'

describe('Product API', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('fetches products successfully', async () => {
    const response = await fetch('/api/products')
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual([
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ])
  })

  it('handles API failure gracefully', async () => {
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }))
      })
    )

    const response = await fetch('/api/products')
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe('Internal Server Error')
  })
})
