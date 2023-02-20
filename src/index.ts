import express from "express";
import statusRoutes from "./routes/status.routes";
import usersRoutes from "./routes/user.routes";


const app = express();

//Applications
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use(usersRoutes);
app.use(statusRoutes);

//Server
app.listen(3000, () => {
    console.log("Running: Port 3000!");
})
