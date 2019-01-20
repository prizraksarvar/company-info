import { Server, Faker, uid } from 'react-mock';
const endPoint = '/api/v1/companies';

const companySchema = {
  id: () => Faker.random.number(),
  name: () => Faker.company.companyName(),
  ogrn: () => Faker.company.bs(),
  type: () => Faker.random.boolean()?"ООО":"ИП",
  registrationDate: () => Faker.date.past(),
  active: () => Faker.random.boolean()
};

const requestHandler = (request, generator) => {
  const todoList = generator.next(10, companySchema);
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify({data:todoList})];
};

Server.mockGet(endPoint, requestHandler);
Server.on();
