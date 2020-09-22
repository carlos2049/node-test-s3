import app from "./app";
import dotenv from 'dotenv';

dotenv.config()


const port = process.env.PORT || 6000;



app.listen(port, () => {

  console.log("server on port", port);
});