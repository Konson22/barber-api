const User = require("../models/user");


const registerUser = async (req, res) => {
    try {
        const barber = await User.find();
        console.log(barber);
        res.json(barber)
      } catch (error) {
        console.error(error);
    }
}

const editUser = (req, res) => {
    try{
        res.send('register user')
    }catch(err){
        
    }
}

const deleteUser = (req, res) => {
    try{
        res.send('register user')
    }catch(err){
        
    }
}

const getAllUsers = async (req, res) => {
    try{
        // const barber = await User.find();
        // res.json(barber)
        res.json({msg:'all users'})
    }catch(err){
        res.json(err)
    }
}

const getUserProfile = (req, res) => {
    try{
        res.send('user profile')

    }catch(err){

    }
}


module.exports = { getAllUsers, getUserProfile, editUser, registerUser, deleteUser }

