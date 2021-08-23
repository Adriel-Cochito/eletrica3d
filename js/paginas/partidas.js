
var iframePartida = new Array()
iframePartida[0] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd968561b6b26919c4f92?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';
iframePartida[1] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd9687d221b5fe71e4ef0?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';
iframePartida[2] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd968f789ddda55f7bdf5?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';

var descricaoPartida = new Array()
descricaoPartida[0] = "É uma partida simples, com botões Liga e Desliga, além de outros componentes de proteção";
descricaoPartida[1] = "É uma partida direta com reversão. A reversão neste caso só ocorre após o desligamento do equipamento, para que o motor gire no sentido oposto";
descricaoPartida[2] = "É uma partida Estrela-triângulo. O motor é iniciado com fechamento das bobinas em Estrela, para diminuir a tensão e corrente de pico na partida, e depois de temporizado muda automaticamente para Triângulo, para potência nominal";


const lista_partidas = [
    { id: 1, nome: 'Partida direta', link: iframePartida[0], descricao: descricaoPartida[0], diagrama: "pd_dg" },
    { id: 2, nome: 'Partida direta com reversão Intercalada', link: iframePartida[1], descricao: descricaoPartida[1], diagrama: "pd_rev_intercalada_dg"  },
    { id: 3, nome: 'Partida estrela triângulo temporizada', link: iframePartida[2], descricao: descricaoPartida[2], diagrama: "part_estrela_triangulo_temp"  }
];

var partidas = new Array();
var menuTitulos = new Array();
var r1;
var r2;
var saida;

function onBtnClickedPartidas(id) {
    /* class="card-img-top" */
    saida = '<div class="card mb-3" id="card-partidas">' +
        '<div class="card-body">' +
        '<h3 class="card-title">' + lista_partidas[id-1].nome + '</h3>' +
        '<p class="card-text"><b> Descrição: </b>' + lista_partidas[id-1].descricao + '</p>' + 
        /* '<div class="diagrama"><h5> Diagrama:</h5> <img  src="img/diagramas/pd_dg.jpg" class="card-img" alt="..."></div>'+ */
        ' <h5> Diagrama:</h5> <object class="diagrama_pdf" data="img/diagramas/'+ lista_partidas[id-1].diagrama+'.pdf" type="application/pdf">' +
            '<div class="diagrama_img"> <img  src="img/diagramas/'+ lista_partidas[id - 1].diagrama+'.jpg" class="card-img" alt="..."></div>'+
        '</object>'+
        '<p><b> Dicas: </b></p> <p> - Clique 2 vezes no componente que deseja ver melhor para girar a câmera em seu redor</p> <p>- Visualize em tela cheia</p>' +
        '<h5>Visualização 3D:</h5>' + lista_partidas[id - 1].link +
        '<h3 class=""></h3>' +
/*         '<h5 class="card-title">' + lista_partidas[id-1].nome + '</h5>'+
        '<p class="card-text"><b> Descrição: </b>' + lista_partidas[id-1].descricao + '</p>' + */
        '</div></div></div>'

    document.getElementById('r1').innerHTML = saida;
};

for (let i = 0; i < lista_partidas.length; i++) {
    menuTitulos[i] = '<a class="dropdown-item" href="#" onclick="onBtnClickedPartidas(' + lista_partidas[i].id + ')">' + lista_partidas[i].nome + '</a>'

}

document.getElementById('menu-partidas').innerHTML = '<div class="dropdown">' +
    '<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    'Escolha o tipo de partida </a>' +
    '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">' +
    menuTitulos.join('') + '</div></div>'
