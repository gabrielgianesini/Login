"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviaTeste = void 0;
const cron_1 = require("cron");
/*
class axio {
  async send() {
    await axios
      .get("http://172.25.95.75:5555/teste")
      .then((response) => console.log(response.status))
      .catch((error) => console.log(error));
  }
   for (let i = 0; i < 10000; i++) {
    new axio().send();
  }
}
 */
function enviaTeste() {
    new cron_1.CronJob("1 * * * * *", () => console.log("OI")).start();
}
exports.enviaTeste = enviaTeste;
