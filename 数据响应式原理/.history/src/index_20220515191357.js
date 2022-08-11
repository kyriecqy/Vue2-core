let obj = {}

Object.defineProperty(obj, 'a', {
  value: 123
})

Object.defineProperty(obj, 'b', {
  value: 456,
  writable: true
})

console.log(obj);

obj.a ++
obj.b ++
console.log(obj);