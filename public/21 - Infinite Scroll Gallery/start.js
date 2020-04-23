(() => {
    const KEY = 'ODe-FlQ8KA96EG15K3ykud7PEXkI7uS7vFw78Ulr8Og'
    let page = 0
    const loadElem = document.querySelector('.loader')

    function showLoader() {
        loadElem.classList.add('visible')
    }
    function hideLoader() {
        loadElem.classList.remove('visible')
    }
    async function displayImage() {
        page += 1
        showLoader()

        const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
        const images = await result.json();
        console.log(images)

        const gelleryElem = document.querySelector('.gallery')

        images.forEach(image => {
            const imgElem = document.createElement('img')
            imgElem.src = image.urls.small

            gelleryElem.appendChild(imgElem)
        })

        hideLoader()
        
        console.log(page)
    }
    function onScroll(){
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement
        
        if (scrollTop + clientHeight >= scrollHeight - 10){
            displayImage()
        }
    }
    function run() {
        document.addEventListener('scroll', onScroll)
        displayImage()
    }
    run()
})()