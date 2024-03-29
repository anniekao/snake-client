let connection;

const setupInput = function(conn) {
  connection = conn;
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

  switch (key) {
  case "w":
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "t":
    connection.write("Say: Wooo!", () => {});
    break;
  case "x":
    connection.write("Say: Holy crow!", () => {});
  }
  
};

module.exports = { setupInput };