const Resource = require('./model');

const checkResourceBody = (req, res, next) => {
  const { resource_name } = req.body;

  if(resource_name && resource_name !== '' && typeof resource_name === 'string'){
    next();
  } else {
    res.status(400).json({ message: 'resource_name is required' });
  }
}

const checkResourceNameUnique = async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    const filteredResources = resources.filter(resource => resource.resource_name === req.body.resource_name);
    if(filteredResources.length === 0){
      next();
    } else {
      res.status(400).json({ message: 'resource_name must be unique.' });
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {
  checkResourceBody,
  checkResourceNameUnique
}