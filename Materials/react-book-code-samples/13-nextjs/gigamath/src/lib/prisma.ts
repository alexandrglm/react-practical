// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'file:./dev.db',
      },
    },
  })
}

export default prisma;