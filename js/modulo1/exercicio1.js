// require('../index');

function primeira() {
   var target = document.querySelector('#um');

   var endereco = {
      rua: "Rua dos pinheiros",
      numero: 1293,
      bairro: "Centro",
      cidade: "São Paulo",
      uf: "SP"
      };

   var resultado = 'O usuário mora em '+ endereco.cidade + ' / ' + endereco.uf + ', no bairro' + endereco.bairro +', na rua "'+ endereco.rua +'" com nº ' + endereco.numero;

   target.value = resultado;

   newHeight(target);
}