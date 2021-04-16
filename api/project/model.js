const db = require('../../data/dbConfig');

const findAll = async () => {
  const projects = await db('projects');
  return projects.map(project => {
    return {
      ...project,
      project_completed: Boolean(project.project_completed)
    }
  });
}

const findById = async project_id => {
  const project = await db('projects').where('project_id', project_id).first();
  return {
    ...project,
    project_completed: Boolean(project.project_completed)
  }
}

const create = async project => {
  if(project.project_completed === true){
    return {
      ...project,
      project_completed: 1
    }
  }
  const [ project_id ] = await db('projects').insert(project);
  return findById(project_id);
}

module.exports = {
  findAll,
  findById,
  create
}