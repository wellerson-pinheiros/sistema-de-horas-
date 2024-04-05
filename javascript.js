    function carregar (){
let dados = window.document.getElementById('dados')
let imgs  = window.document.getElementById('imgs') 
       
let data = new Date()
let horas = data.getHours()


        if (horas >= 6 && horas <= 12 ) {
            dados.innerHTML = ' bom dia '
        }   else if ( horas > 12 && horas <=18){
           dados.innerHTML = `agora são exatamente ${data} horas <strong>BOA TARDE</strong> `
            imgs.src = 'imagens/fototarde.jpg'
            background.body.style.background='#b9846f'
        } else{
            dados.innerHTML = `agora são exatamente ! ${data} <strong> BOA NOITE </strong>`
            imgs.src = 'imagens/fotonoite.jpg'
            document.body.style.background =' black'
        }
    }