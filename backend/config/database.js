const mongoose= require('mongoose');
const dbconnect = ()=>{
mongoose.connect(process.env.DATA_BASE)
.then(()=>{console.log("db connected!")})
.catch((error)=>{console.log("error in db connect!");
console.error(error.message);
process.exit(1);});
}

module.exports = dbconnect;