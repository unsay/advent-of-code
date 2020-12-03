import fs from 'fs'

const subtract = (minuend, subtrahend) => minuend - subtrahend

const multiply = (multiplicand, multiplier) => multiplicand * multiplier

const find = (haystack, needle) => haystack.find(ele => ele === needle)

const clear = (arr) => arr.filter(val => val)

const matchify = (arr, target) => arr.map(num => find(arr, subtract(target, num)))

const product = (arr) => arr.reduce(multiply)

const numberify = (collection) => collection.map(item => Number(item))

const read = (filePath) => fs.readFileSync(filePath)

const arrayify = (string, delimiter='\n') => string.split(delimiter)

const stringify = (buffer) => buffer.toString()

const result = product(clear(matchify(numberify(arrayify(stringify(read(process.argv[2])))), 2020)))
console.log(result)
