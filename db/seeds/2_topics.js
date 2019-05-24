
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex.raw('ALTER SEQUENCE topics_id_seq RESTART WITH 1'),
        knex('topics').insert({id: 1, default_img: 'http://lorempixel.com/640/360/', name: 'music'}),
        knex('topics').insert({id: 2, default_img: 'http://lorempixel.com/640/360/', name: 'cooking'}),
        knex('topics').insert({id: 3, default_img: 'http://lorempixel.com/640/360/', name: 'languages'}),
        knex('topics').insert({id: 4, default_img: 'http://lorempixel.com/640/360/', name: 'arts_and_crafts'}),
        knex('topics').insert({id: 5, default_img: 'http://lorempixel.com/640/360/', name: 'life_hacks'}),
        knex('topics').insert({id: 6, default_img: 'http://lorempixel.com/640/360/', name: 'magic_tricks'}),
        knex('topics').insert({id: 7, default_img: 'http://lorempixel.com/640/360/', name: 'web_dev'})
      ]);
    });
};
