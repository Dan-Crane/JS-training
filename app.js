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
	},
	concat: (array, ...spred) => {
		return array.concat(...spred)
	},
	difference: (array1, array2) => {
		return array1.filter(i => {
			return !array2.find(i2 => i === i2)
		})
	}


}

// console.log([1, 2, 3].forEach(e => console.log(e)))

console.log(myLodash.difference([1, 2, 3, 7, 3, 1, 9], [1, 2, 3, 4, 6]))
console.log(_.difference([1, 2, 3, 7, 3, 1, 9], [1, 2, 3, 4, 6]))

