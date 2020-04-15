(() => {
    // NaN & null
    console.log('NaN')
    console.log('NaN === NaN', NaN === NaN)
    let a = 1 / 'java'
    console.log('let a = 1/"java"; a===a', a === a)
    console.log('Type coercion')
    // type coercion
    console.log('1<2<3', 1 < 2 < 3)
    console.log('3>2>1', 3 > 2 > 1)

    console.log("2-'1' = ", 2 - '1')
    console.log("2+'1' = ", 2 + '1')
    console.log("2+Number.parseInt('1') =", 2 + Number.parseInt('1'))

    console.log('true+true = ', true + true)
    // Interpreter compiler
    console.log('Interpreter compiler')
    function getPerson1() {
        return
        {
            name: 'poom'
        }
    }
    function getPerson2() {
        return {
            name: 'poom'
        }
    }
    console.log(
        `function getPerson1() {
        return 
        {
            name: 'poom'
        }
    }`, getPerson1())
    console.log(
        `function getPerson2() {
        return {
            name: 'poom'
        }
    }`, getPerson2())

    console.log('Chk obj')
    console.log("null === 'object'",typeof null === 'object')
})()
