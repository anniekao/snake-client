const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handlerUserInput(key);
  });
  return stdin;
};

const handlerUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };