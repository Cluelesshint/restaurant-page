function deleteContent() {
  const bigContent = document.getElementById("big-content");
  const foot = document.querySelector(".footer");
  bigContent.remove();
  foot.remove();
}
export { deleteContent };
