const jwt = require('jsonwebtoken');

var authmdlw= async(req,res,next)=>{
    try{
        var tken=req.headers.tken
        if(!tken)res.status(401).json({msg:"not authorized"})
        else {
            var vtkn=jwt.verify(tken,process.env.JWT_TKN)
            req.userID=vtkn.id
            console.log(req.userID)
            next()
        }
    }catch{
res.status(500).json({msg:"something went wrong",error:error.message})
    }
    
}

