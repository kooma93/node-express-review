const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/todoList')
  .get(controller.fetch)
  .post(controller.post)
  .delete(controller.delete)

// if there were different endpoints
// router 
//   .route('./different')
//   .get(controller.)

module.exports = router;