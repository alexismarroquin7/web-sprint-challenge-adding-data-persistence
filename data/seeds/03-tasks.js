
exports.seed = function(knex) {
  return knex('tasks').insert([
    { task_description: 'task-desc-1', task_notes: 'task-notes-1', project_id: 1 },
    { task_description: 'task-desc-2', task_notes: 'task-notes-2', project_id: 2 }
  ]);
};
