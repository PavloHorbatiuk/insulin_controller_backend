import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Person } from './person.model';
import { PersonService } from './person.service';


@Controller('/persons')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async getAllPersons(): Promise<Person[]> {
    return this.personService.getAllPersons();
  }

  @Post()
  async postPerson(@Body() postsData: Person): Promise<Person> {
    return this.personService.createPerson(postsData);
  }

  @Get(':id')
  async getPerson(@Param('id') id: number): Promise<Person | null> {
    return this.personService.getPerson(id);
  }

  @Delete(':id')
  async deletePerson(@Param('id') id: number): Promise<Person> {
    return this.personService.getPerson(id);
  }

  @Put(':id')
  async updatePerson(@Param('id') id:number, @Body() postsData: Person): Promise<Person> {
    return this.personService.updatePerson(id, postsData);
  }
}
