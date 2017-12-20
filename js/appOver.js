function info() {
 var infoGnral = data['AQP']['2016-2']['ratings'];
  for (var i = 0; i < infoGnral.length; i++) {
    var sprint = infoGnral[i]['sprint'];

    var boxGnral = document.getElementById('general');
    var sprintP = document.createElement('p');
    var box2 = document.createElement('div');

    sprintP.classList.add('pStyle1');
    box2.classList.add('sprintS');

    box2.appendChild(sprintP);
    boxGnral.appendChild(box2);



 }
}
