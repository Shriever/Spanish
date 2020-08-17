import Search from "./models/Search";
import { elements } from "./views/base";

const state = {};
// TESTING
window.state = state;

/**
 * Search
 */
elements.search.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get input data
  const query = elements.searchInput.value;
  // Create new search item
  state.search = new Search(query);

  // Get the translation
  state.search.getTranslation();

  // Get the definition
  state.search.getDefinition();
});

state.search = new Search();
