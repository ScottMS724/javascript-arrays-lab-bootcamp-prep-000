function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var morekittens = [name, ...kittens]
  return morekittens
}

function removeLastKitten() {
  kittens.slice(-1)
  var lesskittens = kittens
}