const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'DONE'], default: 'PENDING' }
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('tasks', taskSchema);
