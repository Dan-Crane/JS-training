const myLodash = {
	chunk: (array, number) => {
		return [
			array.slice(0, number),
			array.slice(number)
		]
	},
	compact: (array) => {
		return array.reduce((acc, value, index) => {
			if (value) {
				return acc.concat(value)
			}
			return acc
		}, [])
	}
}

const a = [0, 1, 2, 3, 4, '', false, 'oeua', 2, null, undefined]
const a2 = [0, 1, 2, 3, 4, 2,]
const b = ['test-0', 'test-1', 'test-2', 'test-3', 'test-4']

console.log(myLodash.chunk(b, 2))

console.log(myLodash.compact(a))
