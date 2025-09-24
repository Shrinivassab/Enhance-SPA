const { faker } = require('@faker-js/faker');
const fs = require('fs');

const patients = Array.from({ length: 10000 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  diagnosis: faker.lorem.words(3),
  treatment: [faker.lorem.word(), faker.lorem.word()],
}));

fs.writeFileSync('src/assets/patients.json', JSON.stringify(patients));