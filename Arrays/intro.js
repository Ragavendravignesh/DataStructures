const strings = ['a', 'b', 'c', 'd', 'e']

strings.push('f') // O(1)
strings.push('g') // O(1)

strings.pop()  // O(1)

strings.unshift('x')  // O(n)

strings.splice(2, 0, 'ragav') // O(n)

console.log(strings)