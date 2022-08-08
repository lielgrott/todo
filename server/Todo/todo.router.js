const express = require('express');

const TodoHandler = require('./todo.handler');

const router = express.Router();

router.get('/hello', (req, res) => res.send('hello'))
router.get('/', TodoHandler.getAllTodos);
router.post('/', TodoHandler.createTodo);
router.get('/:id', TodoHandler.getOneTodo);
router.delete('/:id', TodoHandler.deleteOneTodo);
router.put('/:id', TodoHandler.updateOneTodo);
router.patch('/:id/title', TodoHandler.updateOneTitle);
router.patch('/:id/description', TodoHandler.updateOneDescription);
router.patch('/:id/done', TodoHandler.updateOneDone);

module.exports = router;