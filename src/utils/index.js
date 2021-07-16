import * as Storage from "./storage";

export { Storage };

export const noop = () => {};

export { default as saveSession } from "./saveSession";
export { checkJailBroken } from "./jailbreak";
export { isFunc, isNotEmpty } from "./is";

export const removeEmptyKey = (obj) => {
  Object.keys(obj).forEach(function (key) {
    (obj[key] && typeof obj[key] === "object" && removeEmpty(obj[key])) ||
      ((obj[key] === "" || obj[key] === null) && delete obj[key]);
  });
  return obj;
};
