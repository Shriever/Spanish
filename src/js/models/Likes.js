export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(enWord) {
    this.likes.push(enWord);
    this.updateStorage();
  }
  removeLike(enWord) {
    const index = this.likes.findIndex((el) => el === enWord);

    this.likes.splice(index, 1);
    this.updateStorage();
  }
  isLiked(enWord) {
    return this.likes.includes(enWord) ? true : false;
  }
  updateStorage() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }
  getStorage() {
    return JSON.parse(localStorage.getItem("likes"));
  }
}
