(() => {
    function createCard(folderName) {
        const link = document.createElement('a')

        let title = folderName
        if (title[0] === "0") {
            title = title.substring(1)
            title = '[Day ' + title[0] + '] ' + title.substring(1)
        } else {
            title = '[Day ' + title.substring(0, 2) + '] ' + title.substring(2)
        }
        const text = document.createTextNode(`${title}`)

        link.href = `./../${folderName}/index.html`
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
            '01Falling_Snow',
            '02Countdown_timer',
            '03Async_Await',
            '04Eye_rolling', 
            '05Paint',
            '06Duck_hunt'
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