import db from '../db';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        //destructure b/c of stored procedure data structure
        const [users] = await db.users.all();
        res.json(users);
    } catch (error) {
        console.log('users router error: ' + error.message);
        res.status(500).json({error: error.message})
    }
});

router.post('/', async (req, res) => {
    try {
        const userDTO = req.body;
        const result = await db.users.insert(userDTO)
        res.json(result);
    } catch (error) {
        console.log('users router error: ' + error.message);
        res.status(500).json({error: error.message})
    }
})

export default router;