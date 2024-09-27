/* ------------------------------------- Importa el modelo -------------------------*/
const User = require('../models/userModels.js')

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(200).json({msg: 'faltan parámetros obligatorios', data: {name, email, password}})
    }

    try{
    //Creo una instancia de la clase User
    const newUser = new User({name, email, password});
    await newUser.save();
    res.status(200).json({msg: 'Usuario creado', data: newUser})
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'Ups tenemos un error', data: {}})
    }

}

const getUser = async(req, res) => {
    const users = await User.find();
    res.status(200).json({msg: 'Ok', data: users});
}

const getUsersById = async(req, res)=>{
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

const deleteUserById = async(req, res)=>{
    const { id } = req.params;
    try{
        const deleteUser = await User.findByIdAndDelete(id);
        if(deleteUser){
            res.status(200).json({msg:'usuario deleteado', data: deleteUser});
        }else{
            res.status(404).json({msg: 'no se pudo deletear qé', data: {}});
        }
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'un error a', data: {}});
    }
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const {name, email, password} = req.body;
    
    try {
        const user = await User.findByIdAndUpdate(id, {name, email, password}, {new: true});
        if(user){
            res.status(200).json({msg: 'usuario actualizado', data: user});
        }else{
            res.status(404).json({msg: 'no se pudo actualizar :p', data: {}});
        }
    }catch(error){
        console.error(error);
        res.status(200).json({msg: 'otro error wtf', data: {}});
    }
}

module.exports = { createUser, getUser, getUsersById, deleteUserById, updateUserById };