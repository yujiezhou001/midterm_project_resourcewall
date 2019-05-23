const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        knex('comments').insert({id: 1, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({id: 2, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({id: 3, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({id: 4, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({id: 5, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}), 
        knex('comments').insert({id: 6, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}),
        knex('comments').insert({id: 7, text: faker.lorem.sentence(), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})})
      ]);
    });
};
