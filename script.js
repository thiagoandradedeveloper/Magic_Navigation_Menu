window.onload = () => {
    let itens = document.querySelectorAll('.item');
    let circulo = document.querySelector('.circulo')

    function move(){
        itens.forEach((element,index)=>{
            element.addEventListener('click',()=>{
                for(item of itens){
                    item.classList.remove('active')
                    item.classList.remove('rodar')
                }
                element.classList.add('active')
                element.classList.add('rodar')
                let positionLeft = element.offsetLeft - 13
                circulo.style.left = positionLeft + "px";
            })
        })
    }
    move()
}