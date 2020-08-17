import axios from "axios";
import translate from "translate";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getTranslation() {
    translate.engine = "google";
    translate.key = "AIzaSyD5a1OfwrrotJv5eIzRP2nut6Zybbj9U2U";
    const res = await translate(this.query, { from: "en", to: "es" });
    console.log(res);
  }

  async getDefinition() {
    const def = await axios(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${this.query}?key=2497dec4-7037-4014-9ac6-4bb671314e87`
    );

    console.log(def.data[0].shortdef[0]);
  }
}
