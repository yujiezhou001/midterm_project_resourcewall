
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pins', function (table) {
        table.increments('id')
        .primary()
        .unsigned();
        table.integer('user_id');
        table.integer('resource_id');
        table.timestamps(true, true);
        table.foreign('user_id').references('id').on('users').onDelete('cascade');
        table.foreign('resource_id').references('id').on('resources').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pins');
};
