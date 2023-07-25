
const addAppointments = (req, res) => {
    try{
        res.send('Add Appointments')
    }catch(err){
        
    }
}


const getAllAppointments = (req, res) => {
    try{
        res.send('all Appointments')
    }catch(err){
        
    }
}

const getSingleAppointment = (req, res) => {
    try{
        res.send('single Appointment')

    }catch(err){

    }
}


const editAppointments = (req, res) => {
    try{
        res.send('Edit Appointments')
    }catch(err){
        
    }
}

const deleteAppointment = (req, res) => {
    try{
        res.send('delete Appointment')

    }catch(err){

    }
}


module.exports = { 
    addAppointments, 
    editAppointments, 
    getAllAppointments, 
    getSingleAppointment, 
    deleteAppointment 
}

