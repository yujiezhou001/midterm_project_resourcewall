const faker = require("faker");


exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {

      return Promise.all([
        knex.raw('ALTER SEQUENCE resources_id_seq RESTART WITH 1'),
        knex('resources')
        .insert(
          [
            {url: 'https://youtu.be/W6NZfCO5SIk', title: 'Javascript Tutorial',  description: 'Video tutorial on learning the basics of Javascript in 1 hour.', user_id: faker.random.number({min:1, max:10}), topic_id: 7},
            {url: 'https://www.kitchensanctuary.com/slow-cooked-spicy-chicken-curry/', title: 'new recipe', description: 'Spicy chicken curry!', user_id: faker.random.number({min:1, max:10}), topic_id: 2},
            {url: 'https://learnenglish.britishcouncil.org/english-grammar', title: 'Learn English', description: 'Tutorial on English grammar for beginners', user_id: faker.random.number({min:1, max:10}), topic_id: 3},
            {url: 'https://www.mydogsname.com/10-dog-craft-projects-that-are-easier-than-you-think/', title: 'Pet art!', description: '10 arts & crafts projects to do with your dog!', user_id: faker.random.number({min:1, max:10}), topic_id: 4},
            {url: 'https://fourminutebooks.com/atomic-habits-summary/', title: 'Create and keep new habits!', description: 'Super blog provides 4-minute summary for book', user_id: faker.random.number({min:1, max:10}), topic_id: 5},
            {url: 'https://www.fluentu.com/blog/japanese/learn-japanese-while-you-sleep/', title: 'Sleep + Learn Japanese', description: 'Learn Japanese in your sleep', user_id: faker.random.number({min:1, max:10}), topic_id: 3},
            {url: 'https://youtu.be/zctLck0TJNk', title: 'Advanced drumming techniques', description: 'Video on best warm-up techniques before a big show and creativity', user_id: faker.random.number({min:1, max:10}), topic_id: 1},
            {url: 'https://dadwithapan.com/', title: 'Recipes for the busy dad', description: 'This blog is great if you’re a busy dad (partially or largely because you have kids) but you still need to feed them and yourself.', user_id: faker.random.number({min:1, max:10}), topic_id: 2},
            {url: 'https://www.rejectiontherapy.com/100-days-of-rejection-therapy', title: 'Do the 100 days of rejection challenge', description: 'blog on how to face & overcome rejection which is paramount to success as an entrepreneur', user_id: faker.random.number({min:1, max:10}), topic_id: 5},
            {url: 'https://youtu.be/VWw_1-gEdLA', title: 'Magic tricks for beginners', description: 'Video showing easy magic tricks anyone can do!', user_id: faker.random.number({min:1, max:10}), topic_id: 3}
          ])
      ]);
    });
};