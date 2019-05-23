const faker = require("faker");

const createFakeUser = () => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  user_img: faker.internet.avatar(),
})

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      const fakeUsers = [];
      const desiredFakeUsers = 10;
      for (let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakeUser());
      }

      return Promise.all([
        knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
        knex('users').insert(fakeUsers)
      ]);
    });
};
