const cores = {
    verde: "green",
    azul: "blue",
    vermelho: "red"
}


function EscolherCor(cor) {
    const corAtual = cores[cor];

    var CorAntiga = document.getElementById("anuncio__tenis").className;
    document.getElementById("anuncio__tenis").removeAttribute("class", CorAntiga);
    document.getElementById("anuncio__tenis").setAttribute('class', corAtual );

    var BgAntiga = document.getElementById("background").className;
    document.getElementById("background").removeAttribute("class", BgAntiga);
    document.getElementById("background").setAttribute('class', 'bg-'+corAtual );

    document.getElementsByClassName("anuncio__carrinho")[0].setAttribute('style', 'background-color:' + corAtual);

}

var header = document.getElementById("anuncio__container___tamanhos");
var btns = header.getElementsByClassName("tamanho--config");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("anuncio__container___cores");
var btns = header.getElementsByClassName("cores--config");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("cores--config-active");
  current[0].className = current[0].className.replace(" cores--config-active", "");
  this.className += " cores--config-active";
  });
}