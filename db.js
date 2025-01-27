const mongoose = require("mongoose");

const conection = async () => {
    try {
        await mongoose.connect(process.env.url)
          
            
        console.log("Database connection successful");
        
    } catch (error) {
        console.error("Database connection error", error);
        throw error;
        
    }
};
module.exports = conection;