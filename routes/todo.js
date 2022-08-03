const express = require('express');
const { isMongoId } = require('validator');

const Todo = require('../models/todoData');

const router = express.Router();
const generalErrorResponse = res => {
    res.status(500);
    return res.send('Internal server error');
};

// get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.json({ message: err });
    };
})

// submits a todo
router.post('/', async (req, res) => {
    const { title, description, done } = req.body;
    const newTodo = new Todo({ title, description, done });
    // save the todo
    try {
        const savedTodo = await newTodo.save();
        res.send(savedTodo);
    } catch (err) {
        console.log(err);
        generalErrorResponse(res);
    }
})
// get todo by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!isMongoId(id)) {
        res.status(400);
        return res.send('id is not valid monogId');
    }
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            res.status(404);
            return res.send();
        }
        return res.send(todo);
    } catch (err) {
        console.log(err);
        generalErrorResponse(res);
    }
})

// delete todo by id
router.delete('/:id', async (req, res) => {
    try {
        const removeTodo = await Todo.deleteOne({ _id: req.params.id });
        res.json(removeTodo);
    } catch (err) {
        res.json({ message: err });
    }
})

// edit todo by id
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.updateOne({ _id: req.params.id }, { $set: req.body });
        res.json(updatedTodo);
    } catch (err) {
        res.json({ message: err });
    }
})
// edit title by id
router.patch('/:id/title', async (req, res) => {
    try {
        const updatedTitle = await Todo.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } });
        res.json(updatedTitle);
    } catch (err) {
        res.json({ message: err });
    }
})
// edit description by id
router.patch('/:id/description', async (req, res) => {
    try {
        const updatedDescription = await Todo.updateOne({ _id: req.params.id }, { $set: { description: req.body.description } });
        res.json(updatedDescription);
    } catch (err) {
        res.json({ message: err });
    }
})

// edit done by id
router.patch('/:id/done', async (req, res) => {
    try {
        const updatedDone = await Todo.updateOne({ _id: req.params.id }, { $set: { done: req.body.done } });
        res.json(updatedDone);
    } catch (err) {
        res.json({ message: err });
    }
})



module.exports = router;