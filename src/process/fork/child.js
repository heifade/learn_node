process.on("message", msg => {
  switch (msg.type) {
    case "add":
      process.send({
        result: msg.v1 + msg.v2
      });
      break;
    case "close":
      process.disconnect();
      break;
  }
});


console.log('aaa')