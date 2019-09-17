const menu = document.querySelector('.menu')
const bg = document.querySelector('.main')
const trade = document.querySelector('.trade')
const arrow = document.querySelector('.arrow')

document.querySelector('.menu__trade').addEventListener('click', () => {
    if (menu.className == 'menu') {
        menu.className = 'menu hidden'
        bg.className = 'main secondBG'
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (menu.className !== 'menu') {
                trade.className = 'trade container show'
                trade.style.opacity = '1'
                arrow.className = 'arrow rotated icon'
            }
        } else {
            setTimeout(() => {
                if (menu.className !== 'menu') {
                    trade.className = 'trade container show'
                    setTimeout(() => {
                        trade.style.opacity = '1'
                    }, 100)
                }
            }, 1000)
        }
    } else {
        menu.className = 'menu'
        bg.className = 'main'
        trade.className = 'trade container'
        trade.style.opacity = '0'
        arrow.className = 'arrow icon'
    }
})