function mapToNegativize(sourceArray) {
  return sourceArray.map(item => item * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(item => item)
}

function mapToDouble(sourceArray) {
  return sourceArray.map(item => item * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(item => item * item)
}

function reduceToTotal(sourceArray, startingPoint) {
    sourceArray.reduce((a, b) => {
      return a + b
    }, 0)
}
