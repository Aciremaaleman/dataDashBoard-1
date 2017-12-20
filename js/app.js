/*
 * Funcionalidad de tu producto
 */
 // Puedes hacer uso de la base de datos a través de la variable `data`
var selectOption = function(event) {
  var option = event.target.selectedIndex;
  var sede = event.target[option].dataset.sede;
  var generacion = event.target[option].dataset.generacion;
  obtenerDatos(sede, generacion);

function obtenerDatos(sede, generacion) {
  var students = data[sede][generacion]['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var spt1 = students[i]['sprints'][0]['number'];
    var spt2 = students[i]['sprints'][1]['number'];
    var spt3 = students[i]['sprints'][2]['number'];
    var spt4 = students[i]['sprints'][3]['number'];

    console.log(spt4);

    var title1 = document.createElement('p');
    var spt5 = document.createElement('p');
    var spt6 = document.createElement('p');
    var spt7 = document.createElement('p');
    var spt8 = document.createElement('p');
    var sptD = document.createElement('div');

    sptD.classList.add('designSprintN');
    title1.textContent = 'Sprints';
    title1.classList.add('titleSprint');

    spt5.innerText = spt1;
    spt6.innerText = spt2;
    spt7.innerText = spt3;
    spt8.innerText = spt4;

    sptD.appendChild(title1);
    sptD.appendChild(spt5);
    sptD.appendChild(spt6);
    sptD.appendChild(spt7);
    sptD.appendChild(spt8);


    var score1 = students[i]['sprints'][0]['score']['tech'];
    var score2 = students[i]['sprints'][1]['score']['tech'];
    var score3 = students[i]['sprints'][2]['score']['tech'];
    var score4 = students[i]['sprints'][3]['score']['tech'];

    var title2 = document.createElement('p');
    var score5 = document.createElement('p');
    var score6 = document.createElement('p');
    var score7 = document.createElement('p');
    var score8 = document.createElement('p');
    var scoreD = document.createElement('div');

    scoreD.classList.add('designScore');
    title2.textContent = 'Score Techs';
    title2.classList.add('titleTech');
   

    score5.innerText = score1;
    score6.innerText = score2;
    score7.innerText = score3;
    score8.innerText = score4;

    scoreD.appendChild(title2);
    scoreD.appendChild(score5);
    scoreD.appendChild(score6);
    scoreD.appendChild(score7);
    scoreD.appendChild(score8);


    var hse1 = students[i]['sprints'][0]['score']['hse'];
    var hse2 = students[i]['sprints'][1]['score']['hse'];
    var hse3 = students[i]['sprints'][2]['score']['hse'];
    var hse4 = students[i]['sprints'][3]['score']['hse'];

    var title3 = document.createElement('p');
    var  hse5 = document.createElement('p');
    var  hse6 = document.createElement('p');
    var  hse7 = document.createElement('p');
    var  hse8 = document.createElement('p');
    var  hseD = document.createElement('div');


    hseD.classList.add('designScoreD');
    title3.textContent = 'Score HSE';
    title3.classList.add('titleHse');
    hse5.innerText = score1;
    hse6.innerText = score2;
    hse7.innerText = score3;
    hse8.innerText = score4;

    hseD.appendChild(title3);
    hseD.appendChild(hse5);
    hseD.appendChild(hse6);
    hseD.appendChild(hse7);
    hseD.appendChild(hse8);


    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');
    var boxgneral = document.createElement('div');

    image.classList.add('foto');
    boxgneral.classList.add('bxGnral')
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
    boxgneral.appendChild(sptD)
    boxgneral.appendChild(scoreD);
    boxgneral.appendChild(hseD);
    boxStudent.appendChild(boxgneral);
  }
 }
}

