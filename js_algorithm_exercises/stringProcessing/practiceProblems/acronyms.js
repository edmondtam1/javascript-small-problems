function acronym(string) {
  return string.split(/[ \-]/).map(word => {
    return word[0].toUpperCase();
  }).join('');
}

console.log(
  acronym('Portable Network Graphics'), // "PNG"
  acronym('First In, First Out'), // "FIFO"
  acronym('PHP: HyperText Preprocessor'), // "PHP"
  acronym('Complementary metal-oxide semiconductor'), // "CMOS"
  acronym('Hyper-text Markup Language'), // "HTML"
);