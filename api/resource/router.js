const Resource = require('./model');
const mw = require('./middleware');
const router = require('express').Router();

router.get(`/`, async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch(err){ 
    next(err);
  }
});

router.post(`/`, mw.checkResourceBody, mw.checkResourceNameUnique, async (req, res, next) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json(newResource);
  } catch(err) {
    next(err);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    custom: 'Something failed in resources',
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;