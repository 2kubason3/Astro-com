function telewizory() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/telewizory.txt", true);
    xhttp.send();
  }
  function smartfony() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/smartfony.txt", true);
    xhttp.send();
  }
  function polecane() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/polecane.txt", true);
    xhttp.send();
  }
  function monitory() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/monitory.txt", true);
    xhttp.send();
  }
  function konsole() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/konsole.txt", true);
    xhttp.send();
  }
  function komputery() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/komputery.txt", true);
    xhttp.send();
  }
  function akcesoria() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("polecane").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "js/ajax/akcesoria.txt", true);
    xhttp.send();
  }