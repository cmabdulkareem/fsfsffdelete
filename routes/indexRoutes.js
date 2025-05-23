import express from "express";
import database from '../MOCK_DATA.json' with {type: "json"}
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from 'fs'

const router = express.Router()
const dataPath = path.join(__dirname, '../MOCK_DATA.json')

router.post('/', (req, res)=>{
    const newData = req.body

    database.push({id: database.length+1, ...newData})

    fs.writeFile(dataPath, JSON.stringify(database), (err)=>{
        if(err){
            res.json({message: "data updation failed"})
        }else{
            res.json({message: "data updated succesfully"})
        }
    })
})

router.get('/', (req, res)=>{
    res.json(database)
})

router.get('/:name', (req, res)=>{
    const name = req.params.name
    const foundItem = database.find(item => item.full_name === name)
    res.json(foundItem)
})

export default router