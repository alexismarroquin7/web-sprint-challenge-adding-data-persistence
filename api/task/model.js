const db = require('../../data/dbConfig');

const findAll = async () => {
  const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
  return tasks.map(task => {
    return {
      ...task,
      task_completed: Boolean(task.task_completed)
    }
  });
}

const findById = async task_id => {
  const task = await db('tasks').where('task_id', task_id).first();
  return {
    ...task,
    task_completed: Boolean(task.task_completed)
  };
}

const create = async task => {
  if(task.task_completed === true){
    return {
      ...task,
      task_completed: 1
    }
  }
  const [ task_id ] = await db('tasks').insert(task);
  return findById(task_id);
}

module.exports = {
  findAll,
  findById,
  create
}