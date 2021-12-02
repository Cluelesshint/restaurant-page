function deleteContent() {
  const bigContent = document.getElementById("big-content");
  const foot = document.querySelector(".footer");
  const head = document.getElementById("grab");
  bigContent.remove();
  foot.remove();
}
export { deleteContent };
