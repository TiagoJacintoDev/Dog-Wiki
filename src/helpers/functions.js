export function removeWhitespace(name) {
  return name.replace(/\s/g, "");
}

export function addWhitespace(name) {
  return name.split(/(?=[A-Z])/).join(" ");
}
