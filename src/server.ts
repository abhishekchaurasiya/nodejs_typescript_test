import express from 'express';
import "dotenv/config";


const port = 4040
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})


