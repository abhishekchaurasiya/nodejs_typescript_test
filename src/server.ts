import express, { Application } from 'express';
import "dotenv/config";

const port: string = String(process.env.PORT);
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

