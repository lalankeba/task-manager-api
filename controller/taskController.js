const taskSchema = require('../schema/taskSchema');

const getTasks = async (req, res) => {
    try {
        const tasks = await taskSchema.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskSchema.findById(id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: `Task cannot be found for id: ${id}` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const createdTask = await taskSchema.create({ title, description, status });
        res.status(201).json(createdTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskSchema.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: `Cannot update task for id: ${id}` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskSchema.findByIdAndDelete(id);
        if (deletedTask) {
            res.status(200).json(deletedTask);
        } else {
            res.status(404).json({ message: `Cannot delete task for id: ${id}` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }
