Array.prototype.getArray = function() {
  console.log(this)
}

console.log([1,2,3,4].getArray())


Array.prototype.last = function() {
  console.log(this.length)
  if(this.length === 0) return -1
  else return this[this.length - 1]
}

console.log([].last())
