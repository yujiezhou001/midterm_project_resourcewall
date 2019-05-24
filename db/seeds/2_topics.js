
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex.raw('ALTER SEQUENCE topics_id_seq RESTART WITH 1'),
        knex('topics').insert({id: 1, default_img: 'https://nmgprod.s3.amazonaws.com/media/filer_public_thumbnails/filer_public/ef/73/ef73c4f9-60b1-4ff1-b418-06bc20540e29/holidaymusic.jpg__640x360_q85_crop_subsampling-2.jpg', name: 'music'}),
        knex('topics').insert({id: 2, default_img: 'http://www.pbs.org/food/wp-content/blogs.dir/2/files/2011/08/kcts9-cooks640x360.jpg', name: 'cooking'}),
        knex('topics').insert({id: 3, default_img: 'http://www.surfacelanguages.com/blog/wp-content/uploads/2017/02/globe640360.jpg', name: 'languages'}),
        knex('topics').insert({id: 4, default_img: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/destinations/asia/silk-road-crafts.jpg', name: 'arts_and_crafts'}),
        knex('topics').insert({id: 5, default_img: 'https://agentpekka.com/wp-content/uploads/2015/06/AP_Robin_Davey_Macworld_hack_2x-640x360.jpg', name: 'life_hacks'}),
        knex('topics').insert({id: 6, default_img: 'http://www.millgroveheavyequipmentservice.ca/images/category_28/Kids%20Toys%20New%20Ellusionist%20Black%20Ghost%20Deck%20Bicycle%20Second%20Edition%20Playing%20Cards%20Magic%20Tricks%20Magic%20Poker%20Card%20Magic%20Toy%2081214%20tEBMKTSP_4.jpg', name: 'magic_tricks'}),
        knex('topics').insert({id: 7, default_img: 'https://i.pinimg.com/originals/fd/f3/e5/fdf3e58f7d5793796bd70a0b7f76e050.jpg', name: 'web_dev'})
      ]);
    });
};
