function extraerValueKeyFromObject(object, string) {
  return object[string];
}

console.log(
  extraerValueKeyFromObject(
    { country: 'Sweden', continent: 'Europe' },
    'country',
  ),
);
