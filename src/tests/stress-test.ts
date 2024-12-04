// // tests/stress-test.ts

// import { check, sleep } from 'k6'
// import http from 'k6/http'

// // Set up the load test options
// export const options = {
//   stages: [
//     { duration: '30s', target: 50 }, // Ramp up to 50 users over 30 seconds
//     { duration: '1m', target: 50 }, // Maintain 50 users for 1 minute
//     { duration: '30s', target: 0 } // Ramp down to 0 users
//   ]
// }

// export default function () {
//   const res = http.get('http://localhost:3000/')

//   check(res, {
//     'Homepage loads successfully': r => r.status === 200
//   })

//   sleep(1)
// }
