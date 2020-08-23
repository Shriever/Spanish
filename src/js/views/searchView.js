import { elements } from "./base";

export const displayWords = (search) => {
  elements.enWord.textContent = search.enWord;
  elements.esWord.textContent = search.translation;
  elements.enDef.textContent = search.enDef;
  //   elements.esDef.textContent = search.esDefinition;
};
