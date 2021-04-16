const Project = require('../project/model');

const checkTaskBody = (req, res, next) => {
  const { task_description, project_id } = req.body;
  if(task_description && task_description !== '' && typeof task_description === 'string' && project_id && typeof project_id === 'number'){
    next();
  } else {
    res.status(400).json({ message: 'task_description and project_id are required fields' });
  }
}

const checkProjectExists = async (req, res, next) => {
  const { project_id } = req.body;
  try {
    const project = await Project.findById(project_id);
    if(project){
      next();
    } else {
      res.status(404).json({ message: `project_id ${project_id} is not found` });
    }
  } catch(err) {
    next(err)
  }
}

module.exports = {
  checkTaskBody,
  checkProjectExists
}