const userAuth = (req,res,next) =>{

    const {username, email, password} = req.body;

    if(username && email && password){
        next();
    }else{
        res.send("invalid user");
    }

}

const isAuth = (req,res,next)=>{
    let {user} = req.cookies; 

    if(user){
        next();
    }else{
        return res.redirect('/login');
    }
}

module.exports = {userAuth, isAuth };