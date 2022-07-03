let NUMEROS_SIMBOLOS = []

// adicionar ao armazenamento 
function addNumerosSimbolos()
{
    num_sim = document.getElementById('num_sim').value
    significado = document.getElementById('sign').value

    if (num_sim == '' || significado == '') 
    {
        document.getElementById('alerta').innerHTML = "<font color='red'>Preencha todos os campos!</font>"
    } else 
    {
        document.getElementById('alerta').innerHTML = "<font color='green'>Registrado com sucesso! </font>"
   
        if (localStorage.getItem('NUMEROS_SIMBOLOS') != null) {
            NUMEROS_SIMBOLOS = JSON.parse(localStorage.getItem('NUMEROS_SIMBOLOS'))
        }
        document.getElementById('num_sim').value = ''
        document.getElementById('sign').value = ''
    }
} 