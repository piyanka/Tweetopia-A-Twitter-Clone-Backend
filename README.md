# Tweetopia-A-Twitter-Clone-Backend
A full-featured Twitter-like backend built with Node.js, Express, GraphQL, and modern database technologies.

![Screenshot 2025-04-09 234147](https://github.com/user-attachments/assets/904c1c82-2a7c-4f94-838b-d229c86df16b)


## ✨ Features

- **Authentication**  
    Google OAuth 2.0 with JWT  
    Protected routes & rate limiting

- **Core Functionality**  
    Create/Delete/Edit Tweets  
    Like/Unlike tweets  
    Retweet system  
    Follow/Unfollow users  
    Smart user recommendations  

- **Tech Stack**  
  **GraphQL** (Queries/Mutations/Resolvers)  
  **Prisma** (ORM for PostgreSQL)  
  **Neon** (Serverless PostgreSQL)  
  **Redis** (Upstash for caching & rate limiting)  

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16
- Yarn
- PostgreSQL (Neon)
- Redis (Upstash)
- Google OAuth Credentials

### Installation
```bash
git clone https://github.com/your-username/tweetopia-backend.git
cd tweetopia-backend
yarn install


Database Setup
  yarn prisma migrate dev

Running Locally
  yarn dev

