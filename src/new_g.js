export default function* gen(){
  var a = yield 2
  a = yield 3
  return a
}
