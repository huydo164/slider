var showImage = document.querySelector('.img')
var listImage = document.querySelectorAll('.list-img li a img')
var ElementNodeLi = document.querySelectorAll('.list-img li')
var boxListImage = document.querySelector('.list-img')
var ulElementNode = document.querySelector('.list-img ul')
var numberShow = 4

if(listImage.length > 0) {
    let position = 0
    let count = 0
    let height = ElementNodeLi[0].offsetHeight
    let totalHeight = parseInt(height * numberShow)
    showImage.src = listImage[0].src
    listImage[0].classList.add('active')
    boxListImage.style.height = totalHeight + 'px'
    
    function slider(n,c) {
        showImage.src = listImage[n].src
        for (let i = 0; i < listImage.length; i++) {
            listImage[i].classList.remove('active')
        }

        ulElementNode.style.transform = `translateY(${-c}px)`
        listImage[n].classList.add('active')
    }

    function next(){
        position++
        
        if(position > numberShow - 1) {
            count += height
        }
        if(position > listImage.length -1) {
            position = 0
            count = 0
        }
        slider(position, count)
    }

    function prev(){
        position--
        let clickPrev = ulElementNode.offsetHeight - totalHeight
        if(position < 0) {
            position = listImage.length -1
            count -= clickPrev
        }
        slider(position, -count)
    }
}