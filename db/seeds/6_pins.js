const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex('pins').del()
    .then(function () {
      return Promise.all([
        knex.raw('ALTER SEQUENCE pins_id_seq RESTART WITH 1'),
        knex('pins').insert({id: 1, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 2, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 3, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 4, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 5, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 6, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 7, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 8, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 9, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('pins').insert({id: 10, user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})})
      ]);
    });
};
