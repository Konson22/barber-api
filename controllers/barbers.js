
const Barber = require('../models/barber');

const data = [
    {
        name:'Be Smart',
        about:'Some text for about and other info',
        coordinate:{
            lang:'52.5E',
            long:'82.5E',
        },
        services:['Haircut', 'Service one', 'another Service'],
        logo:'https://th.bing.com/th/id/OIP.MWcs-o2WjmTfi8TEyQkC_wHaHu?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        name:'Be Smart',
        about:'Some text for about and other info',
        coordinate:{
            lang:'52.5E',
            long:'82.5E',
        },
        services:['Haircut', 'Service one', 'another Service'],
        logo:'https://th.bing.com/th/id/OIP.gd8fOd1Y1k_YgbyzJZzgPgHaIa?w=162&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        name:'Be Smart',
        about:'Some text for about and other info',
        coordinate:{
            lang:'52.5E',
            long:'82.5E',
        },
        services:['Haircut', 'Service one', 'another Service'],
        logo:'https://th.bing.com/th?id=OIP.nUbdNS0ktXsz5MH_DBof3gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
]


const registerBarbers = async (req, res) => {
    try{
        const barber = new Barber(req.body);
        const newBarber = await barber.save();
        res.status(201).json(newBarber)
    }catch(err){
        
    }
}

const editBarbers = (req, res) => {
    try{
        res.send('all barbers')
    }catch(err){
        
    }
}

async function getAllBarbers(req, res) {
    try {
      // Retrieve all barbers
      const barber = await Barber.find();
      console.log(barber);
      res.json(barber)
    } catch (error) {
      console.error(error);
    }
  }
  
 

const getSingleBarber = (req, res) => {
    try{
        res.send('barbers profile')

    }catch(err){

    }
}


module.exports = { getAllBarbers, getSingleBarber, registerBarbers, editBarbers }

