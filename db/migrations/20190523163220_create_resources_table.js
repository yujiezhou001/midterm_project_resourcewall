
exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', function (table) {
        table.increments('id')
        .primary()
        .unsigned();
        table.string('url');
        table.string('title');
        table.string('description');
        table.integer('user_id');
        table.integer('topic_id');
        table.timestamps(true, true);
        table.foreign('user_id').references('id').on('users').onDelete('cascade');
        table.foreign('topic_id').references('id').on('topics').onDelete('cascade');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('resources');
};
