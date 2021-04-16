const Task = require('./model');
const mw = require('./middleware');
const router = require('express').Router();

router.get(`/`, async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch(err) {
    next(err);
  }
});

router.post(`/`, mw.checkTaskBody, mw.checkProjectExists, async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch(err) {
    next(err);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = router;
