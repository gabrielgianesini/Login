import axios from "axios";
import { CronJob } from "cron";
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
export function enviaTeste() {
  new CronJob("1 * * * * *", () => console.log("OI")).start();
}
