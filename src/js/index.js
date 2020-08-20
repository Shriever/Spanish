import Search from "./models/Search";
import { elements } from "./views/base";

const state = {};
// TESTING
window.state = state;

/**
 * Search
 */
elements.search.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Get input data
  const query = elements.searchInput.value;
  // Create new search item
  state.search = new Search(query);

  // Get the translation
  await state.search.getTranslation();

  // Get the definition
  await state.search.getDefinition();

  console.log(state.search);
  console.log(state.search.translation);
});

state.search = new Search();
