const { performance } = require('perf_hooks')
const nemo = ['remo', 'demo', 'nemo']

const large = new Array(100).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log('found', array[i])
  }
  let t1 = performance.now()

  console.log('It took', t1 - t0, 'milliseconds to run.')
}

findNemo(large)

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === 'nemo') console.log('Found NEMO!')
  })
}

findNemo2(nemo)

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === 'nemo') console.log('Found NEMO!')
  }
}

findNemo3(nemo)
