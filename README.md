# README

In this project, we are using ruby on rails for backend, nextjs for frontend and python script for working with AI related stuff like embeddings, RAG chain etc.

## Prerequisits:

- Ruby 3.3.0
- Python3
- OpenAI API key
- Weaviate account
- Huggingface Account

Install required gems and dependencies

```bash
bundle install
```

Create database and Run migrations

```bash
rails db:create
rails db:migrate
rails db:seed
```

Start rails server in 3001 port

```bash
rails s -p 3001
```

## Setup Python environment

Install python3:

```bash
brew install python
```

Check if python is installed or not

```bash
python3 --version
```

Create a Python virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment:

```bash
source venv/bin/activate # On Linux/macOS
```

```bash
.\venv\Scripts\activate # On Windows
```

Check if pip is installed or not:

```bash
pip --version
```

If pip is not installed, you can install it using the following command:

```bash
python3 -m ensurepip --upgrade
```

Install all the packages mentioned in requirements.txt:

```bash
pip install -r requirements.txt
```

## Setup frontend

Go to the frontend folder to run frontend:

```bash
cd nextjs-frontend
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

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

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
