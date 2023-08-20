const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')
let loadNumber = 0

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const intLoading = () => {
    loadNumber++
    loadingText.innerHTML = `${loadNumber}%`
    loadingText.style.opacity = `${scale(loadNumber, 0, 100, 1, 0)}`
    bg.style.filter = `blur(${scale(loadNumber, 0, 100, 30, 0)}px)`

    if(loadNumber > 99) {
        loadNumber = 100
        clearInterval(start)
        return
    }
}
const start = setInterval(intLoading, 30)



    