function obtenerDatos2(sede, generacion) {
   var students = data[sede][generacion]['students'];
   document.getElementById('contenedor').innerHTML = "";
   for(var i = 0; i < students.length; i++){
     var studentName = students[i]['name'];
     var img = students[i]['photo'];
     var act = students[i]['active'];

     var spt1 = students[i]['sprints'][0]['number'];
     var spt2 = students[i]['sprints'][1]['number'];
     var spt3 = students[i]['sprints'][2]['number'];
     var spt4 = students[i]['sprints'][3]['number'];

     var title1 = document.createElement('p');
     var spt5 = document.createElement('p');
     var spt6 = document.createElement('p');
     var spt7 = document.createElement('p');
     var spt8 = document.createElement('p');
     var sptD = document.createElement('div');

     sptD.classList.add('designSprintN');
     title1.textContent = 'Sprint';
     title1.classList.add('titleSprint');
     spt5.innerText = spt1;
     spt6.innerText = spt2;
     spt7.innerText = spt3;
     spt8.innerText = spt4;

     sptD.appendChild(title1);
     sptD.appendChild(spt5);
     sptD.appendChild(spt6);
     sptD.appendChild(spt7);
     sptD.appendChild(spt8);


     var score1 = students[i]['sprints'][0]['score']['tech'];
     var score2 = students[i]['sprints'][1]['score']['tech'];
     var score3 = students[i]['sprints'][2]['score']['tech'];
     var score4 = students[i]['sprints'][3]['score']['tech'];

     var title2 = document.createElement('p');
     var score5 = document.createElement('p');
     var score6 = document.createElement('p');
     var score7 = document.createElement('p');
     var score8 = document.createElement('p');
     var scoreD = document.createElement('div');

     title2.textContent = 'Scoresss Tech';
     title2.classList.add('titleTech');
     scoreD.classList.add('designScore');
     score5.innerText = score1;
     score6.innerText = score2;
     score7.innerText = score3;
     score8.innerText = score4;

     scoreD.appendChild(title2);
     scoreD.appendChild(score5);
     scoreD.appendChild(score6);
     scoreD.appendChild(score7);
     scoreD.appendChild(score8);


     var hse1 = students[i]['sprints'][0]['score']['hse'];
     var hse2 = students[i]['sprints'][1]['score']['hse'];
     var hse3 = students[i]['sprints'][2]['score']['hse'];
     var hse4 = students[i]['sprints'][3]['score']['hse'];

     var title3 = document.createElement('p');
     var  hse5 = document.createElement('p');
     var  hse6 = document.createElement('p');
     var  hse7 = document.createElement('p');
     var  hse8 = document.createElement('p');
     var  hseD = document.createElement('div');


     hseD.classList.add('designScoreD');
     title3.textContent = 'Scores HSE';
     title3.classList.add('titleHse');
     hse5.innerText = score1;
     hse6.innerText = score2;
     hse7.innerText = score3;
     hse8.innerText = score4;

     hseD.appendChild(title3);
     hseD.appendChild(hse5);
     hseD.appendChild(hse6);
     hseD.appendChild(hse7);
     hseD.appendChild(hse8);


     var box = document.getElementById('contenedor');
     var pAct = document.createElement('p');
     var parragraph = document.createElement('p');
     var image = document.createElement('img');
     var boxStudent = document.createElement('div');
     var boxgneral = document.createElement('div');

     image.classList.add('foto');
     boxgneral.classList.add('bxGnral')
     boxStudent.classList.add('alumna');
     parragraph.classList.add('nombre');
     pAct.classList.add('actD');
     parragraph.innerText = studentName;
     pAct.innerText = act;
     image.src = img;

     boxStudent.appendChild(parragraph);
     boxStudent.appendChild(pAct);
     boxStudent.appendChild(image);
     box.appendChild(boxStudent);
     boxgneral.appendChild(sptD)
     boxgneral.appendChild(scoreD);
     boxgneral.appendChild(hseD);
     boxStudent.appendChild(boxgneral);

   }
  }

var obtenerDatos3 = function() {
  var students = data['CDMX']['2017-1']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos4 = function() {
  var students = data['CDMX']['2017-2']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos5 = function() {
  var students = data['LIM']['2016-2']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos6 = function() {
  var students = data['LIM']['2017-1']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos7 = function() {
  var students = data['LIM']['2017-2']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos8 = function() {
  var students = data['SCL']['2016-2']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos9 = function() {
  var students = data['SCL']['2017-1']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}

var obtenerDatos10 = function() {
  var students = data['SCL']['2017-2']['students'];
  document.getElementById('contenedor').innerHTML = "";
  for(var i = 0; i < students.length; i++){
    var studentName = students[i]['name'];
    var img = students[i]['photo'];
    var act = students[i]['active'];

    var box = document.getElementById('contenedor');
    var pAct = document.createElement('p');
    var parragraph = document.createElement('p');
    var image = document.createElement('img');
    var boxStudent = document.createElement('div');

    image.classList.add('foto');
    boxStudent.classList.add('alumna');
    parragraph.classList.add('nombre');
    pAct.classList.add('actD');
    parragraph.innerText = studentName;
    pAct.innerText = act;
    image.src = img;

    boxStudent.appendChild(parragraph);
    boxStudent.appendChild(pAct);
    boxStudent.appendChild(image);
    box.appendChild(boxStudent);
 }
}



