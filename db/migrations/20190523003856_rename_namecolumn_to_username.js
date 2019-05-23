
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table.string('email');
        table.string('user_img');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table.dropColumn('email');
        table.dropColumn('user_img');
    });
};
