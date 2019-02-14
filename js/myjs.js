/**
* @author Laura Rainer Matrikelnummer: 664281
*/

/**
* Ein einfaches Element, das nicht berührt werden darf
*/
class element{
  /** Konstruieren
  * eines Gebiets
  * @param img repräsetiert das Bild des Elements
  * @param pX repräsetiert die Position in der Breite des Elements
  * @param pY repräsetiert die Position in der Höhe des Elements
  * @param b repräsetiert die Breite des Elements
  * @param h repräsetiert die Höhe des Elements
  * */
  constructor(img,pX,pY,b,h){
    this.image = img; //Bild des Gebiets
    this.positionX = pX; //Position in der Breite
    this.positionY = pY; //Höhen Position

    this.breite = b; //Breite des Elements
    this.hoehe= h;   // Hoehe des Elements
  }

  /** Beruehre
  * Methode, die true zurückgibt, wenn x,y im Objekt liegen
  * @param posx die x-Koordinate die übergeben wird
  * @param posy die y-Koordinate die übergeben wird
  * @returns 1 falls getroffen sonst 0
  */
  beruehre(posx,posy){
    if((posx <this.positionX+this.breite) && (posx>this.positionX) && (posy < this.positionY+this.hoehe)
    && (posy>this.positionY)){
      return 1;
    }
    else{
      return 0;
    }
  }
  /**
  * Zeichnet das Objekt
  * @param context eines Canvas elements
  */
  draw(context){
    context.drawImage(this.image,this.positionX,this.positionY,this.breite,this.hoehe);
  }
}

/**
* Das Raupen-Element
*/
class raupe{
  /** Konstruieren
  * des Raupenbildes
  * @param img repräsetiert das Bild der Raupe
  * @param pX repräsetiert die Position in der Breite der Raupe
  * @param pY repräsetiert die Position in der Höhe der Raupe
  * @param b repräsetiert die Breite der Raupe
  * @param h repräsetiert die Höhe der Raupe
  * */
  constructor(img,pX,pY,b,h){
    this.image = img; //Bild der Raupe
    this.positionX = pX; //Position in der Breite
    this.positionY = pY; //Höhen Position

    this.breite = b; //Breite des Elements
    this.hoehe= h;   // Hoehe des Elements
  }
  /** Beruehre
  * Methode, die true zurückgibt, wenn positionX, oisitionY im Objekt liegen
  * @param posx die x-Koordinate die übergeben wird
  * @param posy die y-Koordinate die übergeben wird
  * @returns 1 falls getroffen sonst 0
  */
  beruehre(posx,posy){
    if((posx <this.positionX+this.breite) && (posx>this.positionX) && (posy < this.positionY+this.hoehe)
    && (posy>this.positionY)){
      return 1;
    }
    else{
      return 0;
    }
  }
  /**
  * Zeichnet das Objekt
  * @param context eines Canvas elements
  */
  draw(context){
    context.drawImage(this.image,this.positionX,this.positionY,this.breite,this.hoehe);
  }
}

/**
* Das Apfel-Element, das berührt werden muss
*/
class apfel{
  /** Konstruieren
  * des Apfelbildes
  * @param img repräsetiert das Bild des Apfels
  * @param pX repräsetiert die Position in der Breite des Apfels
  * @param pY repräsetiert die Position in der Höhe des Apfels
  * @param b repräsetiert die Breite des Apfels
  * @param h repräsetiert die Höhe des Apfels
  * */
  constructor(img,pX,pY,b,h){
    this.image = img; //Bild des Apfels
    this.positionX = pX; //Position in der Breite
    this.positionY = pY; //Höhen Position

    this.breite = b; //Breite des Elements
    this.hoehe= h;   // Hoehe des Elements
  }
  /** Beruehre
  * Methode, die true zurückgibt, wenn x,y im Objekt liegen
  * @param posx die x-Koordinate die übergeben wird
  * @param posy die y-Koordinate die übergeben wird
  * @returns 1 falls getroffen sonst 0
  */
  beruehre(posx,posy){
    if((posx <this.positionX+this.breite) && (posx>this.positionX) && (posy < this.positionY+this.hoehe)
    && (posy>this.positionY)){
      return 1;
    }
    else{
      return 0;
    }
  }
  /**
  * Zeichnet das Objekt
  * @param context eines Canvas elements
  */
  draw(context){
    context.drawImage(this.image,this.positionX,this.positionY,this.breite,this.hoehe);
  }
}

/**
* Das Blumen-Element, das nicht berührt werden darf
*/
class blume{
  /** Konstruieren
  * des Blumenbildes
  * @param img repräsetiert das Bild der Blume
  * @param pX repräsetiert die Position in der Breite der Blume
  * @param pY repräsetiert die Position in der Höhe der Blume
  * @param b repräsetiert die Breite der Blume
  * @param h repräsetiert die Höhe der Blume
  * */
  constructor(img,pX,pY,b,h){
    this.image = img; //Bild der Blume
    this.positionX = pX; //Position in der Breite
    this.positionY = pY; //Höhen Position

    this.breite = b; //Breite des Elements
    this.hoehe= h;   // Hoehe des Elements
  }

  /** Beruehre
  * Methode, die true zurückgibt, wenn x,y im Objekt liegen
  * @param posx die x-Koordinate die übergeben wird
  * @param posy die y-Koordinate die übergeben wird
  * @returns 1 falls getroffen sonst 0
  */
  beruehre(posx,posy){
    if((posx <this.positionX+this.breite) && (posx>this.positionX) && (posy < this.positionY+this.hoehe)
    && (posy>this.positionY)){
      return 1;
    }
    else{
      return 0;
    }
  }
  /**
  * Zeichnet das Objekt
  * @param context eines Canvas elements
  */
  draw(context){
    context.drawImage(this.image,this.positionX,this.positionY,this.breite,this.hoehe);
  }
}

/*Arrays, welche die Level-Elemente enthalten*/

/**
* Variable die die Bilder für die Hecken-Elemente liefern
* @type {Image}
*/
var hecke = new Image();
hecke.src = "img/hecke.png";

/**
* Variable die Bilder für die Begrenzungs-Elemente liefert
* @type {Image}
*/
var begrenzung = new Image();
begrenzung.src = "img/begrenzungen.png";

//Array an Gebieten, dass die Begrenzungen mit verschiedenen Hecken für das jeweilige Level enthält

/**
* Variable die die Gebiete in arrays kappselt
* @type {Array}
*/
var gebiete = [];

