This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Create Next js project 
```bash
npx create-next-app@latest finance-tracker 
```
then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Fake Api Information
This application uses JSON Server to simulate a real backend for managing transactions. The mock API provides CRUD functionality to test and demonstrate features such as creating, reading, updating, deleting, and paginating transaction data.

Install JSON Server:

```bash
npm install -g json-server
```

Create a file named db.json in your project root and add mock data like this:
```bash
{
  "transactions": [
    {
      "id": "1",
      "description": "Grocery shopping",
      "amount": -50.25,
      "category": "Food",
      "date": "2025-04-01"
    },
    {
      "id": "2",
      "description": "Monthly salary",
      "amount": 3000,
      "category": "Salary",
      "date": "2025-04-02"
    }
  ]
}

```

To run JSON server 

```bash
npx json-server --watch db.json --port 3001
```
You can change port number . If you change then also update .env API base url.

How It Works:

The data is stored in a local file called db.json, located at the root of the project.

JSON Server serves the data from this file as a RESTful API on http://localhost:3001.

Common endpoints used:

GET /transactions – Fetch all transactions (supports pagination via ?_page= and &_per_page=).

POST /transactions – Add a new transaction.

PATCH /transactions/:id – Update a transaction by ID.

DELETE /transactions/:id – Delete a transaction by ID.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
