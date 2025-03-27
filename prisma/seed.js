import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',

    },
  });

  console.log('Seed data inserted');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
