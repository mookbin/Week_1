const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();
rl.on("line", function (line) {
  console.log("input: ", line);
  switch (line) {
    case "quit":
      rl.close();
    default:
      rl.prompt();
  }
});
rl.on("close", function () {
  process.exit();
});
