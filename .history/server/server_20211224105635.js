const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT || 5000, console.log(`server running on ${PORT}`));
