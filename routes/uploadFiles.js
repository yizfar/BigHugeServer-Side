const express = require("express");
const router = express.Router();

router.get("/", (req,res) => { 
  res.json({msg:"Upload files"})
})

router.post("/", async(req,res) => {

  let fileInfo = req.files?.my_file;
  console.log(fileInfo)
  if(!fileInfo){
    return res.status(400).json({err_msg:"You need to send file"})
  }
  // check the size of the file that not more than 5 MB
  if(fileInfo.size >= 1024*1024 * 5){
    return res.status(400).json({err_msg:"File too big ,file need to be maximum 5mb"})
  }
  // mv - upload the file 
  fileInfo.mv("public/images/"+fileInfo.name , (err) => {
    if(err){
      console.log(err)
      return res.status(400).json({err_msg:"There problem, try again later"})
    }
    res.json({msg:"Upload success"})
  })
})


module.exports = router;
