
var iframePartida = new Array()
iframePartida[0] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd968561b6b26919c4f92?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';
iframePartida[1] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd9687d221b5fe71e4ef0?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';
iframePartida[2] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH56a43QTfd62c1cd968f789ddda55f7bdf5?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';
iframePartida[3] = '<div class="card-img-top" > <iframe src="https://myhub.autodesk360.com/ue2c73da7/shares/public/SH9285eQTcf875d3c539267719884d6121c1?mode=embed"' +
    'width="100%" height="500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> </div';

var descricaoPartida = new Array()
descricaoPartida[0] = "É uma partida simples, com botões Liga e Desliga, além de outros componentes de proteção";
descricaoPartida[1] = "É uma partida direta com reversão. A reversão neste caso só ocorre após o desligamento do equipamento, para que o motor gire no sentido oposto";
descricaoPartida[2] = "É uma partida Estrela-triângulo. O motor é iniciado com fechamento das bobinas em Estrela, para diminuir a tensão e corrente de pico na partida, e depois de temporizado muda automaticamente para Triângulo, para potência nominal";
descricaoPartida[3] = "É uma partida que utiliza um CLP para controlar o motor e a sinalização do circuito";


const lista_partidas = [
    { id: 1, nome: 'Partida direta', link: iframePartida[0], descricao: descricaoPartida[0], diagrama: "pd_dg" },
    { id: 2, nome: 'Partida direta com reversão Intercalada', link: iframePartida[1], descricao: descricaoPartida[1], diagrama: "pd_rev_intercalada_dg"  },
    { id: 3, nome: 'Partida estrela triângulo temporizada', link: iframePartida[2], descricao: descricaoPartida[2], diagrama: "part_estrela_triangulo_temp"  },
    { id: 4, nome: 'Partida direta com CLP', link: iframePartida[3], descricao: descricaoPartida[3], diagrama: "partida_direta_clp"  }
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
        '<h3 class="card-title">' + lista_partidas[id - 1].nome + '</h3>' +
        '<p class="card-text"><b> Descrição: </b>' + lista_partidas[id - 1].descricao + '</p>' +
        /* '<div class="diagrama"><h5> Diagrama:</h5> <img  src="img/diagramas/pd_dg.jpg" class="card-img" alt="..."></div>'+ */
        ' <h5> Diagrama:</h5> <object class="diagrama_pdf" data="img/diagramas/' + lista_partidas[id - 1].diagrama + '.pdf" type="application/pdf">' +
        '<div class="diagrama_img"> <img  src="img/diagramas/' + lista_partidas[id - 1].diagrama + '.jpg" class="card-img" alt="..."></div>' +
        '</object>' +
        '<p><b> Dicas: </b></p> <p> - Clique 2 vezes no componente que deseja ver melhor para girar a câmera em seu redor</p> <p>- Visualize em tela cheia</p>' +
        '<h5>Visualização 3D:</h5>' + lista_partidas[id - 1].link +
        '<h3 class=""></h3>' +
        /*         '<h5 class="card-title">' + lista_partidas[id-1].nome + '</h5>'+
                '<p class="card-text"><b> Descrição: </b>' + lista_partidas[id-1].descricao + '</p>' + */
        '</div></div></div>'

    document.getElementById('r1').innerHTML = saida;
};

// for (let i = 0; i < lista_partidas.length; i++) {
//     menuTitulos[i] = '<a class="dropdown-item" href="#" onclick="onBtnClickedPartidas(' + lista_partidas[i].id + ')">' + lista_partidas[i].nome + '</a>'

// }

// document.getElementById('menu-partidas').innerHTML = '<div class="dropdown">' +
//     '<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
//     'Escolha o tipo de partida </a>' +
//     '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">' +
//     menuTitulos.join('') + '</div></div>'

function criar_html(lista, itens) {
        for (let i = 0; i < lista.length; i++) {
            itens[i] = (' <div class="col mb-4">' +
            '<div id="card_disp_und" class="card h-100"  onclick="onBtnClickedPartidas(' + lista[i].id + ')">' +
            '<img src="img/painel.png" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + lista[i].nome + '</h5> <hr>' +
            // '<p> <b>Tipo: </b> '+ lista[i].tipo +' </p> <hr>' +
            '<p class="card-text"><b> Descrição: </b>' + lista[i].descricao + '</p>' +
            '</div>' +
            '<p class="ver3d"><a class="btn btn-lg btn-primary"  role="button">Ver 3D</a></p>' +
            '</div>' +
            '</div>'
        );
} }

criar_html(lista_partidas, partidas);
function fechar(lista) {
    lista = ("<div class='row row-cols-1 row-cols-md-4'>" + lista.join('') + "</div");
    return lista;
}

function onBtnClickedtodos() {
    document.getElementById('r1').innerHTML = fechar(partidas);
};

window.onload = onBtnClickedtodos();

