var imagem_html;
var num_img = 1;
var num_dg = 0;
var pontos = new Array();
var html = new Array();
var html_final;
var num_conexao = 0;
var contagem = 0;
var num1 = 0;
var num2 = 0;
var reset = 0;
var clicks = 0;
var resultado;
var tempo = 0;
var tempo_inicial = 0;
var tempo_final = 0;
var tempo_final_segundos = 0;
var tempo_final_minutos = 0;
var tempo_medio_conexao = 0;
var data = new Date();
var ano, mês,dia, hora, minuto, segundo, milissegundo;
var conexao_a, conexao_b;
var k1, dj1, dj2, dj3, rt, borne, tf;
var num_avanca = 28;
var a, b;
var nome_usuario;

var todosResultados = new Array();
var listaResultado = new Array();
var indiceResultado = 0;


k1 = dj1 = dj2 = dj3 = borne = rt = tf = 0;

num_conexao = 1;
num_img = 1;

// Original: 
// num_conexao = 1;
// num_img = 1;   Original
// num_img = 38 pra acabar mais rapido



/* html[0] = ' <h3></h3>'; */

/* setTimeout( function() {
    tempo +=1;
}, 1000 ); */

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear(),
        hora = data.getHours().toString(),
        min = data.getMinutes().toString(),
        seg = data.getSeconds().toString();
    return diaF+"/"+mesF+"/"+anoF+"  -  "+hora+":"+min+":"+seg;
}


setInterval(function() {
    tempo += 1;
}, 1000);

tempo_inicial = tempo;

function marca_dispositivo_errado(id) {

    /* DJ1 */
    if (id == "c1" || id == "c3" || id == "c5" || id == "c13" || id == "c15" || id == "c55" || id == "c57" || id == "c59") {dj1 += 1; /* window.alert("Errou -DJ1 - x: "+dj1) */; }

    /* DJ2 */
    if (id == "c16" || id == "c17" || id == "c19" || id == "c14") {dj2 += 1; /* window.alert("Errou -dj2 - x: "+dj2) */; }

    /* DJ3 */
    if (id == "c22" || id == "c24" || id == "c26" || id == "c28" || id == "c30") {dj3 += 1; /* window.alert("Errou - dj3 - x: "+dj3) */; }

    /* tf */
    if (id == "c18" || id == "c20" || id == "c21" || id == "c23") {tf += 1; /* window.alert("Errou -tf - x: "+tf) */; }

    /* K1 */
    if (id == "c2" || id == "c4" || id == "c6" || id == "c38" || id == "c39" || id == "c40" || id == "c41" || id == "c43" || id == "c45" || id == "c46" || id == "c47" || id == "c49" || id == "c51") {k1 += 1;/*  window.alert("Errou -k1 - x: "+k1) */; }

    /* rt */
    if (id == "c7" || id == "c9" || id == "c11" || id == "c25" || id == "c32" || id == "c33" || id == "c34" || id == "c37" || id == "c53") {rt += 1;/*  window.alert("Errou -rt - x: "+rt) */; }

    /* borne */
    if (id == "c8" || id == "c10" || id == "c12" || id == "c27" || id == "c29" || id == "c31" || id == "c35" || id == "c36" || id == "c42" || id == "c44" || id == "c48" || id == "c50" || id == "c52" || id == "c54" || id == "c56" || id == "c58" || id == "c60") {borne += 1; /* window.alert("Errou -borne - x: "+borne) */; }
}

function verificaConexao(id) {
    console.log("Id Conexão: ", id, " A: ", conexao_a, " B: ", conexao_b)
    reset += 1;

    if(id == conexao_a) {a = '';} else {a = conexao_a}
    if (id == conexao_b) {b = '';} else {b = conexao_b}

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
    console.log("Clicks:" + clicks)
    verificaReset();
}


