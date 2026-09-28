# ShopMate Frontend (React + Vite)

Single SPA for the ShopMate platform: catalog, cart, checkout (Stripe),
order history, and a chatbot widget wired to the Java backend.

## Setup

```bash
cd frontend
npm install
```

## Run

```bash
npm run dev
```

Visit http://localhost:5173

## Config

Edit `.env`:
```
VITE_API_BASE_URL=http://localhost:8080   # API Gateway
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

All requests go through the API Gateway only (`src/api/axiosConfig.js`) —
never call microservices or the ml-service directly from the frontend.

## Structure
- `src/pages/` — route-level pages
- `src/components/` — reusable UI, grouped by feature (product, cart, chatbot, payment, layout)
- `src/context/` — Auth + Cart global state
- `src/api/` — one file per backend resource, all built on a shared axios instance with JWT interceptor
- `src/hooks/` — `useAuth`, `useChat`

## Next steps
- Wire `Checkout.jsx` to pass real cart items into `createOrder`
- Add protected routes (redirect to `/login` if not authenticated)
- Style pass (Tailwind or CSS modules)
