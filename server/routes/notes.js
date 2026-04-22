const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});
router.get('/:id',async(req,res)=>{
  try{
    const note = await Note.findById(req.params.id);
    if(!note){
      return res.status(404).json({error:"Note not found"});
    }
     return res.status(200).json(note); 
    
  }
  catch(err){
    return res.status(500).json({error:"server error"});
  }
 
});

module.exports = router;
