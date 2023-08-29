import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Person } from './person.model';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async getAllPersons(): Promise<Person[]> {
    return this.prisma.persons.findMany();
  }

  async getPerson(id: number): Promise<Person | null> {
    return this.prisma.persons.findUnique({ where: { id: Number(id) } });
  }

  async createPerson(data: Person): Promise<Person> {
    return this.prisma.persons.create({data});
  }

  async updatePerson(id: number, data: Person): Promise<Person> {
    return this.prisma.persons.update({
      where: { id: Number(id) },
      data: { email: data.email, name: data.name, rank: data.rank },
    });
  }

  async deletePerson(id: number): Promise<Person> {
    return this.prisma.persons.delete({
      where: { id: Number(id) },
    });
  }
}
