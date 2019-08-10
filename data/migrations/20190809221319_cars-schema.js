
exports.up = function(knex) {
    return knex.schema.createTable('cars', (tbl) => {
        tbl.increments('id'),
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128);
        tbl.text('model', 128);
        tbl.int('mileage');
        tbl.text('transmission', 128);
        tbl.text('title', 128);
  })
};

exports.down = function(knex) {
  
};
