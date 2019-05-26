const faker = require("faker");



exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({id: 1, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 2, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 3, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 4, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 5, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}), 
        knex('ratings').insert({id: 6, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 7, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}), 
        knex('ratings').insert({id: 8, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 9, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('ratings').insert({id: 10, rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex.raw('SELECT setval(\'ratings_id_seq\', (SELECT MAX(id) from "ratings"));')
      ]);
    });
};
