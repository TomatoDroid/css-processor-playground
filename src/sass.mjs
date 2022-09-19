import sass from "sass.js";

sass.options({
    style: sass.style.expanded,
})

export function compileSassStr(str) {
  return new Promise((resolve, reject) => {
    sass.compile(str, function (result) {
      if (result.status === 0) {
        resolve(result.text);
      } else {
        reject(result)
      }
    });
  });
}
