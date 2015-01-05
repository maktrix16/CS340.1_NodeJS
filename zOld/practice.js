var s = "/styles/style.css";
// if (s.match(/styles/*) && s.match(/\*.css/)) {
//   console.log(s);
// }


if (s.match(/\/styles\/.*/) && s.match(/.*\.css/)) {
  console.log(s);
}

