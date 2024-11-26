> Need to implement `nextAuth`

---

> Need to implement `RBA for page/route`

---

## _TODOS_:

- [-] Redux Api integration
- [-] NextAuth integration
- [-] Authintecation integration with middleware

---

- [-] API integration - Services
- [-] API integration - user Profile
- [-] API integration - Notifications with realtime notifications

---

- [-] Implementation CICD
- [-] Implementation ElasticSearch for Services searching
- [-] Deploy on VPS
- [-] Add Testing Code
- [-] Add Load Balander
- [x] Test performance using k6

---

# Task Planning

- Api integration - login and auth flow will take care of 2nd phase,
- manage all slice for managing states with redux

- then need to handle middleware with next js
- need to take decision which process is more production grade for manageing api? redux toolkit or server side or static side for fetching data ?

- Data Freshness
- Performance
- User Experience

### fetching data strategies

- Server-Side Rendering

  - user dashboards, real-time data
  - Pages that require server-side authentication or authorization
  -

- Static Site Generation

  - when we need to build at once, on build time
  - if we need to build on needed, then user want to increment then user fallback or revalidate,

### [ER-Diagram](https://example.com)
