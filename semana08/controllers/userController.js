/* ------------------------------------- Importa el modelo -------------------------*/
const User = require('../models/userModels.js')

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    //Creo una instancia de la clase User
    const newUser = new User({name, email, password});
    await newUser.save();
    res.status(200).json({msg: 'Usuario creado', data: newUser})
}

const getUser = async(req, res) => {
    const users = await User.find();
    res.status(200).json({msg: 'Ok', data: users});
}

module.exports = {createUser, getUser};