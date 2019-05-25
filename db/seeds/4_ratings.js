const faker = require("faker");



exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex.raw('ALTER SEQUENCE ratings_id_seq RESTART WITH 1'),
        knex('ratings')
        .insert(
          [
          
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}, 
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}, 
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})},
            {rating_value: faker.random.number(5), user_id: faker.random.number({min:1, max:10}), resource_id: faker.random.number({min:1, max:10})}
          ])
      ]);
    });
};
