(function (){
  var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
  var c = 0;  var t;  var timer_is_on = 0;  var w = 0;
  function iniciando() {
    var x = document.querySelectorAll('.card');  var k = 0;
    remove_clic();
  for (let i = 0; i <16; i+=2) {    
     x[i].innerHTML = '<img class="frente" src="'+imagens[k]+ '"  /><img class="verso" src="'+imagens[8]+ '"  /> ';
     k++  }  k = 0;
   for (let j = 1; j <16; j+=2) {    
     x[j].innerHTML = '<img class="frente" src="'+imagens[k]+ '"  /><img class="verso" src="'+imagens[8]+ '"  /> ';
     k++;  }  w = 0; ad = []; gh = [];  
      $('.frente').click(function(){ alert('Clique em Iniciar/Reiniciar para começar o jogo');  });   mostrar(); }
  iniciando();
  $('h2').click(function(){   
       recomecar();   });
  function mostrar() {
      $('.verso').hide();
      $('.frente').show();  }
  function ocultar() {
      $('.verso').show();
      $('.frente').hide();  }
  function remove_clic() {  	
    $('.card').off('click');  }
    remove_clic();
  function efeito_clic() {
    $('.card').click(function(){  
    $('.verso',this).slideUp(200);
    $('.frente',this).fadeIn(200);
    $(this).addClass('chec');
    verifica();  }); }
  function desvirar() {
    remove_clic(); 
    var ad = document.querySelectorAll('.chec');
    var um = ad[0].id;
    var dois = ad[1].id  
    ad[0].id = 'nao';
    ad[1].id = 'nao'; 
    setTimeout(() => {
    $('#nao .verso').fadeIn(200);
    $('#nao .frente').slideUp(200);
    $('#fim .verso').hide();
    $('#fim .frente').show();
    ad[0].id = um;
    ad[1].id = dois; 
    ad = [];
    um = 30;
    dois = 33;
    efeito_clic(); 
     }, 1500);
    $('.chec').removeClass('chec');
    [checando[0], checando[1]] = [null, null];    }
  $('.verso').click(function(){  
      $('.verso',this).slideUp(200);
      $('.frente',this).fadeIn(200);
      $(this).addClass('chec');   
      verifica();
      });
  function desabilitar() {
       $('.chec').off('click');
        var gh = document.querySelectorAll('.chec');
        $('.chec').removeClass('chec');
        gh[0].id = 'fim';    gh[1].id = 'fim';     gh = [];
        $('#fim').removeClass('verso');  
        $('#fim').removeClass('frente');     w = w+1;
      if (w == 8) {    
      setTimeout(() => {   tempos();   alert('Parabens! Você completou o jogo. '+ 'Tempo = '+c+' Segundos. Gerando novo jogo...');
        t = 0;      c = 0;      w = 0;      iniciando();    }, 1000);    
      } else {    [checando[0], checando[1]] = [null, null];  } } 
  function verifica() {
      var checando = document.querySelectorAll('.chec');
      let bateu = checando[0].id === checando[1].id;
      bateu ? desabilitar() : desvirar();   }   
  function timedCount() {
    c = c + 1;
    t = setTimeout(timedCount, 1000);   }
  function startCount() {
    c = 0;
    t = 0;
    if (!timer_is_on) {
      timer_is_on = 1;
      timedCount();  }  }
      document.getElementById('comecar').onclick = startCount;
  function tempos() {
    var  re = localStorage.getItem("tempo");
    if (c < re && w == 8) {
      localStorage.setItem("tempo", c );
      } else if (w != 8){   document.getElementById('result').innerText = ('Melhor tempo:'+re+' Segundos'); } }
      document.getElementById('temp').onclick = tempos;
  function recomecar() {
      startCount(); tempos(); efeito_clic();  $('.frente').off('click'); 
      var numeros = new Array();    var aleatorio = new Array();
      numeros = [];    aleatorio = [];
      var j = 0;     var i = 0;   w = 0;
      var s = document.querySelectorAll('.card');  
      var x = document.querySelectorAll('.card');
    while (numeros.length < 16) {
        aleatorio = Math.floor(Math.random() * 16);
    if (numeros.indexOf(aleatorio) == -1)
        numeros.push(aleatorio);     }
    for ( i = 0; i <8; i++) {
        let a = numeros[i];
        x[a].innerHTML = '<img  class="frente" src="'+imagens[i]+ '"  /><img  class="verso" src="'+imagens[8]+ '"  /> ';
        s[a].id = i;   }
    for ( j = 8; j <16; j++) {
         let a = numeros[j];
         let b = j - 8;
        x[a].innerHTML = '<img  class="frente" src="'+imagens[b]+ '"  /><img  class="verso" src="'+imagens[8]+ '"  />';    
        s[a].id = b;  }  mostrar();  setTimeout(() => { ocultar();  }, 2000);   x = [];   }
  })();
  app.inicio();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  