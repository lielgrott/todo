const TodoService = require('./todo.service');

class TodoHandler {
    static async getAllTodos(req, res, next) {
        try {
            const todos = await TodoService.getAll();
            res.json(todos)
        } catch (err) {
            next(err);
        }
    }

    static async createTodo(req, res, next) {
        const { title, description, done } = req.body;
        try {
            res.send(await TodoService.create({ title, description, done }));
        } catch (err) {
            next(err);
        }
    }

    static async getOneTodo(req,res,next){
        const { id } = req.params;
        try{
            const todo = await TodoService.getOne({ id });
            res.json(todo);
        }catch (err){
            next(err);
        }
    }
    static async deleteOneTodo(req,res,next){
        const id = { _id: req.params.id };
        try{
            const removedTodo = await TodoService.deleteOne({ id });
            res.json(removedTodo);
        }catch (err){
            next(err);
        }
    }

    static async updateOneTodo(req,res,next){
        try {
            const updatedTodo = await TodoService.updateOne(req.params.id , req.body );
            res.json(updatedTodo);
        } catch (err) {
            next(err);
        }
    }

    static async updateOneTitle(req, res,next){
        try {
            const updatedTitle = await TodoService.updateOneTitleService({ _id: req.params.id }, {$set:{title:req.body.title}});
            res.json(updatedTitle);
        } catch (err) {
            next(err);
        }
    }

    static async updateOneDescription(req, res,next){
        try {
            const updatedDescription = await TodoService.updateOneDescriptionService({ _id: req.params.id }, {$set:{description:req.body.description}});
            res.json(updatedDescription);
        } catch (err) {
            next(err);
        }
    }

    static async updateOneDone(req, res,next){
        try {
            const updatedDone = await TodoService.updateOneDoneService({ _id: req.params.id }, {$set:{done:req.body.done}});
            res.json(updatedDone);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TodoHandler;