const checkProjectBody = (req, res, next) => {
  const { project_name } = req.body;
  if(project_name && project_name !== '' && typeof project_name === 'string'){
    next();
  } else {
    res.status(400).json({ message: 'project_name is a required field' });
  }
}

module.exports = {
  checkProjectBody
}