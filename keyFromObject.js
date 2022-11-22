function myFunction(a, b) {
  let cont = 0;
  for (prop in a) {
    if (prop == 'b') {
      cont = +1;
    }
  }
  return cont > 0 ? true : false;
}
