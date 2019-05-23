const faker = require("faker");


exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {

      return Promise.all([
        knex('resources').insert({id: 1, url: 'http://lorempixel.com/640/360/', title: 'ubuntu',  description: 'Web dev is so fun!', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 2, url: 'http://lorempixel.com/640/360/', title: 'new recipe', description: 'Spicy chicken curry!', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 3, url: 'https://learnenglish.britishcouncil.org/english-grammar', title: 'Learn English', description: 'Tutorial on English grammar for beginners', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 4, url: 'http://lorempixel.com/640/360/', title: 'new photo', description: 'My newest photo', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 5, url: 'http://lorempixel.com/640/360/', title: 'new idea', description: 'I want this bike', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 6, url: 'http://lorempixel.com/640/360/', title: 'my dog', description: 'My dog is performing magic', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 7, url: 'https://www.rejectiontherapy.com/100-days-of-rejection-therapy', title: 'Do the 100 days of rejection challenge', description: 'blog on how to face & overcome rejection which is paramount to success as an entrepreneur', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 8, url: 'https://youtu.be/zctLck0TJNk', title: 'Advanced drumming techniques', description: 'Video on best warm-up techniques before a big show and creativity', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 9, url: 'https://dadwithapan.com/', title: 'Recipes for the busy dad', description: 'This blog is great if you’re a busy dad (partially or largely because you have kids) but you still need to feed them and yourself.', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})}),
        knex('resources').insert({id: 10, url: 'https://youtu.be/VWw_1-gEdLA', title: 'Magic tricks for beginners', description: 'Video showing easy magic tricks anyone can do!', user_id: faker.random.number({min:1, max:9}), topic_id: faker.random.number({min:1, max:8})})
      ]);
    });
};
