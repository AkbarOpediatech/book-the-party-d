import { setupServer } from 'msw/node'

import { cartHandlers } from './handlers/cartHandlers'
import { orderHandlers } from './handlers/orderHandlers'
import { productHandlers } from './handlers/productHandlers'
import { userHandlers } from './handlers/userHandlers'

export const server = setupServer(...productHandlers, ...userHandlers, ...cartHandlers, ...orderHandlers)
