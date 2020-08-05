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
    sourceArray.reduce(function(a, b) {
      a + b
    }, 0)
    return a
}
