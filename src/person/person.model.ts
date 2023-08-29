import { Prisma } from '@prisma/client';

export class Person implements Prisma.PersonsCreateInput {
  id: number;
  name: string;
  email: string;
  rank: number;
}
