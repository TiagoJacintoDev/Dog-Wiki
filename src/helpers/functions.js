export function removeWhitespace(name) {
  return name.replace(/ /g, "");
}

export function addWhitespace(name) {
  return name.split(/(?=[A-Z])/).join(" ");
}
