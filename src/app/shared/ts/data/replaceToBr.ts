export function replaceToBr(content) {
  let string = content;
  string = string.replace(/\r\n/g, '<br>');
  string = string.replace(/\n/g, '<br>');
  return string;
}