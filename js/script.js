
            let colecao = document.getElementById('colecao')
            let pagina1 = document.querySelector('#pagina1')
            let pagina2 = document.querySelector('#pagina2')

            function mudarPag(button){

                if(button.id == 'pagina1'){
                    colecao.style.margin = '0px'
                    pagina1.style.color = '#F44926'
                    pagina1.style.display = 'none'
                    pagina2.style.color = 'white'
                    pagina2.style.display = 'flex'

                }else{
                    colecao.style.marginLeft = '-100%'
                    pagina2.style.color = '#F44926'
                    pagina2.style.display = 'none'
                    pagina1.style.color = 'white'
                    pagina1.style.display = 'block'


                }
            }


let squares = document.querySelectorAll('.square')

squares.forEach(
    (square)=>{
        square.addEventListener('mouseenter',(elemento)=>{
            let projeto = elemento.target.children[0]
            let projetoDescricao = elemento.target.children[1]   

            projeto.classList.toggle('flip')
            projetoDescricao.classList.toggle('flip')

            console.log('foi')
           



            // document.getElementById('2').style.rotate
            
         
        })

        square.addEventListener('mouseleave',(elemento)=>{
            let projeto = elemento.target.children[0]
            let projetoDescricao = elemento.target.children[1]   

            projeto.classList.toggle('flip')
            projetoDescricao.classList.toggle('flip')
        })
})




// let pag1 = document.querySelector('#pag')
// let pag2 = document.querySelector('#pag2')
// let btnPag1 = document.querySelector('#pagina1')
// let btnPag2 = document.querySelector('#pagina2')


// // btnPag1.addEventListener('click', ()=>{

// // })

