
exports.up = function(knex, Promise) {
    return knex.schema.createTable('topics', function (table) {
        table.increments('id')
        .primary()
        .unsigned();
        table.string('default_img');
        table.string('name');
        table.timestamps(true, true);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('topics');
};
