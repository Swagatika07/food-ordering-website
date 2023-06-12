const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));

const PORT = process.env.PORT || 8080;

//mongodb connection
console.log(process.env.MONGODB_URI);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//model
const userModel = mongoose.model("user", userSchema);
// await userModel.createCollection();

app.get("/", (req, res) => {
  res.send("Server is running");
});

//signup api

app.get("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  //  userModel.findOne({email:email},(err,result)=>{
  //     console.log(result)
  //     console.log(err);
  //  })

  //     userModel.findOne({ email: email }, (err, result) => {
  //       // console.log(result);
  //       console.log(err);
  //       if (result) {
  //         res.send({ message: "Email id is already register"});
  //       } else {
  //         const data = userModel(req.body);
  //         const save = data.save();
  //         res.send({ message: "Successfully sign up"});
  //       }
  //     });
  //   });
  try {
    const userData = await userModel.findOne({ email: email });
    if (!userData) {
      const data = userModel(req.body);
      const save = await data.save();
      res.send({ message: "Registered successfully", alert: true });
    } else {
      res.send({ message: "Email id is already registered", alert: false });
    }
  } catch (err) {
    console.log(err);
  }
});

//login api
app.get("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {
    const userData = await userModel.findOne({ email: email });
    console.log(userData);
    if (userData) {
      const data = userModel(req.body);
      console.log(data);
      // console.log(userData);
      const dataSend = {
        _id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        image: userData.image,
      };
      console.log(dataSend);
      if (data.password === dataSend.password) {
        res.send({
          message: "Login is successfully",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Invalid password",
        });
      }
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
  calories: Number,
});
const productModel = mongoose.model("product", schemaProduct);
// await productModel.createCollection();

//save product in data
//api
app.get("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Uploaded successfully" });
});

//,{ "_id" : 0, "visitor_localdate" : 1 }).sort({ "visitor_localdate" : -1 }
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => console.log("Server is running at port : " + PORT));
