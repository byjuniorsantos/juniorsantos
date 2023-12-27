$(document).ready(function() {
  // Adicione um efeito de paralaxe ao título
  var titulo = $("#titulo");
  var alturaJanela = $(window).height();

  titulo.css("transform", "translateY(-" + alturaJanela / 2 + "px)");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    titulo.css("transform", "translateY(" + scroll / 2 + "px)");
  });
});
