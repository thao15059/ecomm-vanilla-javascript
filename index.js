require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");

const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cookieSession({
    keys: [process.env.SESSION_KEY],
  })
);

app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);

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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
