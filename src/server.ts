import expres from "express";
import bodyParser from "body-parser";

const server = expres();
server.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
