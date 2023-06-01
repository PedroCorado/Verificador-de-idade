const anoAtual = new Date().getFullYear()
var sexo = document.getElementsByName('sexo')
const descricao = document.getElementById('descricao')
var idade = document.getElementById('idade')
const imagem = document.getElementById('imagem')
function clickar(){
    if(idade.value == 0 || idade.value < 1900){
        alert('Idade ou opererção invalida')
    }
    else if(sexo[0].checked){
            var calculo = anoAtual - Number(idade.value)
            descricao.innerText = `Voce e mulher , e sua idade é ${calculo}`
            if (Number(idade.value) > anoAtual){
                alert('Voce digitou uma idade invalida')
                descricao.innerText = ''
                imagem.src = ''
            }
            else if(calculo < 10){
                imagem.src = 'imagens/mulherCriança.png'
            }
            else if(calculo >= 10 && calculo <= 20){
                imagem.src = 'imagens/mulherAdolescente.png'
            }
            else if(calculo > 20 && calculo <= 65){
                imagem.src = 'imagens/mulherAdulta.png'
            }
            else if(calculo > 65){
                imagem.src = 'imagens/mulherIdosa.png'
            }
        }
        else if(sexo[1].checked){
            var calculo = anoAtual - Number(idade.value)
            descricao.innerText = `Voce e homem , e sua idade é ${calculo}`
            if (Number(idade.value) > anoAtual){
                alert('Voce digitou uma idade invalida')
                descricao.innerText = ''
                imagem.src = ''
            }
            else if(calculo < 10){
                imagem.src = 'imagens/homemCriança.png'
            }
            else if(calculo >= 10 && calculo <= 20){
                imagem.src = 'imagens/homemAdolescente.png'
            }
            else if(calculo > 20 && calculo <= 65){
                imagem.src = 'imagens/homemAdulto.png'
            }
            else if(calculo > 65){
                imagem.src = 'imagens/homemIdoso.png'
            }
        }
    }