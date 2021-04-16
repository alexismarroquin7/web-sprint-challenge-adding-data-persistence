const Project = require('./model');
const mw = require('./middleware');
const router = require('express').Router();

router.get(`/`, async (req, res, next) => {
  try {
    const project = await Project.findAll();
    res.status(200).json(project);
  } catch(err) {
    next(err);
  }
});

router.post(`/`, mw.checkProjectBody, async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch(err){
    next(err);
  }
})

module.exports = router;