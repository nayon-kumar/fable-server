const express = require("express")
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const url = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db('admin').command({ ping: 1 });
    const db = client.db("fable");
    const bookCollection = db.collection("books");

    app.get("/api/books", async (req, res) => {
        
    });


    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) =>{
    res.send("Hello world!")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})