(() => {
    let currentIndex = 0
    function displayImg(imgElems, newIndex) {
        const lastIndex = imgElems.length - 1
        if (newIndex < 0) {
            newIndex = lastIndex
        } else if (newIndex > lastIndex) {
            newIndex = 0
        }
        const newImg = imgElems[newIndex]
        newImg.scrollIntoView({ behavior: 'smooth' })

        currentIndex = newIndex
    }
    function run() {
        const imgElems = document.querySelectorAll('img')
        const preBtnElem = document.querySelector('.previous')
        const nextBtnElem = document.querySelector('.next')
        preBtnElem.addEventListener('click', () => displayImg(imgElems, currentIndex - 1))
        nextBtnElem.addEventListener('click', () => displayImg(imgElems, currentIndex + 1))
    }
    run()
})()