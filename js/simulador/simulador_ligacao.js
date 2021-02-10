
var imagem_html;
var num_img = 1;
var num_dg = 0;
var pontos = new Array();
var html = new Array();
var html_final;
var num_conexao = 0;
var contagem = 0;
var num1;
var num2;
var reset = 0;
var clicks = 0;
var resultado;
var tempo = 0;
var tempo_inicial = 0;
var tempo_final = 0;
var tempo_final_segundos = 0;
var tempo_final_minutos = 0;
var tempo_medio_conexao = 0;

var num_avanca = 28;

num_conexao = 1;
num_img = 1;

/* html[0] = ' <h3></h3>'; */


/* setTimeout( function() {
    tempo +=1;
}, 1000 ); */

setInterval( function() {
    tempo +=1;
}, 1000 );

tempo_inicial = tempo;



function verificaConexao(id) {
    console.log("Id Conexão",id)
    reset += 1;
    if (contagem == 0) {
        contagem += 1;
        num1 = id
    }

    if (contagem == 1 && id != num1) {
        num2 = id
        carregaImagem();
        contagem = 0;
        resetar();
    }
    verificaReset();
};

function contaClick() {
    clicks += 1;
    reset += 1;
    console.log("Clicks:"+clicks)
    verificaReset();
}
function verificaReset() {
    if (reset == 2) {    

        window.alert("Par de conexões erradas! Acertou: "+contagem+" Conexões")
        resetar();
    }
}
function resetar() {
    contagem = 0;
    reset = 0;
    num1 = 0;
    num2 = 0;
}

function carregaConexao() {
    html[2] = '<div class="conexao" onclick="verificaConexao(id)" id="c'+num_conexao+'"></div>';    /* '+num_conexao+' */
    num_conexao +=1;
    html[3] = '<div class="conexao" onclick="verificaConexao(id)" id="c'+num_conexao+'"></div>';    /* '+num_conexao+' */
    console.log("Num Conexão: "+num_conexao);
    num_conexao +=1;
    carregaHtml();
};

function retiraConexao() {
    html[2] = '';
    html[3] = '';
    console.log("Num Conexão: "+num_conexao);
    carregaHtml();
};

function carregaDg() {
    num_dg += 1;
    dg_html = ' <h5> Diagrama:</h5> <object class="diagrama_pdf" data="img/simulador/partida direta/diagrama/pd_dg-'+ num_dg +'.pdf" type="application/pdf">' +
    '<div class="diagrama_img"> <img  src="img/simulador/partida direta/diagrama/pd_dg-'+ num_dg +'.jpg" class="card-img" alt="..."></div>'+
    '</object>'+
    '<hr>';
    document.getElementById('div_dg_simulador').innerHTML = dg_html;
    console.log("Id Diagrama:", num_dg);
    

};

        
function carregaImagem() {
    imagem_html = '<h5> Painel:</h5> <img src="img/simulador/partida direta/'+num_img+'.jpg" class="card-img" alt="..."></img>';
    document.getElementById('div_img_simulador').innerHTML = imagem_html;
    console.log("Id Img:", num_img);
    num_img += 1;

    if (num_img == 36 || num_img == 23 || num_img == 5 || num_img == 9 || num_img == 12 || num_img == 15 || num_img == 18 || num_img == 20) {
        propximaEtapa();
    } else {
        carregaConexao();
        carregaDg();
    }

    if (num_img == 40) {
        retiraConexao();
        finaliza();
    }
};

function propximaEtapa() {
    retiraConexao();
    
    setTimeout(function(){
       /*  window.alert("Próxima ETAPA!") */
        //your code to be executed after 1 seconds
        carregaImagem();
    },1000);  
}

 function voltaImg() {
    num_dg -= 2;
    num_conexao -= 4;
    num_img -= 2;
    carregaImagem();
 }

 function avancaImg() {
    carregaImagem();
 }

function carregaHtml() {
    /* html_final = html; */
    html_final = html.join('');
    document.getElementById('div_html_simulador').innerHTML = html_final;
};

function avancaX() {
    for (let i = 0; i < num_avanca; i++) {
        carregaImagem();
    }
}


function finaliza() {
    num_dg -= 1;
    
    setTimeout(function(){
        click_taxa_acerto = 100 / (clicks + 60) * 60
        click_taxa_acerto = click_taxa_acerto.toFixed([2]) /* Define numero de casas após a virgula */
        /* window.alert(" Circuito Concluído!!")
        window.alert("Cliques errados : "+clicks+ "  //  Taxa de acerto: "+click_taxa_acerto+"%") */

        carregaImagem();
        retiraConexao();
        chamaResultado();
        window.alert("Parabéns! Prática concluída. Confira agora o relatório de prática.")
    },1000); 
}

function chamaResultado() {
    tempo_final = tempo - tempo_inicial
    tempo_final_minutos = tempo_final / 60
    tempo_final_segundos = tempo_final % 60

    tempo_medio_conexao = tempo_final / 60

    tempo_final_minutos = tempo_final_minutos.toFixed([0])
    tempo_medio_conexao = tempo_medio_conexao.toFixed([2])
    
    resultado ='<h3>Relatório de Prática</h3>'+
    '<table class="relatorio">'+
        '<tr> <td>Tempo de conclusão:</td> <td class="r_tempo">'+tempo_final_minutos+' min '+tempo_final_segundos+' Segundos</td> </tr>'+
        '<tr> <td>Tempo médio por conexão: </td> <td class="r_tx_axerto">'+tempo_medio_conexao+' Segundos </td> </tr>'+
        '<tr> <td>Conexões erradas: </td> <td class="r_erro">'+clicks+' </td></tr>'+
        '<tr> <td>Taxa de acerto: </td> <td class="r_tx_axerto">'+click_taxa_acerto+'% </td> </tr>'+
    '</table>'+
    '<h3>Detalhes da Partida</h3>'+
    '<table>'+
        '<tr> <td>Tipo de partida: </td> <td>Partida Direta</td> </tr>'+
        '<tr> <td>Total de conexões: </td> <td>60</td> </tr>'+
        '<tr> <td>Ligação de circuito: </td> <td>Parcial</td> </tr>'+
        '<tr> <td>Local: </td> <td>Painel Industrial com Motor</td> </tr>'+
    '</table>'+
    '<br><Br><hr>';
    document.getElementById('div_resultado_simulador').innerHTML = resultado;
}





function iniciar() {
    carregaImagem();
    carregaHtml();
    /* avancaX(); */
    window.alert("Iniciando")
};

document.getElementById('btn_iniciar').onclick = iniciar;

document.getElementById('div_img_simulador').onclick = contaClick;
document.getElementById('btn_voltar').onclick = voltaImg;
document.getElementById('btn_avancar').onclick = avancaImg;
document.getElementsByClassName("conexao").onclick = verificaConexao;
