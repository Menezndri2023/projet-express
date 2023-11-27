const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000;


// creation de middleware pour gerer les demandes 

const OpenAndClose = (req,res,next) => {
    const DateActuel = new Date();
    const HeureActuel = DateActuel.getHours()
    if(DateActuel >= 1 || DateActuel <= 27 && HeureActuel >= 9 && HeureActuel <= 17 ){
        next()
        } else{
            res.send("Vous n'etes pas autoriser a acceder au site")
    }
}
app.use(OpenAndClose)

// creation de routes

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,'/ficher/home.html'))
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,'/ficher/contact-us.html'))
})
app.get("/service",(req,res)=>{
    res.sendFile(path.join(__dirname,'/ficher/service.html'))
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});