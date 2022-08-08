const TodoModel = require('./todo.model');

class TodoService {
    static async getAll() {
        return TodoModel.find();
    }

    static async create({ title, description = '', done = false }) {
        const newTodo = new TodoModel({ title, description, done })
        return newTodo.save();
    }

    static async getOne({ id }) {
        return TodoModel.findById(id);
    }
    
    static async deleteOne({ id }){
        return TodoModel.deleteOne(id);
    }

    static async updateOne({id,changes}){
        return TodoModel.updateOne({id},{$set:{changes}});
    }

    static async updateOneTitleService(id,changes){
        return TodoModel.updateOne(id,changes);
    }

    static async updateOneDescriptionService(id,changes){
        return TodoModel.updateOne(id,changes);
    }

    static async updateOneDoneService(id,changes){
        return TodoModel.updateOne(id, changes);
    }
}
module.exports = TodoService;