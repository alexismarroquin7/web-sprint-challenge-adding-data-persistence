
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: 'resource-1', resource_description: 'resource-desc-1' },
    { resource_name: 'resource-2', resource_description: 'resource-desc-2' }
  ]);
};
