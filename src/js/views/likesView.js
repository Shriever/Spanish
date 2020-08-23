import { elements } from "./base";

export const updateLikes = (likes) => {
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
