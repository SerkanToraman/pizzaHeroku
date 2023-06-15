const express = require('express');
const router = express.Router();


//Task 1 [GET] /api/posts
router.get("/user", async (req,res) => {
  try {

    res.json({message:"Enter User Name"})
  
    
  } catch (error) {
      res.status(500).json({message: "Gönderiler alınamadı"})
  }
})

module.exports = router; 