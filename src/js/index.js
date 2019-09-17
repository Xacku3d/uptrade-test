const menu = document.querySelector('.menu')
const bg = document.querySelector('.main')
const trade = document.querySelector('.trade')

document.querySelector('.menu__trade').addEventListener('click', () => {
    if (menu.className == 'menu') {
        menu.className = 'menu hidden'
        bg.className = 'main secondBG'
        setTimeout(()=> {
            if (menu.className !== 'menu') {
                trade.className = 'trade container show'
                setTimeout(() => { 
                    trade.style.opacity = '1'
                }, 100)
            }
        }, 500)
    } else {
        menu.className = 'menu'
        bg.className = 'main'
        trade.className = 'trade container'
        trade.style.opacity = '0'
    }
})