import { elements } from "./base";

const clearLikes = () => {
  elements.likesList.innerHTML = "";
};

export const updateLikes = (likes) => {
  clearLikes();
  likes.forEach((el) => {
    const markup = `
    <li>
        <a class="likes__link" href="#${el}">
            <div class="likes__data">
                <h4 class="likes__name">${el}</h4>
            </div>
        </a>
    </li>
    `;
    elements.likesList.innerHTML += markup;
  });
};