for (/** @type {Number} */var i = 0; i < gebiete.length; i++) {
      gebiete[i] = [i++];
    };
    gebiete[0] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50)];
    gebiete[1] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,200,150,80,80)];
    gebiete[2] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,150,100,80,80),
                  new element(hecke,400,200,80,80)];
    gebiete[3] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,120,40,80,80),
                  new element(hecke,120,110,80,80),
                  new element(hecke,400,220,100,100)];
    gebiete[4] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,300,50,90,90),
                  new element(hecke,300,230,90,90),
                  new element(hecke,120,140,80,80),
                  new element(hecke,480,160,80,80)];
    gebiete[5] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,120,120,80,80),
                  new element(hecke,120,190,80,80),
                  new element(hecke,120,260,80,80),
                  new element(hecke,300,120,110,110),
                  new element(hecke,480,200,80,80)];
    gebiete[6] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,140,40,80,80),
                  new element(hecke,140,250,80,80),
                  new element(hecke,340,190,80,80),
                  new element(hecke,340,250,80,80),
                  new element(hecke,490,40,80,80),
                  new element(hecke,490,100,80,80)];
    gebiete[7] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,140,90,80,80),
                  new element(hecke,320,180,80,80),
                  new element(hecke,390,250,80,80),
                  new element(hecke,320,250,80,80),
                  new element(hecke,460,40,80,80),
                  new element(hecke,460,250,80,80),
                  new element(hecke,460,100,80,80)];
    gebiete[8] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,80,130,80,80),
                  new element(hecke,150,130,80,80),
                  new element(hecke,220,250,90,90),
                  new element(hecke,300,120,80,80),
                  new element(hecke,220,40,60,60),
                  new element(hecke,520,40,80,80),
                  new element(hecke,380,230,80,80),
                  new element(hecke,440,120,80,80)];
    gebiete[9] = [new element(begrenzung,0,0,window.innerWidth,50),
                  new element(begrenzung,0,(window.innerHeight)-(40),window.innerWidth,50),
                  new element(hecke,120,110,80,80),
                  new element(hecke,120,180,80,80),
                  new element(hecke,120,240,100,100),
                  new element(hecke,250,80,60,60),
                  new element(hecke,250,250,60,60),
                  new element(hecke,450,90,80,80),
                  new element(hecke,450,40,60,60),
                  new element(hecke,450,160,80,80),
                  new element(hecke,330,170,60,60)];

/**
* Variable die ein Bild für ein Blumen-Element liefert
* @type {Image}
*/
var blume1 = new Image();
blume1.src = "img/blume1.png";

/**
* Variable die ein Bild für ein Blumen-Element liefert
* @type {Image}
*/
var blume2 = new Image();
blume2.src = "img/blume2.png";

/**
* Variable die ein Bild für ein Blumen-Element liefert
* @type {Image}
*/
var blume3 = new Image();
blume3.src = "img/blume3.png";

//Array, in dem die Blumen gespeichert sind

/**
* Variable die die Blumen in arrays kappselt
* @type {Array}
*/
var blumen = [];
    blumen[0] = new blume(blume1,260,60,70,70);
    blumen[1] = new blume(blume2,260,60,70,70);
    blumen[2] = new blume(blume3,500,240,50,50);
    blumen[3] = new blume(blume2,380,50,60,60);

//Bildelemente für die Raupe, die in jedem Level weiter wächst

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe1 = new Image();
raupe1.src = "img/raupe1.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe2 = new Image();
raupe2.src = "img/raupe2.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe3 = new Image();
raupe3.src = "img/raupe3.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe4 = new Image();
raupe4.src = "img/raupe4.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe5 = new Image();
raupe5.src = "img/raupe5.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe6 = new Image();
raupe6.src = "img/raupe6.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe7 = new Image();
raupe7.src = "img/raupe7.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe8 = new Image();
raupe8.src = "img/raupe8.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe9 = new Image();
raupe9.src = "img/raupe9.png";

/**
* Variable die ein Bild für ein Raupen-Element liefert
* @type {Image}
*/
var raupe10 = new Image();
raupe10.src = "img/raupe10.png";

//Array für die verschiedenen Raupen

/**
* Variable die die Raupen in arrays kappselt
* @type {Array}
*/
var raupen = [];
    raupen[0] = new raupe(raupe1,20,100,52,49);
    raupen[1] = new raupe(raupe2,20,100,57,49);
    raupen[2] = new raupe(raupe3,20,80,63,49);
    raupen[3] = new raupe(raupe4,20,80,68,49);
    raupen[4] = new raupe(raupe5,20,160,72,49);
    raupen[5] = new raupe(raupe6,20,250,76.5,49);
    raupen[6] = new raupe(raupe7,20,60,80,49);
    raupen[7] = new raupe(raupe8,20,130,84,49);
    raupen[8] = new raupe(raupe9,20,230,86.5,49);
    raupen[9] = new raupe(raupe10,20,250,88.5,49);

//Bildelemente für die verschiedenen Äpfel der Level

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel1 = new Image();
apfel1.src = "img/apfelrot.png";

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel2 = new Image();
apfel2.src = "img/apfelgruen.png";

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel3 = new Image();
apfel3.src = "img/apfelgelb.png";

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel4 = new Image();
apfel4.src = "img/apfelrotgruen.png";

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel5 = new Image();
apfel5.src = "img/apfelrotgelb.png";

/**
* Variable die ein Bild für ein Apfel-Element liefert
* @type {Image}
*/
var apfel6 = new Image();
apfel6.src = "img/apfelgruengelb.png";

//Array für die verschiedenen Äpfel

/**
* Variable die die Äpfel in arrays kappselt
* @type {Array}
*/
var aepfel = [];
    aepfel[0] = new apfel(apfel1,(window.innerWidth-50),window.innerHeight/2,50,50);
    aepfel[1] = new apfel(apfel2,(window.innerWidth-50),window.innerHeight/1.8,50,50);
    aepfel[2] = new apfel(apfel3,(window.innerWidth-50),window.innerHeight/1.6,50,50);
    aepfel[3] = new apfel(apfel6,(window.innerWidth-50),window.innerHeight/1.6,50,50);
    aepfel[5] = new apfel(apfel1,(window.innerWidth-50),window.innerHeight/1.5,50,50);
    aepfel[6] = new apfel(apfel5,(window.innerWidth-50),window.innerHeight/1.6,50,50);
    aepfel[7] = new apfel(apfel2,(window.innerWidth-50),window.innerHeight/1.8,50,50);
    aepfel[8] = new apfel(apfel1,(window.innerWidth-50),window.innerHeight/1.8,50,50);
    aepfel[9] = new apfel(apfel4,(window.innerWidth-50),window.innerHeight/1.8,50,50);
    aepfel[10] = new apfel(apfel4,(window.innerWidth-50),window.innerHeight/2,50,50);

