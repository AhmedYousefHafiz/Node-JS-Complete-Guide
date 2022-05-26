const express = require("express");

const app = express();
const feedsRoute = require("./routes/feeds");

app.use("/feed", feedsRoute);
app.listen(3000);






////////////////////
// const express = require("express");
// const bodyParser = require("body-parser");
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const rootDir = require('./util/path');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// const port = 3000;
// app.use('/admin',adminRoutes);
// app.use(shopRoutes);
// app.use((req,res,next)=>{
//   res.status(404).sendFile(path.join(rootDir,'views','404.html'));
// });

// // const server = http.createServer(app);
// // server.listen(port);
// //replace the above code with the bellow

// app.listen(port);
