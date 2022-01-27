const allLinks = document.querySelectorAll('.links-li-a')
const allSection = document.querySelectorAll('section')
console.log(allSection);

window.addEventListener('scroll', (e) => {
    let windowtopPoint = document.documentElement.scrollTop
    allSection.forEach(section => {
        if(windowtopPoint > section.offsetTop - section.offsetHeight * 0.3 && windowtopPoint < section.offsetTop + section.offsetHeight *0.3){
            remouveClass()
            addclass(section.id)
        }
    })
})

function remouveClass() {
    allLinks.forEach(link => {
        link.classList.remove('active')
    })
}

function addclass(id) {
   let selector = `.links-li-a[href='#${id}']`
   const link = document.querySelector(selector)
   link.classList.add('active')
}


// menu transition

const menu = document.querySelector('.menu')
const menu_bar = document.querySelectorAll('.menu-bar')
const linkMenu = document.querySelector('.links')
const allLink_A = document.querySelectorAll('.links-li-a')

function bartransition (){
    menu_bar.forEach(bar => {
        bar.classList.toggle('active')
        linkMenu.classList.toggle('active') 
        menu.classList.toggle('active')
    })
}

menu.addEventListener('click', () => {
    bartransition()
})

allLink_A.forEach(link => {
    link.addEventListener('click', () => {
        bartransition()
    })
})

// work more btn

const all_grid_col_work = document.querySelector('.all-grid-work-col');
const viewMoreContainer = document.querySelector('.all-work-view-more')
const viewMoreWork = document.querySelector('.view-more-work')
const closeBtnWork = document.querySelector('.close-Btn')

const imgContainer = document.querySelector('.work-more-img')

const AllMyWorks = [

    {
        imgUrl:'./img/presentation (1).jpg ',
        colNum:'col-1',
        id:1
    },
    {
        imgUrl:'./img/presentation (2).jpg ',
        colNum:'col-2',
        id:2
    },
    {
        imgUrl:'./img/presentation (3).jpg ',
        colNum:'col-3',
        id:3
    },
    {
        imgUrl:'./img/presentation (4).jpg ',
        colNum:'col-4',
        id:4
    },
    {
        imgUrl:'./img/presentation (5).jpg ',
        colNum:'col-5',
        id:5
    },
    {
        imgUrl:'./img/presentation (6).jpg ',
        colNum:'col-6',
        id:6
    },
]


function drowdataUI (work) {
    let workUI = work.map(work => {
        return `
        
        <div class="grid-work-col ${work.colNum}">
            <img src="${work.imgUrl}" alt="">
            <div class="layer-grid">
                <h3 onclick= seeMoreFun(${work.id})>view more</h3>
            </div>
        </div>
        `
    }).join('')
    console.log(workUI);
    all_grid_col_work.innerHTML = workUI
}

drowdataUI(AllMyWorks)

// seeMoreFun

function seeMoreFun(id){
    let WorkClicked = AllMyWorks.find(work => work.id === id)
    console.log(WorkClicked);
    viewMoreContainer.classList.add('active')
    viewMoreWork.classList.add('active')
    imgContainer.innerHTML = `<img src="${WorkClicked.imgUrl}" alt="">`
    document.querySelector('body').classList.add('active')
}

closeBtnWork.addEventListener('click', () => {
    viewMoreContainer.classList.remove('active')
    viewMoreWork.classList.remove('active')
    document.querySelector('body').classList.remove('active')
    viewMoreWork.pageY = 0
})