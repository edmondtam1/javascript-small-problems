function cleanUp(str) {
  return str.replace(/([^a-zA-Z]+)/g, ' ');
}

console.log(
  cleanUp("---what's my +*& line?") // " what s my line "
);