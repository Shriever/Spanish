import Search from "./models/Search";
import Likes from "./models/Likes";
import * as searchView from "./views/searchView";
import * as likesView from "./views/likesView";
import { elements } from "./views/base";

const state = {};
// TESTING
window.state = state;

/**
 * Search
 */

state.search = new Search();
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

  // Display results to UI
  try {
    searchView.displayWords(state.search);
  } catch (err) {
    console.log(err);
  }
  console.log(state.search);
  console.log(state.search.translation);
});

["hashchange", "load"].forEach((e) => {
  window.addEventListener(e, async () => {
    const url = window.location.hash.split("#")[1];
    // Create new search item
    state.search = new Search(url);

    // Get the translation
    await state.search.getTranslation();

    // Get the definition
    await state.search.getDefinition();

    // Display results to UI
    try {
      searchView.displayWords(state.search);
    } catch (err) {
      console.log(err);
    }
  });
});

/**
 * Likes
 */
state.likes = new Likes();

elements.recipe.addEventListener("click", (e) => {
  if (e.target.matches(".recipe__love, .recipe__love *")) {
    if (!state.likes.isLiked(state.search.enWord)) {
      // Add word to likes list
      state.likes.addLike(state.search.enWord);

      // Update UI
      likesView.updateLikes();
      console.log(state.likes);
    } else {
      // Remove word from likes list
      state.likes.removeLike(state.search.enWord);
      // Update UI
      likesView.updateLikes();
    }
  }
});
window.addEventListener("load", () => {
  const likes = state.likes.getStorage();

  likesView.updateLikes(likes);
});
