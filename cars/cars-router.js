const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const cars = await db('cars');
        res.json(cars);
    } catch (err) {
        res.status(500).json({message: "Failed to retrieve fruits"})
    }
})

router.post('/', async (req, res) => {
    try{
        const carData = req.body;
        const [id] = await db('cars').insert(carData);
        const newCarEntry = await db('cars').where({ id });

        res.status(201).json(newCarEntry);
    } catch (err) {
        res.status(500).json({ message: "Failed to add car to the database"})
    }
})

module.exports = router;