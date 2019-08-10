
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'asdfa234234', make: 'ford', model: 'fivehundred', mileage: 123451234, transmission: 'manual', title: 'clean' },
        { vin: 'asdsdwx4234', make: 'chevy', model: 'blazer', mileage: 5346346, transmission: 'automatic', title: 'salvage' },
        { vin: 'asce4c22c', make: 'BMW', model: '3 Series', mileage: 6436346, transmission: 'automatic', title: 'clean' }
      ]);
    });
};
