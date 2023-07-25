const express = require('express');
const router = express.Router();

const { 
    addAppointments, 
    getAllAppointments, 
    getSingleAppointment, 
    editAppointments, 
    deleteAppointment
} = require('../controllers/appointments');

router.get('/', getAllAppointments);
router.get('/appointment', getSingleAppointment);
router.get('/add', addAppointments);
router.get('/edit', editAppointments);
router.get('/delete', deleteAppointment);

module.exports = router;