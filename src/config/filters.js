export function normalize (value) {
  if (!value) return '';

  value = value.toString();

  return value.toLowerCase().replace(' ', '-');
};
