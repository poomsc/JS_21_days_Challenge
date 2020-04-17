(() => {
    function createCard(folderName) {
        const link = document.createElement('a')

        let title = folderName
        if (title[0] === "0") {
            title = title.substring(1)
            title = 'Day ' + title[0] + title.substring(1)
        } else {
            title = 'Day ' + title.substring(0, 2) + title.substring(2)
        }
        const text = document.createTextNode(`${title}`)

        link.href = `./${folderName}`
        link.appendChild(text)

        const cardElem = document.createElement('div')
        cardElem.className = `content-block`
        cardElem.appendChild(link)
        return cardElem
    }
    function buildContainer(cards) {
        const container = document.createElement('div')
        container.className = `container`
        cards.map((cardElem) => {
            container.appendChild(cardElem)
        })
        document.body.appendChild(container)
    }
    function run() {
        const folderName = [
            '01 - Falling Snow',
            '02 - Countdown timer',
            '03 - Async Await',
            '04 - Eye Rolling',
            '05 - Watercolor Paint',
            '06 - Duck Hunt',
            '07 - Konami Code',
            '08 - This',
            '09 - Parallax Scalling',
            '10 - Kanban Board',
            '11 - Text Reveal',
            '12 - Air Quality Visualizer',
            '13 - JS weirdPart',
            '14 - Carousel',
            '15 - Music Player',
            '16 - Text to speech'
        ]
        const cards = folderName.map(createCard)
        buildContainer(cards)

        // const testFolder = './../../Project';
        // const fs = require('fs');

        // let fileName = fs.readdirSync(testFolder)
        // console.log(fileName)
    }
    run()
})()