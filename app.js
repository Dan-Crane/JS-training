const _ = {
	chunk: (array, number) => {
		return [
			array.slice(0, number),
			array.slice(number)
		]
	}
}

const a = [0, 1, 2, 3, 4]
const b = ['test-0', 'test-1', 'test-2', 'test-3', 'test-4']

console.log(_.chunk(b, 2))
