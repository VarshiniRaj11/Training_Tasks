// Set up mongoose connection
var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://varshiniraj0111:UehFUifsRAyTD4Wn@cluster0.c86tefb.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('Connected')
}
