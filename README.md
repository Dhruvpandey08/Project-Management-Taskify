# Project Management : Taskify

This repository hosts the code for Project Management Dashboard using Next.js, Node.js, and AWS services.

## Technology Stack

- **Frontend**: Next.js, Tailwind CSS, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid
- **Backend**: Node.js with Express, Prisma (PostgreSQL ORM)
- **Database**: PostgreSQL, managed with PgAdmin
- **Cloud**: AWS EC2, AWS RDS, AWS API Gateway, AWS Amplify, AWS S3, AWS Lambda, AWS Cognito

## Getting Started

### Prerequisites

Ensure you have these tools installed:

- Git
- Node.js
- npm (Node Package Manager)
- PostgreSQL ([download](https://www.postgresql.org/download/))
- PgAdmin ([download](https://www.pgadmin.org/download/))

### Installation Steps

1. Clone the repository:
   `git clone [git url]`
   `cd taskify`

2. Install dependencies in both client and server:
   `cd client`
   `npm i`
   `cd ..`
   `cd server`
   `npm i`

3. Set up the database:
   `npx prisma generate`
   `npx prisma migrate dev --name init`
   `npm run seed`

4. Configure environment variables:
- `.env` for server settings (PORT, DATABASE_URL)
- `.env.local` for client settings (NEXT_PUBLIC_API_BASE_URL)

5. Run the project
   `npm run dev`

## Screenshots

![1](https://github.com/user-attachments/assets/0e700e0d-6fb9-42ab-aa77-ad9b0a3c2d15)
![2](https://github.com/user-attachments/assets/b2293538-c58b-42fc-b3df-5910523328de)
![3](https://github.com/user-attachments/assets/e0ceb26d-069f-4b17-b9b7-98e9dadda0b9)
![4](https://github.com/user-attachments/assets/6712a005-f3d9-465a-85a3-b122b174c571)
![5](https://github.com/user-attachments/assets/fa35ca03-ec15-443d-8f55-a122a1146500)
![6](https://github.com/user-attachments/assets/0ebfa146-b552-497b-8202-1e686ca5d290)
![7](https://github.com/user-attachments/assets/c60a0d06-f156-4976-9382-9231ab04762c)
