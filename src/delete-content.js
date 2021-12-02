function deleteAllContent(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { deleteAllContent };
