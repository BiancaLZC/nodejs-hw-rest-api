const app = require("./app");
const conection = require("./db.js");
const dotenv = require("dotenv");
dotenv.config();

const startServer = async () => {
  try {
    await conection();
    app.listen(3000, () => {
      console.log("Server is running. Use our Api on port: 3000");
    });
  }
  catch (error) {
    console.log("Server not running.")
    process.exit(1);
  }   
    
  };

  startServer();