function verificaReset() {
    if (reset == 2) {

        /* Valida conexçoes erradas pra gravar dispositivo que errou */
        if(num1 == 0 && num2 == 0) {
            marca_dispositivo_errado(conexao_a);
            marca_dispositivo_errado(conexao_b);
        } else {
            marca_dispositivo_errado(a);
            marca_dispositivo_errado(b);
        }
        
        window.alert("Par de conexões erradas! Acertou: " + contagem + " Conexões de 2")
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
    html[2] = '<div class="conexao" onclick="verificaConexao(id)" id="c' + num_conexao + '"></div>'; /* '+num_conexao+' */
    console.log("Num Conexão: " + num_conexao);
    conexao_a = "c"+num_conexao;
    /* window.alert(conexao_a); */
    num_conexao += 1;
    html[3] = '<div class="conexao" onclick="verificaConexao(id)" id="c' + num_conexao + '"></div>'; /* '+num_conexao+' */
    console.log("Num Conexão: " + num_conexao);
    conexao_b = "c"+num_conexao;
    /* window.alert(conexao_b); */
    num_conexao += 1;
    carregaHtml();
};


function retiraConexao() {
    html[2] = '';
    html[3] = '';
    console.log("Num Conexão: " + num_conexao);
    carregaHtml();
};


function carregaDg() {
    num_dg += 1;
    dg_html = ' <h5> Diagrama: PARTIDA DIRETA </h5>' +
        '<div class="diagrama_img"> <img  src="img/simulador/partida direta/diagrama/pd_dg-' + num_dg + '.jpg" class="card-img" alt="..."></div>' +
        '<hr>';
    document.getElementById('div_dg_simulador').innerHTML = dg_html;
    console.log("Id Diagrama:", num_dg);
};


function carregaImagem() {
    imagem_html = '<h5> Painel:</h5> <img src="img/simulador/partida direta/' + num_img + '.jpg" class="card-img" alt="..."></img>';
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

    setTimeout(function() {
        /*  window.alert("Próxima ETAPA!") */
        //your code to be executed after 1 seconds
        carregaImagem();
    }, 1000);
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

    setTimeout(function() {
        click_taxa_acerto = 100 / (clicks + 60) * 60
        click_taxa_acerto = click_taxa_acerto.toFixed([2]) /* Define numero de casas após a virgula */
            /* window.alert(" Circuito Concluído!!")
            window.alert("Cliques errados : "+clicks+ "  //  Taxa de acerto: "+click_taxa_acerto+"%") */

        carregaImagem();
        retiraConexao();
        salvaResultado();
        indiceResultado = todosResultados.length-1;
        chamaResultado();
        drawChart();
        window.alert("Parabéns! Prática concluída. Confira agora o relatório de prática.")
    }, 1000);
}


function chamaResultado() {

    todosResultados = localStorage.getItem(nome_usuario);
    todosResultados = JSON.parse(todosResultados);

    let i = indiceResultado;
    let num = i+1;
 
    resultado = '<h3>Relatório de Prática</h3>' +
        '<button id="btn_anterior" role="button" onclick="resultadoAnterior()" class="botao_resultado">Ver resultado anterior</button>'+
        '<button id="btn_proximo" role="button" onclick="proximoResultado()" class="botao_resultado">Ver proximo resultado</button>'+
        '<p> Resultado: '+ num +' de '+ todosResultados.length + '</p>'+
        '<table class="relatorio">' +
        '<tr> <td>Nome do usuário: </td> <td class="r_nome_usuario">' + nome_usuario + ' </td> </tr>' +
        '<tr> <td>Tempo de conclusão:</td> <td class="r_tempo">' + todosResultados[i].tempo_final+'</td> </tr>' +
        '<tr> <td>Tempo médio por conexão: </td> <td class="r_tx_axerto">' + todosResultados[i].tempo_medio_conexao + ' Segundos </td> </tr>' +
        '<tr> <td>Conexões erradas: </td> <td class="r_erro">' + todosResultados[i].clicks + ' </td></tr>' +
        '<tr> <td>Taxa de acerto: </td> <td class="r_tx_acerto">' + todosResultados[i].click_taxa_acerto + '% </td> </tr>' +
        '<tr> <td>Data: </td> <td class="r_tx_axerto">' + dataAtualFormatada()+ '  </td> </tr>' +
        '</table>' +
        '<h3>Relatório de erros:</h3>' +
        '<table>' +
        '<th>Dispositivo</th>'+
        '<th>Numero de erros</th>'+
        '<tr> <td>Disjuntor DJ1: </td> <td>'+todosResultados[i].dj1+'</td> </tr>' +
        '<tr> <td>Disjuntor DJ2 : </td> <td>'+todosResultados[i].dj2+'</td> </tr>' +
        '<tr> <td>Disjuntor DJ3: </td> <td>'+todosResultados[i].dj3+'</td> </tr>' +
        '<tr> <td>Transformador TF1: </td> <td>'+todosResultados[i].tf+'</td> </tr>' +
        '<tr> <td>Contator K1 : </td> <td>'+todosResultados[i].k1+'</td> </tr>' +
        '<tr> <td>Relé térmico RT : </td> <td>'+todosResultados[i].rt+'</td> </tr>' +
        '<tr> <td>Régua de Bornes x1 : </td> <td>'+todosResultados[i].borne+'</td> </tr>' +
        '</table>' +
        '<br><br><hr>'+
        '<a class="avaliar" href="formulario.html" target="_blank">Avaliar / Feedback</a> <br> <br></br>' +
        '<h3>Detalhes da Partida</h3>' +
        '<table>' +
        '<tr> <td>Tipo de partida: </td> <td>Partida Direta</td> </tr>' +
        '<tr> <td>Total de conexões: </td> <td>60</td> </tr>' +
        '<tr> <td>Ligação de circuito: </td> <td>Parcial</td> </tr>' +
        '<tr> <td>Local: </td> <td>Painel Industrial com Motor</td> </tr>' +
        '</table>' +
        '<br><br><hr>'+
        '<h3>Evolução do usuario</h3>'+
        '<div id="grafico">'+
        '<div id="chart" class="chart"></div>'+
        '<div id="chart2" class="chart"></div>'+
        '<div id="chart3" class="chart"></div>'+
        '</div>;'

    document.getElementById('div_resultado_simulador').innerHTML = resultado;

    if (i == 0 && i == todosResultados.length-1) {
        document.getElementById("btn_proximo").style.display = "none";
        document.getElementById("btn_anterior").style.display = "none";

    } else if (i == todosResultados.length-1) {
        document.getElementById("btn_proximo").style.display = "none";
    } else if (i == 0) {
        document.getElementById("btn_anterior").style.display = "none";
    }
    
}


function salvaResultado() {
    // if (localStorage.getItem(nome_usuario) === null) {
    // } else {
    //   listaResultado = localStorage.getItem(nome_usuario);
    // }

    tempo_final = tempo - tempo_inicial
    tempo_final_minutos = tempo_final / 60
    tempo_final_segundos = tempo_final % 60
    console.log('Tempo em segundos: ' + tempo)

    tempo_medio_conexao = tempo_final / 60

    tempo_final_minutos = tempo_final_minutos.toFixed([0])
    tempo_medio_conexao = tempo_medio_conexao.toFixed([2])
    
     
    
    //   console.log(nome_usuario + ' : ' , todosResultados);
    
    if (localStorage.getItem(nome_usuario) === null) {
        listaResultado = [{tempo_final: tempo_final_minutos + ' min ' + tempo_final_segundos + ' Segundos',
        tempo_medio_conexao: tempo_medio_conexao,
        tempo_final_minutos: tempo_final_minutos,
        tempo_final_segundos: tempo,
        clicks: clicks,
        click_taxa_acerto: click_taxa_acerto,
        dj1: dj1,
        dj2: dj2,
        dj3: dj3,
        tf: tf,
        k1: k1,
        rt: rt,
        borne: borne
     }];

        todosResultados= listaResultado;
    } else {
        listaResultado = {tempo_final: tempo_final_minutos + ' min ' + tempo_final_segundos + ' Segundos',
        tempo_medio_conexao: tempo_medio_conexao,
        tempo_final_minutos: tempo_final_minutos,
        tempo_final_segundos: tempo,
        clicks: clicks,
        click_taxa_acerto: click_taxa_acerto,
        dj1: dj1,
        dj2: dj2,
        dj3: dj3,
        tf: tf,
        k1: k1,
        rt: rt,
        borne: borne
     };

        todosResultados = localStorage.getItem(nome_usuario);
        todosResultados = JSON.parse(todosResultados);
        todosResultados.push(listaResultado);
    }
    
    

    localStorage.setItem(nome_usuario, JSON.stringify(todosResultados));
    // todosResultados = localStorage.getItem(nome_usuario);

    console.log(todosResultados);
    
};
// todosResultados = localStorage.getItem('joao');
// todosResultados = JSON.parse(todosResultados);
// console.log(todosResultados[1].clicks);




    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', '');
      data.addColumn('number', 'Taxa de acerto');

      var data2 = new google.visualization.DataTable();
      data2.addColumn('number', '');
      data2.addColumn('number', 'Tempo');

      var data3 = new google.visualization.DataTable();
      data3.addColumn('number', '');
      data3.addColumn('number', 'Tempo');
    //   data.addColumn('number', 'The Avengers');
    //   data.addColumn('number', 'Transformers: Age of Extinction');

    //   data.addRows([
    //     [1,  37.8],
    //     [2,  30.9],
    //     [3,  25.4],
    //     [4,  11.7]
    //   ]);
    nome_usuario = localStorage.getItem('nome_usuario');
    
    todosResultados = localStorage.getItem(nome_usuario);
    todosResultados = JSON.parse(todosResultados);
    
      for (let i = 0; i < todosResultados.length; i++) {
        data.addRows([
        [i,  parseInt(todosResultados[i].click_taxa_acerto)],
      ]);  
      console.log(parseInt(todosResultados[i].click_taxa_acerto));
      }

      for (let i = 0; i < todosResultados.length; i++) {
        data2.addRows([
        [i,  parseInt(todosResultados[i].tempo_final_minutos)],
      ]);  
      console.log(parseInt(todosResultados[i].tempo_final_minutos));
      }

      for (let i = 0; i < todosResultados.length; i++) {
        data3.addRows([
        [i,  parseInt(todosResultados[i].tempo_final_segundos)],
      ]);  
      console.log(parseInt(todosResultados[i].tempo_final_segundos));
      }


      var options = {
        chart: {
          title: 'Taxa de acerto',
          subtitle: 'De 0 a 100%'
        },
        width: 800,
        height: 400,
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

      var options2 = {
        chart: {
          title: 'Tempo',
          subtitle: 'Em minutos'
        },
        width: 800,
        height: 400,
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

      var options3 = {
        chart: {
          title: 'Tempo',
          subtitle: 'Em segundos'
        },
        width: 800,
        height: 400,
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));

      var chart2 = new google.charts.Line(document.getElementById('chart2'));
      chart2.draw(data2, google.charts.Line.convertOptions(options2));

      var chart3 = new google.charts.Line(document.getElementById('chart3'));
      chart3.draw(data3, google.charts.Line.convertOptions(options3));
    }
// function indice() {
//     todosResultados[todosResultados.length] = listaResultado;
//     alert(todosResultados.length);
// }

// localStorage.clear();
// console.log(nome_usuario + ' : ' , todosResultados);



// nome_usuario = localStorage.getItem('nome_usuario');
// alert("Valor:" + nome_usuario);


function iniciar() {
    carregaImagem();
   
    solicitaNome();
    /* avancaX(); */
    
    window.alert("Iniciando")
};

function solicitaNome() {
    nome_usuario = localStorage.getItem('nome_usuario');
     if (nome_usuario == null) {
        nome_usuario = ""
     }
        nome_usuario=prompt("Digite seu nome e sobrenome:", [nome_usuario]);
        setName();
      
}

function setName() {
    localStorage.setItem("nome_usuario", nome_usuario);
}

if (localStorage.getItem(nome_usuario) == null || localStorage.getItem('nome_usuario') == null) {
} else {
    todosResultados = localStorage.getItem(nome_usuario);
    todosResultados = JSON.parse(todosResultados);
    drawChart();
}

function proximoResultado() {
    console.log('Resultado anterior: '+ indiceResultado+1)
    indiceResultado = indiceResultado + 1;
    chamaResultado();
    
}

function resultadoAnterior() {
    console.log('Resultado anterior: '+ indiceResultado-1)
    indiceResultado = indiceResultado-1
    chamaResultado();
    
}


document.getElementById('btn_iniciar').onclick = iniciar;

document.getElementById('div_img_simulador').onclick = contaClick;
document.getElementById('btn_voltar').onclick = voltaImg;
document.getElementById('btn_avancar').onclick = avancaImg;

document.getElementsByClassName("conexao").onclick = verificaConexao;

document.getElementById('btn_proximo').onclick = proximoResultado;
document.getElementById('btn_anterior').onclick = resultadoAnterior;
