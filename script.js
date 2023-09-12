function Salvar(){
    let jogador1 = document.getElementById("nomeInput1").value;
    let jogador2 = document.getElementById("nomeInput2").value;

    localStorage.setItem("jogador1", jogador1)
    localStorage.setItem("jogador2", jogador2)
}





/*function trocaImagem(){
    if (jogador === jogador1){
        imagem = "x"
        UserActivation.click exibir X;
    }

    else{
        imagem = "O"
        UserActivation.click exibir O;
    }
}*/
