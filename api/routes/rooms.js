import express from 'express'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create Room
router.post('/:hotelid', verifyAdmin, createRoom)

//Update room
router.put('/', verifyAdmin, updateRoom)
//Delete Room
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

//GET
router.get('/:id', getRoom)

//Get All rooms

router.get('/', getAllRooms)

export default router