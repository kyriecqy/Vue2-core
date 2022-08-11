export const def = function(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: false,
    writable: true,
    configurable: true
  })
}