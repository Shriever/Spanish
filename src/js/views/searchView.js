import { elements } from "./base";

const clearInput = () => {
  elements.searchInput.value = "";
};

export const displayWords = (search) => {
  elements.enWord.textContent = search.enWord;
  elements.esWord.textContent = search.translation;
  elements.enDef.textContent = search.enDef;
  //   elements.esDef.textContent = search.esDefinition;
  // clear the search field
  clearInput();
};
