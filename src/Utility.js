export const ParseWhen = (when) => {
  let date = new Date(Number(when));
  const day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        seconds = date.getSeconds();
  const dateString = `${day < 10 ? '0' + day : day}.${
                        month < 10 ? '0' + month : month}.${
                        year} в ${
                        hours < 10 ? '0' + hours : hours}:${
                        seconds < 10 ? '0' + seconds : seconds}`;
  return dateString;
}
