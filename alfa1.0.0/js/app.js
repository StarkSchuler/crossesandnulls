alert("Hi! Es ist Kreuze und Kreise. Hezlich Willkommen! Es gibt erste tipt ein Kreuz.  Los geht`s!!!");

let roundT = document.getElementById("round");

let greenPointTex = document.getElementById("pointsx");

let redPointTex = document.getElementById("pointsO");

let place1 = document.getElementById("t1");

let place2 = document.getElementById("t2");

let place3 = document.getElementById("t3");

let place4 = document.getElementById("t4");

let place5 = document.getElementById("t5");

let place6 = document.getElementById("t6");

let place7 = document.getElementById("t7");

let place8 = document.getElementById("t8");

let place9 = document.getElementById("t9");

let placeIndikator1;

let placeIndikator2;

let placeIndikator3;

let placeIndikator4;

let placeIndikator5;

let placeIndikator6;

let placeIndikator7;

let placeIndikator8;

let placeIndikator9;

roundT.textContent = "Round: 1";

let round = 1;

let greenPoint = 0;

let redPoint = 0;

let marker;

function pointCatcherGreen() {
  greenPoint += 1;
  greenPointTex.textContent = "X: " + greenPoint;
}

function pointCatcherRed() {
  redPoint += 1;
  redPointTex.textContent = "O: " + redPoint;
}

function clear() {

  round += 1;

  roundT.textContent = "Round: " + round;

  placeIndikator1 = null;
  placeIndikator2 = null;
  placeIndikator3 = null;
  placeIndikator4 = null;
  placeIndikator5 = null;
  placeIndikator6 = null;
  placeIndikator7 = null;
  placeIndikator8 = null;
  placeIndikator9 = null;

  place1.style.backgroundImage = "none";
  place2.style.backgroundImage = "none";
  place3.style.backgroundImage = "none";
  place4.style.backgroundImage = "none";
  place5.style.backgroundImage = "none";
  place6.style.backgroundImage = "none";
  place7.style.backgroundImage = "none";
  place8.style.backgroundImage = "none";
  place9.style.backgroundImage = "none";

}

function change() {
  if (marker == true) {
    kreuz();
    console.log(1);
  } else if (marker == false) {
    kreis();
    console.log(0);
  }

  if (placeIndikator1 == false && placeIndikator5 == false && placeIndikator9 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator1 == true && placeIndikator5 == true && placeIndikator9 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator3 == true && placeIndikator5 == true && placeIndikator7 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator3 == false && placeIndikator5 == false && placeIndikator7 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator1 == true && placeIndikator2 == true && placeIndikator3 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator1 == false && placeIndikator2 == false && placeIndikator3 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator3 == false && placeIndikator6 == false && placeIndikator9 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator3 == true && placeIndikator6 == true && placeIndikator9 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator9 == true && placeIndikator8 == true && placeIndikator7 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator9 == false && placeIndikator8 == false && placeIndikator7 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator7 == false && placeIndikator4 == false && placeIndikator1 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator7 == true && placeIndikator4 == true && placeIndikator1 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator2 == false && placeIndikator5 == false && placeIndikator8 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator2 == true && placeIndikator5 == true && placeIndikator8 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator4 == false && placeIndikator5 == false && placeIndikator6 == false) {
    pointCatcherRed();
    alert("Kreis hat " + round + " Raund gewonnen!");
    clear();
  } else if (placeIndikator4 == true && placeIndikator5 == true && placeIndikator6 == true) {
    pointCatcherGreen();
    alert("Kreuz hat " + round + " Raund gewonnen!");
    clear();
  }

}

function kreis() {
  place1.onclick = function () {
    if (placeIndikator1 == true || placeIndikator1 == false) {

    } else {
      place1.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator1 = false;
      marker = true;
      change();
    }
  }

  place2.onclick = function () {
    if (placeIndikator2 == true || placeIndikator2 == false) {

    } else {
      place2.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator2 = false;
      marker = true;
      change();
    }
  }

  place3.onclick = function () {

    if (placeIndikator3 == true || placeIndikator3 == false) {

    } else {
      place3.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator3 = false;
      marker = true;
      change();
    }

  }

  place4.onclick = function () {

    if (placeIndikator4 == true || placeIndikator4 == false) {

    } else {
      place4.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator4 = false;
      marker = true;
      change();
    }

  }

  place5.onclick = function () {

    if (placeIndikator5 == true || placeIndikator5 == false) {

    } else {
      place5.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator5 = false;
      marker = true;
      change();
    }

  }

  place6.onclick = function () {

    if (placeIndikator6 == true || placeIndikator6 == false) {

    } else {
      place6.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator6 = false;
      marker = true;
      change();
    }

  }

  place7.onclick = function () {

    if (placeIndikator7 == true || placeIndikator7 == false) {

    } else {
      place7.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator7 = false;
      marker = true;
      change();
    }

  }

  place8.onclick = function () {

    if (placeIndikator8 == true || placeIndikator8 == false) {

    } else {
      place8.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator8 = false;
      marker = true;
      change();
    }

  }

  place9.onclick = function () {

    if (placeIndikator9 == true || placeIndikator9 == false) {

    } else {
      place9.style.backgroundImage = "url(img/kreis.jpg)";
      placeIndikator9 = false;
      marker = true;
      change();
    }

  }
}

  function kreuz() {
    place1.onclick = function () {

      if (placeIndikator1 == true || placeIndikator1 == false) {

      } else {
        place1.style.backgroundImage = "url(img/kreuz.jpg)";
        marker = false;
        placeIndikator1 = true;
        change();
      }

    }

    place2.onclick = function () {

      if (placeIndikator2 == true || placeIndikator2 == false) {

      } else {
        place2.style.backgroundImage = "url(img/kreuz.jpg)";
        marker = false;
        placeIndikator2 = true;
        change();
      }

    }

    place3.onclick = function () {

      if (placeIndikator3 == true || placeIndikator3 == false) {

      } else {
        place3.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator3 = true;
        marker = false;
        change();
      }

    }

    place4.onclick = function () {

      if (placeIndikator4 == true || placeIndikator4 == false) {

      } else {
        place4.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator4 = true;
        marker = false;
        change();
      }

    }

    place5.onclick = function () {

      if (placeIndikator5 == true || placeIndikator5 == false) {

      } else {
        place5.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator5 = true;
        marker = false;
        change();
      }

    }

    place6.onclick = function () {

      if (placeIndikator6 == true || placeIndikator6 == false) {

      } else {
        place6.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator6 = true;
        marker = false;
        change();
      }

    }

    place7.onclick = function () {

      if (placeIndikator7 == true || placeIndikator7 == false) {

      } else {
        place7.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator7 = true;
        marker = false;
        change();
      }

    }

    place8.onclick = function () {

      if (placeIndikator8 == true || placeIndikator8 == false) {

      } else {
        place8.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator8 = true;
        marker = false;
        change();
      }

    }

    place9.onclick = function () {

      if (placeIndikator9 == true || placeIndikator9 == false) {

      } else {
        place9.style.backgroundImage = "url(img/kreuz.jpg)";
        placeIndikator9 = true;
        marker = false;
        change();
      }

    }
  }

kreuz();



