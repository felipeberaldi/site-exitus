let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImagem();
}, 8000)

function proxImagem(){
    contador++;
    if(contador>6){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;
}