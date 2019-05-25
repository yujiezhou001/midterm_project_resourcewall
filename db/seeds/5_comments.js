const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex.raw('ALTER SEQUENCE comments_id_seq RESTART WITH 1'),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}), 
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({ text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})})
      ]);
    });
};
