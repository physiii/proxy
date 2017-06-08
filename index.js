var proxy = require('redbird')({port: 80});

console.log("Starting proxy");

proxy.register("pyfi.org","http://127.0.0.1:5000");
//proxy.register("demo.pyfi.org", "http://127.0.0.1:5000/test");
proxy.register("dev.pyfi.org", "http://127.0.0.1:5001");
proxy.register("open-automation.org", "http://127.0.0.1:5001");
proxy.register("zackbakermusic.com", "http://127.0.0.1:5003");

