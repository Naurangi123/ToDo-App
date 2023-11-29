const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Middleware for handling 404 errors if no other routes match
router.use((req, res, next) => {
  const err1 = new Error('No error Found');
  err1.status = 404;
  next(err1);
});

/* GET home page. */
router.get('/', async function (req, res, next) {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

router.post('/add', async function (req, res, next) {
  const { description } = req.body;
  await Task.create({ description });
  res.redirect('/');
});

router.get('/delete/:id', async function (req, res, next) {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect('/');
});

// Error-handling middleware
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', { error: err });
});

module.exports = router;
