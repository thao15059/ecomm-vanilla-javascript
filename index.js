const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" type="email" placeholder="Email" />      
        <input name="password" type="password" placeholder="Password" />      
        <input name="passwordConfirmation" type="password" placeholder="Password Confirmation" />
        <input type="submit" value="Sign Up" /> 
      </form>
    </div>
  `);
});

// const bodyParser = (req, res, next) => {
//   if (req.method !== "POST") {
//     next();
//   }

//   req.on("data", (data) => {
//     const parsed = data.toString("utf8").split("&");
//     const formData = {};
//     for (let pair of parsed) {
//       const [key, value] = pair.split("=");
//       formData[key] = value;
//     }
//     req.body = formData;
//     next();
//   });
// };

app.post("/", (req, res) => {
  console.log("Form data ", req.body);
  res.send("Account created!!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