/*********************************************************************************
  Einfuehrungs-Level / Level 1
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas = document.getElementById('canvas');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context = canvas.getContext('2d');

    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas.addEventListener('click', onCheckClick, false);
    canvas.addEventListener('touchstart', canvas_touchStart, false);
    canvas.addEventListener('touchend', canvas_touchEnd, false);
    canvas.addEventListener('touchmove', canvas_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick(beiclick) {
      var x = beiclick.clientX - canvas.offsetLeft;
      var y = beiclick.clientY - canvas.offsetTop;
    }

    //Variablen für die Zeichnung der Linie
    /**
    * Variable für die Koordinaten des letzten touch-Punktes
    * @type {Number}
    */
    var lastX;
    /**
    * Variable für die Koordinaten des letzten touch-Punktes
    * @type {Number}
    */
    var lastY=-1;
    /**
    * Variable für die Koordinaten des ersten touch-Punktes
    * @type {Number}
    */
    var firstX;
    /**
    * Variable für die Koordinaten des ersten touch-Punktes
    * @type {Number}
    */
    var firstY;
    /**
    * Variable für die Bestimmung des Farbtons der Linie
    * @type {Number}
    */
    var hue=0;

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context.lineCap = "round";
      //gefüllte Linie zeichnen
      context.beginPath();
      //zuerst gehe zur letzten touch-Position
      context.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context.lineWidth = size;
      context.stroke();
      context.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    };

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      //zeichne Raupe und Apfel des Einführungslevels
      raupen[0].draw(context);
      aepfel[0].draw(context);
      //zeichne die beiden Gebiete, die die Wegbegrenzungen darstellen
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[0][j].draw(context);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    };

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);

      drawLine(context,touchX,touchY,12);

      if(aepfel[0].beruehre(lastX,lastY)==1){
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        document.getElementById('gewonnenRaupe').style.display='block';
        document.getElementById('gewonnenRaupe').style.zIndex = 100;
        document.getElementById('buttonrestart1').style.display='none';
        document.getElementById('buttonrestart1').style.zIndex=101;
        document.getElementById('buttonLevel2').style.display='block';
        document.getElementById('buttonLevel2').style.zIndex=101;
        TTS.speak({
          text: 'Super, tippe auf den gruenen Apfel, damit ich noch weiter wachsen kann.',
          locale: 'de-DE',
          rate: 1
        });
      };

      for(/**@type {Number} */let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */let j=0; j < gebiete[i].length; j++){
          if(gebiete[0][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, du bist wohl an eine Hecke gekommen. Tippe auf den Apfel um es nochmal zu versuchen',
              locale: 'de-DE',
              rate: 1
            });
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe').style.display='block';
            document.getElementById('verlorenRaupe').style.zIndex = 100;
            document.getElementById('buttonrestart1').style.display='block';
            document.getElementById('buttonrestart1').style.zIndex=101;
          }
        }
      };
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();;;
    }

    /**
    * bestimmt die aktuelle Touch-Position
    * @param touchPosition aktuelle Touch-Position
    */
    function getTouchPos(touchPosition) {
      if (!touchPosition)
      var touchPosition = event;

      if(touchPosition.touches) {
        //nur mit 1 Finger touchbar
        if (touchPosition.touches.length == 1) {
          //bekomme Informatoinen für Finger #1
          var touch = touchPosition.touches[0];
          touchX=touch.pageX-touch.target.offsetLeft;
          touchY=touch.pageY-touch.target.offsetTop;
        }
      }
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    *dem startButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#startButton").bind( "click", function(event, ui) {
      document.getElementById('verlorenRaupe').style.display='none';
      document.getElementById('verlorenRaupe').style.zIndex = 0;
      TTS.speak({
        text: 'Hallo ich bin die kleine Raupe Eliana und traeume davon, ein grosser schoener Schmetterling zu werden, wie meine Geschwister. Hilfst du mir dabei genug Aepfel zu essen damit ich wachsen kann?',
        locale: 'de-DE',
        rate: 1
        //nachdem der Vorstellungstext gesagt wurde, zeige das Einführungslevel und erkläre
      }, function () {
        document.getElementById('geschichte').style.display='none';
        TTS.speak({
          text: 'Probier es doch einmal aus und zeig mir den Weg. Tippe auf mich und zieh mir eine Linie zu dem roten Apfel ohne die Hecken zu beruehren an denen ich mich sonst pieckse.',
          locale: 'de-DE',
          rate: 1
        });
      });
      //zeichne Raupe und Apfel des Einführungslevels
      raupen[0].draw(context);
      aepfel[0].draw(context);
      //zeichne die beiden Gebiete, die die Wegbegrenzungen darstellen
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[0][j].draw(context);
        }
      };
    });

    /**
    *dem restart1Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonrestart1").bind( "click", function(event, ui) {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe').style.display='none';
      document.getElementById('verlorenRaupe').style.zIndex = 0;
      document.getElementById('buttonrestart1').style.display='none';
      document.getElementById('buttonrestart1').style.zIndex = 0;
      document.getElementById('geschichte').style.display='none';
      TTS.speak({
        text: 'Tippe gleich nochmal auf mich und zieh mir die Linie zum Apfel',
        locale: 'de-DE',
        rate: 1
      });
      //zeichne Raupe und Apfel des Einführungslevels
      raupen[0].draw(context);
      aepfel[0].draw(context);
      //zeichne die beiden Gebiete, die die Wegbegrenzungen darstellen
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[0][j].draw(context);
        }
      };
    });

/*********************************************************************************
  Level 2
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas2 = document.getElementById('canvas2');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context2 = canvas2.getContext('2d');

    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas2() {
      canvas2.width = window.innerWidth;
      canvas2.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas2, false);
    resizeCanvas2();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas2.addEventListener('click', onCheckClick2, false);
    canvas2.addEventListener('touchstart', canvas2_touchStart, false);
    canvas2.addEventListener('touchend', canvas2_touchEnd, false);
    canvas2.addEventListener('touchmove', canvas2_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick2(beiclick) {
      var x = beiclick.clientX - canvas2.offsetLeft;
      var y = beiclick.clientY - canvas2.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context2 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context2,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      context2.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context2.lineCap = "round";
      //gefüllte Linie zeichnen
      context2.beginPath();
      //zuerst gehe zur letzten touch-Position
      context2.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context2.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context2.lineWidth = size;
      context2.stroke();
      context2.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;

      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas2_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context2,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();;
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas2_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context2.clearRect(0, 0, window.innerWidth, window.innerHeight);
      //Zeichne Raupe, Apfel und Gebiete des Levels
      raupen[1].draw(context2);
      aepfel[1].draw(context2);
      for (/**@type {Number} */var i in gebiete){
        for(/**@type {Number} */var j in gebiete[i]){
          gebiete[1][j].draw(context2);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas2_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context2,touchX,touchY,12);
      if(aepfel[1].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe2').style.display='block';
        document.getElementById('gewonnenRaupe2').style.zIndex = 100;
        document.getElementById('buttonLevel2').style.display='none';
        document.getElementById('buttonLevel2').style.zIndex=0;
        document.getElementById('buttonLevel3').style.display='block';
        document.getElementById('buttonLevel3').style.zIndex=101;
        TTS.speak({
          text: 'Super, tippe auf den naechsten Apfel',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */let j=0; j < gebiete[i].length; j++){
          if(gebiete[1][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, du bist wohl an eine Hecke gekommen. Tippe gleich nochmal und zieh mir die Linie zum Apfel',
              locale: 'de-DE',
              rate: 1
            });
            context2.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe2').style.display='block';
            document.getElementById('verlorenRaupe2').style.zIndex = 100;
            document.getElementById('buttonLevel2wiederholen').style.display='block';
            document.getElementById('buttonLevel2wiederholen').style.zIndex=101;
          }
        }
      };
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * dem level2Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel2").bind( "click", function(event, ui) {
      context2.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe2').style.display='none';
      document.getElementById('verlorenRaupe2').style.zIndex = 0;
      document.getElementById('gewonnenRaupe2').style.display='none';
      document.getElementById('gewonnenRaupe2').style.zIndex = 0;
      document.getElementById('buttonLevel2').style.display='none';
      document.getElementById('buttonLevel2').style.zIndex=-1;
      TTS.speak({
        text: 'Tippe wieder auf mich und zieh mir eine Linie zum gruenen Apfel.',
        locale: 'de-DE',
        rate: 1
        //nachdem der Vorstellungstext gesagt wurde, zeige das Einführungslevel und erkläre
      });
      //Zeichne Raupe, Apfel und Gebiete des Levels
      raupen[1].draw(context2);
      aepfel[1].draw(context2);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[1][j].draw(context2);
        }
      };
    });

    /**
    * dem level2wiederholeButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel2wiederholen").bind( "click", function(event, ui) {
      context2.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe2').style.display='none';
      document.getElementById('verlorenRaupe2').style.zIndex = 0;
      document.getElementById('gewonnenRaupe2').style.display='none';
      document.getElementById('gewonnenRaupe2').style.zIndex = 0;
      document.getElementById('buttonLevel2wiederholen').style.display='none';
      document.getElementById('buttonLevel2wiederholen').style.zIndex=-1;

      //Zeichne Raupe, Apfel und Gebiete des Levels
      raupen[1].draw(context2);
      aepfel[1].draw(context2);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[1][j].draw(context2);
        }
      };
    });


/*********************************************************************************
  Level 3
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas3 = document.getElementById('canvas3');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context3 = canvas3.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas3() {
      canvas3.width = window.innerWidth;
      canvas3.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas3, false);
    resizeCanvas3();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas3.addEventListener('click', onCheckClick3, false);
    canvas3.addEventListener('touchstart', canvas3_touchStart, false);
    canvas3.addEventListener('touchend', canvas3_touchEnd, false);
    canvas3.addEventListener('touchmove', canvas3_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick3(beiclick) {
      var x = beiclick.clientX - canvas3.offsetLeft;
      var y = beiclick.clientY - canvas3.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context3 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context3,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie

      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context3.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context3.lineCap = "round";
      //gefüllte Linie zeichnen
      context3.beginPath();
      //zuerst gehe zur letzten touch-Position
      context3.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context3.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context3.lineWidth = size;
      context3.stroke();
      context3.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas3_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context3,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();;
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas3_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context3.clearRect(0, 0, window.innerWidth, window.innerHeight);
      //Zeichne Raupe, Blume, Apfel und Gebiete des Levels
      raupen[2].draw(context3);
      aepfel[2].draw(context3);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[2][j].draw(context3);
        }
      };

      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas3_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context3,touchX,touchY,12);
      if(aepfel[2].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe3').style.display='block';
        document.getElementById('gewonnenRaupe3').style.zIndex = 100;
        document.getElementById('buttonLevel2').style.display='none';
        document.getElementById('buttonLevel2').style.zIndex=0;
        document.getElementById('buttonLevel3').style.display='none';
        document.getElementById('buttonLevel3').style.zIndex=101;
        document.getElementById('buttonLevel4').style.display='block';
        document.getElementById('buttonLevel4').style.zIndex=101;
        TTS.speak({
          text: 'Super, tippe auf den naechsten Apfel.',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[2][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, versuch es nochmal',
              locale: 'de-DE',
              rate: 1
            });
            context3.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe3').style.display='block';
            document.getElementById('verlorenRaupe3').style.zIndex = 100;
            document.getElementById('buttonLevel3wiederholen').style.display='block';
            document.getElementById('buttonLevel3wiederholen').style.zIndex=101;
          }
        }
      };

      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }
    /**
    * dem level3Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel3").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Du weisst sicher wie ich zu meinem Apfel komme. Zeig es mir',
        locale: 'de-DE',
        rate: 1
      });
      context3.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe3').style.display='none';
      document.getElementById('gewonnenRaupe3').style.zIndex = 0;
      document.getElementById('buttonLevel3').style.display='none';
      document.getElementById('buttonLevel3').style.zIndex=-1;
      //Zeichne Raupe, Blume, Apfel und Gebiete des Levels
      raupen[2].draw(context3);
      aepfel[2].draw(context3);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[2][j].draw(context3);
        }
      };
    });
    /**
    * dem level3wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel3wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Diesmal schaffst du es!',
        locale: 'de-DE',
        rate: 1
      });
      context3.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe3').style.display='none';
      document.getElementById('verlorenRaupe3').style.zIndex = 0;
      document.getElementById('buttonLevel3wiederholen').style.display='none';
      document.getElementById('buttonLevel3wiederholen').style.zIndex=-1;
      //Zeichne Raupe, Blume, Apfel und Gebiete des Levels
      raupen[2].draw(context3);
      aepfel[2].draw(context3);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[2][j].draw(context3);
        }
      };
    });

/*********************************************************************************
  Level 4
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas4 = document.getElementById('canvas4');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context4 = canvas4.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas4() {
      canvas4.width = window.innerWidth;
      canvas4.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas4, false);
    resizeCanvas4();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas4.addEventListener('click', onCheckClick4, false);
    canvas4.addEventListener('touchstart', canvas4_touchStart, false);
    canvas4.addEventListener('touchend', canvas4_touchEnd, false);
    canvas4.addEventListener('touchmove', canvas4_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick4(beiclick) {
      var x = beiclick.clientX - canvas4.offsetLeft;
      var y = beiclick.clientY - canvas4.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context4 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context4,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context4.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context4.lineCap = "round";
      //gfüllte Linie zeichnen
      context4.beginPath();
      //zuerst gehe zur letzten touch-Position
      context4.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context4.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context4.lineWidth = size;
      context4.stroke();
      context4.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas4_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context4,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas4_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context4.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[3].draw(context4);
      aepfel[3].draw(context4);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[3][j].draw(context4);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas4_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context4,touchX,touchY,12);
      if(aepfel[3].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe4').style.display='block';
        document.getElementById('gewonnenRaupe4').style.zIndex = 100;
        document.getElementById('buttonLevel3').style.display='none';
        document.getElementById('buttonLevel3').style.zIndex=1;
        document.getElementById('buttonLevel4').style.display='none';
        document.getElementById('buttonLevel4').style.zIndex=0;
        document.getElementById('buttonLevel5').style.display='block';
        document.getElementById('buttonLevel5').style.zIndex=101;
        TTS.speak({
          text: 'Toll gemacht, tippe auf den naechsten Apfel',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[3][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, da war wohl eine Hecke',
              locale: 'de-DE',
              rate: 1
            });
            context4.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe4').style.display='block';
            document.getElementById('verlorenRaupe4').style.zIndex = 100;
            document.getElementById('buttonLevel4wiederholen').style.display='block';
            document.getElementById('buttonLevel4wiederholen').style.zIndex=101;
          }
        }
      };

      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * dem level4Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel4").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Der Apfel sieht aber lecker aus!',
        locale: 'de-DE',
        rate: 1
      });
      context4.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe4').style.display='none';
      document.getElementById('gewonnenRaupe4').style.zIndex = 0;
      document.getElementById('buttonLevel4').style.display='none';
      document.getElementById('buttonLevel4').style.zIndex=-1;
      raupen[3].draw(context4);
      aepfel[3].draw(context4);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[3][j].draw(context4);
        }
      };
    });
    /**
    * dem level4wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel4wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Noch ein Versuch',
        locale: 'de-DE',
        rate: 1
      });
      context4.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe4').style.display='none';
      document.getElementById('verlorenRaupe4').style.zIndex = 0;
      document.getElementById('buttonLevel4wiederholen').style.display='none';
      document.getElementById('buttonLevel4wiederholen').style.zIndex=-1;
      raupen[3].draw(context4);
      aepfel[3].draw(context4);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[3][j].draw(context4);
        }
      };
    });

/*********************************************************************************
  Level 5
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas5 = document.getElementById('canvas5');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context5 = canvas5.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas5() {
      canvas5.width = window.innerWidth;
      canvas5.height = window.innerHeight;
    }
    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas5, false);
    resizeCanvas5();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas5.addEventListener('click', onCheckClick5, false);
    canvas5.addEventListener('touchstart', canvas5_touchStart, false);
    canvas5.addEventListener('touchend', canvas5_touchEnd, false);
    canvas5.addEventListener('touchmove', canvas5_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick5(beiclick) {
      var x = beiclick.clientX - canvas5.offsetLeft;
      var y = beiclick.clientY - canvas5.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context5 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context5,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context5.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context5.lineCap = "round";
      //gfüllte Linie zeichnen
      context5.beginPath();
      //zuerst gehe zur letzten touch-Position
      context5.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context5.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context5.lineWidth = size;
      context5.stroke();
      context5.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas5_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context5,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas5_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context5.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[4].draw(context5);
      aepfel[5].draw(context5);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[4][j].draw(context5);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas5_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context5,touchX,touchY,12);
      if(aepfel[5].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe5').style.display='block';
        document.getElementById('gewonnenRaupe5').style.zIndex = 100;
        document.getElementById('buttonLevel5').style.display='none';
        document.getElementById('buttonLevel5').style.zIndex=0;
        document.getElementById('buttonLevel6').style.display='block';
        document.getElementById('buttonLevel6').style.zIndex=101;
        TTS.speak({
          text: 'Super, tippe auf den Apfel, damit ich noch weiter wachsen kann',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[4][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au',
              locale: 'de-DE',
              rate: 1
            });
            context5.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe5').style.display='block';
            document.getElementById('verlorenRaupe5').style.zIndex = 100;
            document.getElementById('buttonLevel5wiederholen').style.display='block';
            document.getElementById('buttonLevel5wiederholen').style.zIndex=101;
          }
        }
      };

      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }
    /**
    * dem level5Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel5").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Der Weg sieht aber schwer aus. Gut dass ich dich habe',
        locale: 'de-DE',
        rate: 1
      });
      context5.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe5').style.display='none';
      document.getElementById('gewonnenRaupe5').style.zIndex = 0;
      document.getElementById('buttonLevel5').style.display='none';
      document.getElementById('buttonLevel5').style.zIndex=-1;
      raupen[4].draw(context5);
      aepfel[5].draw(context5);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[4][j].draw(context5);
        }
      };
    });

    /**
    * dem level5wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel5wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Gleich nochmal!',
        locale: 'de-DE',
        rate: 1
      });
      context5.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe5').style.display='none';
      document.getElementById('verlorenRaupe5').style.zIndex = 0;
      document.getElementById('buttonLevel5wiederholen').style.display='none';
      document.getElementById('buttonLevel5wiederholen').style.zIndex=-1;
      raupen[4].draw(context5);
      aepfel[5].draw(context5);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[4][j].draw(context5);
        }
      };
    });

/*********************************************************************************
  Level 6
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas6 = document.getElementById('canvas6');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context6 = canvas6.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas6() {
      canvas6.width = window.innerWidth;
      canvas6.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas6, false);
    resizeCanvas6();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas6.addEventListener('click', onCheckClick6, false);
    canvas6.addEventListener('touchstart', canvas6_touchStart, false);
    canvas6.addEventListener('touchend', canvas6_touchEnd, false);
    canvas6.addEventListener('touchmove', canvas6_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick6(beiclick) {
      var x = beiclick.clientX - canvas6.offsetLeft;
      var y = beiclick.clientY - canvas6.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context6 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context6,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context6.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context6.lineCap = "round";
      //gfüllte Linie zeichnen
      context6.beginPath();
      //zuerst gehe zur letzten touch-Position
      context6.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context6.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context6.lineWidth = size;
      context6.stroke();
      context6.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas6_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context6,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas6_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context6.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[5].draw(context6);
      aepfel[6].draw(context6);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[5][j].draw(context6);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas6_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context6,touchX,touchY,12);
      if(aepfel[6].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe6').style.display='block';
        document.getElementById('gewonnenRaupe6').style.zIndex = 100;
        document.getElementById('buttonLevel6').style.display='none';
        document.getElementById('buttonLevel6').style.zIndex=0;
        document.getElementById('buttonLevel7').style.display='block';
        document.getElementById('buttonLevel7').style.zIndex=101;
        TTS.speak({
          text: 'Super, tippe auf den Apfel, damit ich noch weiter wachsen kann',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[5][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Aua',
              locale: 'de-DE',
              rate: 1
            });
            context6.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe6').style.display='block';
            document.getElementById('verlorenRaupe6').style.zIndex = 100;
            document.getElementById('buttonLevel6wiederholen').style.display='block';
            document.getElementById('buttonLevel6wiederholen').style.zIndex=101;
          }
        }
      };

      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }
    /**
    * dem level6Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel6").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Wie soll ich da nur hinkommen?',
        locale: 'de-DE',
        rate: 1
      });
      context6.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe6').style.display='none';
      document.getElementById('gewonnenRaupe6').style.zIndex = 0;
      document.getElementById('buttonLevel6').style.display='none';
      document.getElementById('buttonLevel6').style.zIndex=-1;
      raupen[5].draw(context6);
      aepfel[6].draw(context6);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[5][j].draw(context6);
        }
      };
    });

    /**
    * dem level6wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel6wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Wir schaffen das',
        locale: 'de-DE',
        rate: 1
      });
      context6.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe6').style.display='none';
      document.getElementById('verlorenRaupe6').style.zIndex = 0;
      document.getElementById('buttonLevel6wiederholen').style.display='none';
      document.getElementById('buttonLevel6wiederholen').style.zIndex=-1;
      raupen[5].draw(context6);
      aepfel[6].draw(context6);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[5][j].draw(context6);
        }
      };
    });

/*********************************************************************************
  Level 7
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas7 = document.getElementById('canvas7');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context7 = canvas7.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas7() {
      canvas7.width = window.innerWidth;
      canvas7.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas7, false);
    resizeCanvas7();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas7.addEventListener('click', onCheckClick7, false);
    canvas7.addEventListener('touchstart', canvas7_touchStart, false);
    canvas7.addEventListener('touchend', canvas7_touchEnd, false);
    canvas7.addEventListener('touchmove', canvas7_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick7(beiclick) {
      var x = beiclick.clientX - canvas7.offsetLeft;
      var y = beiclick.clientY - canvas7.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context7 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context7,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context7.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context7.lineCap = "round";
      //gfüllte Linie zeichnen
      context7.beginPath();
      //zuerst gehe zur letzten touch-Position
      context7.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context7.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context7.lineWidth = size;
      context7.stroke();
      context7.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas7_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context7,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas7_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context7.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[6].draw(context7);
      blumen[0].draw(context7);
      aepfel[7].draw(context7);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[6][j].draw(context7);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas7_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context7,touchX,touchY,12);
      if(aepfel[7].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe7').style.display='block';
        document.getElementById('gewonnenRaupe7').style.zIndex = 100;
        document.getElementById('buttonLevel7').style.display='none';
        document.getElementById('buttonLevel7').style.zIndex=0;
        document.getElementById('buttonLevel8').style.display='block';
        document.getElementById('buttonLevel8').style.zIndex=101;
        TTS.speak({
          text: 'Toll, machen wir gleich weiter mit diesem Apfel',
          locale: 'de-DE',
          rate: 1
        });
      };
      if(blumen[0].beruehre(touchX,touchY)==1){
        TTS.speak({
          text: 'Ah die boese Blume hat mich erwischt',
          locale: 'de-DE',
          rate: 1
        });
        context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
        document.getElementById('verlorenRaupe7').style.display='block';
        document.getElementById('verlorenRaupe7').style.zIndex = 100;
        document.getElementById('buttonLevel7wiederholen').style.display='block';
        document.getElementById('buttonLevel7wiederholen').style.zIndex=101;
      };
      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[6][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, das tat weh',
              locale: 'de-DE',
              rate: 1
            });
            context7.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe7').style.display='block';
            document.getElementById('verlorenRaupe7').style.zIndex = 100;
            document.getElementById('buttonLevel7wiederholen').style.display='block';
            document.getElementById('buttonLevel7wiederholen').style.zIndex=101;
          }
        }
      };

      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }
    /**
    * dem level7Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel7").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Oh nein! Da ist eine boese Blume. Weiche ihr aus.',
        locale: 'de-DE',
        rate: 1
      });
      context7.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe7').style.display='none';
      document.getElementById('gewonnenRaupe7').style.zIndex = 0;
      document.getElementById('buttonLevel7').style.display='none';
      document.getElementById('buttonLevel7').style.zIndex=-1;
      raupen[6].draw(context7);

      aepfel[7].draw(context7);
      blumen[0].draw(context7);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[6][j].draw(context7);
        }
      };

    });

    /**
    * dem level7wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel7wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Versuch es nochmal, ohne die Blume zu beruehren.',
        locale: 'de-DE',
        rate: 1
      });
      context7.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe7').style.display='none';
      document.getElementById('verlorenRaupe7').style.zIndex = 0;
      document.getElementById('buttonLevel7wiederholen').style.display='none';
      document.getElementById('buttonLevel7wiederholen').style.zIndex=-1;
      raupen[6].draw(context7);

      aepfel[7].draw(context7);
      blumen[0].draw(context7);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[6][j].draw(context7);
        }
      };

    });

/*********************************************************************************
  Level 8
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas8 = document.getElementById('canvas8');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context8 = canvas8.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas8() {
      canvas8.width = window.innerWidth;
      canvas8.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas8, false);
    resizeCanvas8();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas8.addEventListener('click', onCheckClick8, false);
    canvas8.addEventListener('touchstart', canvas8_touchStart, false);
    canvas8.addEventListener('touchend', canvas8_touchEnd, false);
    canvas8.addEventListener('touchmove', canvas8_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick8(beiclick) {
      var x = beiclick.clientX - canvas8.offsetLeft;
      var y = beiclick.clientY - canvas8.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context8 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context8,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context8.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context8.lineCap = "round";
      //gfüllte Linie zeichnen
      context8.beginPath();
      //zuerst gehe zur letzten touch-Position
      context8.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context8.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context8.lineWidth = size;
      context8.stroke();
      context8.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas8_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context8,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas8_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[7].draw(context8);
      aepfel[8].draw(context8);
      blumen[1].draw(context8);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[7][j].draw(context8);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas8_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context8,touchX,touchY,12);
      if(aepfel[8].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe8').style.display='block';
        document.getElementById('gewonnenRaupe8').style.zIndex = 101;
        document.getElementById('buttonLevel8').style.display='none';
        document.getElementById('buttonLevel8').style.zIndex=0;
        document.getElementById('buttonLevel9').style.display='block';
        document.getElementById('buttonLevel9').style.zIndex=102;
        TTS.speak({
          text: 'Wow! Der naechste Apfel wartet schon',
          locale: 'de-DE',
          rate: 1
        });
      };
      if(blumen[1].beruehre(touchX,touchY)==1){
        context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
        document.getElementById('verlorenRaupe8').style.display='block';
        document.getElementById('verlorenRaupe8').style.zIndex = 101;
        document.getElementById('buttonLevel8wiederholen').style.display='block';
        document.getElementById('buttonLevel8wiederholen').style.zIndex=102;
        TTS.speak({
          text: 'Da war die boese Blume im Weg',
          locale: 'de-DE',
          rate: 1
        });
      };
      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[7][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, das war wohl nichts',
              locale: 'de-DE',
              rate: 1
            });
            context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe8').style.display='block';
            document.getElementById('verlorenRaupe8').style.zIndex = 101;
            document.getElementById('buttonLevel8wiederholen').style.display='block';
            document.getElementById('buttonLevel8wiederholen').style.zIndex=102;
          }
        }
      };
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * dem level8Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel8").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Ich fuehle mich schon groesser. Nur noch ein paar mehr Aepfel.',
        locale: 'de-DE',
        rate: 1
      });
      context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe8').style.display='none';
      document.getElementById('gewonnenRaupe8').style.zIndex = 0;
      document.getElementById('buttonLevel8').style.display='none';
      document.getElementById('buttonLevel8').style.zIndex=-1;
      raupen[7].draw(context8);
      aepfel[8].draw(context8);
      blumen[1].draw(context8);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[7][j].draw(context8);
        }
      };
    });

    /**
    * dem level8wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel8wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Gleich nochmal',
        locale: 'de-DE',
        rate: 1
      });
      context8.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe8').style.display='none';
      document.getElementById('verlorenRaupe8').style.zIndex = 0;
      document.getElementById('buttonLevel8wiederholen').style.display='none';
      document.getElementById('buttonLevel8wiederholen').style.zIndex=-1;
      raupen[7].draw(context8);
      aepfel[8].draw(context8);
      blumen[1].draw(context8);

      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[7][j].draw(context8);
        }
      };
    });

/*********************************************************************************
  Level 9
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas9 = document.getElementById('canvas9');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context9 = canvas9.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas9() {
      canvas9.width = window.innerWidth;
      canvas9.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas9, false);
    resizeCanvas9();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas9.addEventListener('click', onCheckClick9, false);
    canvas9.addEventListener('touchstart', canvas9_touchStart, false);
    canvas9.addEventListener('touchend', canvas9_touchEnd, false);
    canvas9.addEventListener('touchmove', canvas9_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick9(beiclick) {
      var x = beiclick.clientX - canvas9.offsetLeft;
      var y = beiclick.clientY - canvas9.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context9 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context9,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context9.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context9.lineCap = "round";
      //gfüllte Linie zeichnen
      context9.beginPath();
      //zuerst gehe zur letzten touch-Position
      context9.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context9.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context9.lineWidth = size;
      context9.stroke();
      context9.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas9_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context9,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas9_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context9.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[8].draw(context9);
      aepfel[9].draw(context9);
      blumen[2].draw(context9);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[8][j].draw(context9);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas9_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context9,touchX,touchY,12);
      if(aepfel[9].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe9').style.display='block';
        document.getElementById('gewonnenRaupe9').style.zIndex = 100;
        document.getElementById('buttonLevel9').style.display='none';
        document.getElementById('buttonLevel9').style.zIndex=0;
        document.getElementById('buttonLevel10').style.display='block';
        document.getElementById('buttonLevel10').style.zIndex=101;
        TTS.speak({
          text: 'Das koennte der letzte Apfel sein',
          locale: 'de-DE',
          rate: 1
        });
      };
      if(blumen[2].beruehre(touchX,touchY)==1){
        document.getElementById('verlorenRaupe9').style.display='block';
        document.getElementById('verlorenRaupe9').style.zIndex = 100;
        document.getElementById('buttonLevel9wiederholen').style.display='block';
        document.getElementById('buttonLevel9wiederholen').style.zIndex=101;
        TTS.speak({
          text: 'Oh da war eine boese Blume!',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[8][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Au, fast geschafft',
              locale: 'de-DE',
              rate: 1
            });
            context9.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe9').style.display='block';
            document.getElementById('verlorenRaupe9').style.zIndex = 100;
            document.getElementById('buttonLevel9wiederholen').style.display='block';
            document.getElementById('buttonLevel9wiederholen').style.zIndex=101;
          }
        }
      };
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * dem level9Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel9").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Ich werde immer groesser',
        locale: 'de-DE',
        rate: 1
      });
      context9.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe9').style.display='none';
      document.getElementById('gewonnenRaupe9').style.zIndex = 0;
      document.getElementById('buttonLevel9').style.display='none';
      document.getElementById('buttonLevel9').style.zIndex=-1;

      raupen[8].draw(context9);
      aepfel[9].draw(context9);
      blumen[2].draw(context9);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[8][j].draw(context9);
        }
      };
    });

    /**
    * dem level9wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel9wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Aber diesmal',
        locale: 'de-DE',
        rate: 1
      });
      context9.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe9').style.display='none';
      document.getElementById('verlorenRaupe9').style.zIndex = 0;
      document.getElementById('buttonLevel9wiederholen').style.display='none';
      document.getElementById('buttonLevel9wiederholen').style.zIndex=-1;
      raupen[8].draw(context9);
      aepfel[9].draw(context9);
      blumen[2].draw(context9);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[8][j].draw(context9);
        }
      };
    });

/*********************************************************************************
  Level 10
/*********************************************************************************/
    // Variablen zur Referenzierung des Canvas- und 2D-canvas-Kontext
    /**
    * Variable die die ID des Canvas abfrägt
    * @type {Element}
    */
    var canvas10 = document.getElementById('canvas10');
    /**
    * Variable die den Kontext des Canvas abfrägt
    * @type {Element}
    */
    var context10 = canvas10.getContext('2d');
    //Canvas auf Bildschirmgröße anpassen
    /**
    * Canvas Anpassung des Spiels an die jeweilige Screengröße durch Abgleich von Höhe und Breite des Fensters
    */
    function resizeCanvas10() {
      canvas10.width = window.innerWidth;
      canvas10.height = window.innerHeight;
    }

    //Event-Listener, der bei Änderung des App-Fensters aktiv wird
    /**
    * Hinzufügen eines EventListeners, der auf Screengrößenveränderung reagiert
    */
    window.addEventListener('resize', resizeCanvas10, false);
    resizeCanvas10();

    //Event-Listener, die auf click und touch reagieren
    /**
    * Hinzufügen von EventListenern, die auf click und touch reagieren
    */
    canvas10.addEventListener('click', onCheckClick10, false);
    canvas10.addEventListener('touchstart', canvas10_touchStart, false);
    canvas10.addEventListener('touchend', canvas10_touchEnd, false);
    canvas10.addEventListener('touchmove', canvas10_touchMove, false);

    /**
    * gleicht die Klickkoordinaten des Benutzers mit dem Canvas ab
    */
    function onCheckClick10(beiclickev) {
      var x = beiclick.clientX - canvas10.offsetLeft;
      var y = beiclick.clientY - canvas10.offsetTop;
    }

    //Funktion, die die Linie bei touch-Bewegung zeichnet
    /**
    * zeichnet die Linie, die der Benutzer durch touchen malt
    * @param context10 bestimmt das Canvas, auf dem gezeichnet wird
    * @param x x-Koordinate des letzten touch-Punktes
    * @param y y-Koordinate des letzten touch-Punktes
    * @param size legt die Dicke der Linie fest
    */
    function drawLine(context10,x,y,size) {
      //wenn die letzte x-Poistion nicht bekannt ist, setzte lastX und lastY auf derzeitige Position
      if (lastX==-1) {
        lastX=x;
        lastY=y;
      }
      //Variablen für die Farben der Linie
      /**
      *Variable für die Sättigung des Farbtons der Linie
      *@type {Number}
      */
      var sat=100;
      /**
      *Variable für die Helligkeit des Farbtons der Linie
      *@type {Number}
      */
      var lum=50;
      /**
      *Variable für die zufällige Farbe der Linie
      *@type {Number}
      */
      var a=255;
      hue+=2;

      if (hue>360) {
        hue = 0;
      }
      context10.strokeStyle = "hsla("+hue+","+sat+"%,"+lum+"%,"+(a/255)+")";
      //Linienenden auf rund setzen
      context10.lineCap = "round";
      //gfüllte Linie zeichnen
      context10.beginPath();
      //zuerst gehe zur letzten touch-Position
      context10.moveTo(lastX,lastY);
      //dann zeichne eine Linie zur derzeitigen touch-Position
      context10.lineTo(x,y);
      //Liniendicke festlegen und die Linie zeichnen
      context10.lineWidth = size;
      context10.stroke();
      context10.closePath();
      //aktualisiere die letzte touch-Position auf die derzeitige
      lastX=x;
      lastY=y;
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den startpunkt der Linie fest, beim Beginn des Touchens
    */
    function canvas10_touchStart() {
      /**
      * Variable für die x-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchX;
      /**
      * Variable für die y-Koordinate des Touch-Starts
      *@type {Number}
      */
      var touchY;
      //aktualisiere touch-Koordinaten
      /**
      * aktualisiert die touch-Koordinaten
      */
      getTouchPos();
      //Beginne die Linie
      /**
      * beginnt die Linie zu zeichnen am Start-Punkt
      */
      drawLine(context10,touchX,touchY,12);
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt den Endpunkt der Linie fest, beim Ende des Touchens
    */
    function canvas10_touchEnd() {
      //lastX and lastY auf -1 zurücksetzen, um anzuzeigen, dass sie jetzt ungültig sind
      lastX=-1;
      lastY=-1;
      context10.clearRect(0, 0, window.innerWidth, window.innerHeight);
      raupen[9].draw(context10);
      aepfel[10].draw(context10);
      blumen[3].draw(context10);
      for (/**@type {Number} */ var i in gebiete){
        for(/**@type {Number} */ var j in gebiete[i]){
          gebiete[9][j].draw(context10);
        }
      };
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * legt fest, wo die Linie während der Bewegung des Nutzers durch Touch gezeichnet wird
    * @param touchPosition aktuelle Touch-Position
    */
    function canvas10_touchMove(touchPosition) {
      //aktualisiere die touch-Koordinaten
      getTouchPos(touchPosition);
      drawLine(context10,touchX,touchY,12);
      if(aepfel[10].beruehre(lastX,lastY)==1){
        document.getElementById('gewonnenRaupe10').style.display='block';
        document.getElementById('gewonnenRaupe10').style.zIndex = 100;
        document.getElementById('buttonLevel10').style.display='none';
        document.getElementById('buttonLevel10').style.zIndex=0;
        document.getElementById('buttonEnde').style.display='block';
        document.getElementById('buttonEnde').style.zIndex=110;
        TTS.speak({
          text: 'Der Apfel war aber gut! Ich fuehle mich sooo gross tippe doch mal auf den letzten Apfel um zu sehen wie ich jetzt aussehe!',
          locale: 'de-DE',
          voice: 'Google UK English Male',
          rate: 1
        });
      };
      if(blumen[3].beruehre(touchX,touchY)==1){
        document.getElementById('verlorenRaupe10').style.display='block';
        document.getElementById('verlorenRaupe10').style.zIndex = 100;
        document.getElementById('buttonLevel10wiederholen').style.display='block';
        document.getElementById('buttonLevel10wiederholen').style.zIndex=101;
        TTS.speak({
          text: 'Au, Blumen tun weh',
          locale: 'de-DE',
          rate: 1
        });
      };

      //für jede Blume die berührt wird, zeige verlorenRaupe-Bild und restarte das Level
      //Schleifeninhalt entspricht dem der Gebiets-for-Schleife
      for(/**@type {Number} */ let i=0; i < gebiete.length; i++){
        for(/**@type {Number} */ let j=0; j < gebiete[i].length; j++){
          if(gebiete[9][j].beruehre(touchX,touchY)==1){
            TTS.speak({
              text: 'Autsch',
              locale: 'de-DE',
              rate: 1
            });
            context10.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('verlorenRaupe10').style.display='block';
            document.getElementById('verlorenRaupe10').style.zIndex = 100;
            document.getElementById('buttonLevel10wiederholen').style.display='block';
            document.getElementById('buttonLevel10wiederholen').style.zIndex=101;
          }
        }
      };
      //verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      /**
      * verhindere, dass ein zusätzliches Ereignis ausgelöst wird
      */
      event.preventDefault();
    }

    /**
    * dem level10Button Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel10").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Schau mal wie schoen dieser Apfel ist!',
        locale: 'de-DE',
        rate: 1
      });
      context10.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('gewonnenRaupe10').style.display='none';
      document.getElementById('gewonnenRaupe10').style.zIndex = 0;
      document.getElementById('buttonLevel10').style.display='none';
      document.getElementById('buttonLevel10').style.zIndex=-1;

      raupen[9].draw(context10);
      aepfel[10].draw(context10);
      blumen[3].draw(context10);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[9][j].draw(context10);
        }
      };
    });

    /**
    * dem Level10wiederholenButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonLevel10wiederholen").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Gemeinsam kommen wir zum Apfel',
        locale: 'de-DE',
        rate: 1
      });
      context10.clearRect(0, 0, window.innerWidth, window.innerHeight);
      document.getElementById('verlorenRaupe10').style.display='none';
      document.getElementById('verlorenRaupe10').style.zIndex = 0;
      document.getElementById('buttonLevel10wiederholen').style.display='none';
      document.getElementById('buttonLevel10wiederholen').style.zIndex=-1;
      raupen[9].draw(context10);
      aepfel[10].draw(context10);
      blumen[3].draw(context10);
      for (var i in gebiete){
        for(var j in gebiete[i]){
          gebiete[9][j].draw(context10);
        }
      };
    });

    /**
    * dem EndeButton Aktionen geben, die bei Klicken auf ihn ausgelöst werden
    *@param {JQuery} event
    *@param {JQuery} ui
    */
    $("#buttonEnde").bind( "click", function(event, ui) {
      TTS.speak({
        text: 'Sieh doch was fuer ein wunderschoener Schmetterling ich geworden bin! Dankeschoen, jetzt kann ich endlich mit meinen Geschwistern mitfliegen!',
        locale: 'de-DE',
        rate: 1
      });
      context10.clearRect(0, 0, window.innerWidth, window.innerHeight);
    });
