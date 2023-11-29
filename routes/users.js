const express = require('express');
const router = express.Router();

// Define routes for users
router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Details for ID: ${userId}`);
});

module.exports = router;
