const Task = require('../models/taskModels.js');
const User = require('../models/userModels.js');

const createTask = async (req, res) => {
    const { description, userId} = req.body;

    if(!description || !userId){
        res.status(200).json({msg: 'faltan parámetros obligatorios', data: {description, user: user._id}})
    }

    try{
    const user = await User.findById(userId);
    
    const newTask = new Task({description, user: user._id});
    await newTask.save();
    res.status(200).json({msg: 'Tarea creada', data: newTask})
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'Ups tenemos un error', data: {}})
    }

}

const getTask = async(req, res) => {
    const tasks = await Task.find().populate('Users');
    res.status(200).json({msg: 'Ok', data: tasks});
}

const getTaskByUsersId = async(req, res)=>{
    const { id } = req.params;
    try{
        const user = await User.findById(id);
        if(user){
            res.status(200).json({msg: 'to bien', data: user});
        }else{
        res.status(404).json({msg: 'no se encontró el id', data: user});
        }
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'Ups tenemos un error', data: {}})
    }
}

const deleteTaskById = async(req, res)=>{
    const { id } = req.params;
    try{
        const task = await Task.findByIdAndDelete(id);
        if(task){
            res.status(200).json({msg:'usuario deleteado', data: task});
        }else{
            res.status(404).json({msg: 'no se pudo deletear qé', data: {}});
        }
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'un error a', data: {}});
    }
}

const updateTaskById = async (req, res) => {
    const { id } = req.params;
    const {description} = req.body;
    
    try {
        const task = await Task.findByIdAndUpdate(id, {description}, {new: true});
        if(task){
            res.status(200).json({msg: 'usuario actualizado', data: task});
        }else{
            res.status(404).json({msg: 'no se pudo actualizar la tarea :p', data: {}});
        }
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'otro error wtf', data: {}});
    }
}

module.exports = { createTask, getTask, getTaskByUsersId, deleteTaskById, updateTaskById };