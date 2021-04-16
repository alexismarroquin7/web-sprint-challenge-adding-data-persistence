
exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Project-1', project_description: 'Project-desc-1' },
    { project_name: 'Project-2', project_description: 'Project-desc-2' }
  ]);
};
