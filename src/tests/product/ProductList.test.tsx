import Results from '@/app/(landing)/services/components/Results'
import { render, screen, waitFor } from '@testing-library/react'
import { rest, server } from '../../msw/server'
import { describe, afterEach, it } from 'node:test'

describe('ProductList Component', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('renders products fetched from the API', async () => {
    render(<Results />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Product 1 - $100')).toBeInTheDocument()
      expect(screen.getByText('Product 2 - $200')).toBeInTheDocument()
    })
  })

  it('displays an error message when API fails', async () => {
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Failed to fetch products' }))
      })
    )

    render(<ProductList />)

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch products')).toBeInTheDocument()
    })
  })
})
