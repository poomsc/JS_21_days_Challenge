(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElemInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2020 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        // const daysElem = document.getElementById('days');
        // daysElem.innerText = Math.floor(unixTimeLeft/DAY);
        // const hoursElem = document.getElementById('hours');
        // hoursElem.innerText = Math.floor(unixTimeLeft/HOUR);
        // const minutesElem = document.getElementById('minutes');
        // minutesElem.innerText = Math.floor(unixTimeLeft/MINUTE);

        setElemInnerText('days', Math.floor(unixTimeLeft / DAY))
        setElemInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR))
        setElemInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE))
        setElemInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND))

    }

    function run() {
        setInterval(() => {
            countDown();
        }, SECOND);
    }

    run();
})();