var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/getuser/:username', async (req, res, next) => {
  try {
    const foundUser = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    res.json(foundUser);
  } catch (error) {
    res.json(error, 'hhhhhhhhhh');
  }
});

router.post('/createuser', async (req, res, next) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);
    res.json(createdUser);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
