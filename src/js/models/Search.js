import axios from "axios";
import translate from "translate";
import { key } from "./ApiKey";

export default class Search {
  constructor(enWord) {
    this.enWord = enWord;
  }
  async getTranslation() {
    translate.engine = "google";
    translate.key = key;
    const res = await translate(this.enWord, { from: "en", to: "es" });

    this.translation = res;
    return res;
  }

  async getDefinition() {
    const res = await axios(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${this.enWord}?key=2497dec4-7037-4014-9ac6-4bb671314e87`
    );
    const resSpanish = await axios(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${this.translation}?key=2497dec4-7037-4014-9ac6-4bb671314e87`
    );
    try {
      this.enDef = res.data[0].shortdef[0];
      // this.esDefinition = resSpanish.data[0].shortdef[0];
      console.log(resSpanish);
    } catch (err) {
      console.log(err);
    }

    return this.enDef;
  }
}
