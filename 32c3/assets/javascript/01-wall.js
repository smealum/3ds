window.addEvent("domready", function(){
    colors = ["#730046", "#BFBB11", "#FFC200", "#E88801", "#C93C00"];
    var counterFluid = 0;
    var images = ["CXO1GBUWEAEUrnS.png", "CXOy83uWQAE1CXt.jpg", "hbmenu2.png", "tictac.png", "Handy3DS_2.png", "100.png", "insect2.png", "bear.png", "love.png", "snoop.png", "../CXPtYt6WMAEbd4G.png", "bj1.png", "re2.png", "quake2.png", "PfjvwNG.gif", "trucmuche.png", "chmm.png", "im.png", "scr3.gif", "CXPD44ZWYAAbjIj.png", "grid.png", "bj2.png", "mhx.png", "mk71.png", "portal2.png", "hbmenu.png", "2048.png", "insect.png", "ftbrony.png", "CXPD471WwAE_E26.png", "killerman.png", "pkmn.png", "portal.png", "CXOy83uW8AAzTAO.jpg", "chmm2.png", "sand.png", "shuffle.png", "tictac2.png", "CXOy83xWEAAEPln.jpg", "trucmuche2.png", "killerman2.png", "CXOy83xWEAAEPln_2.jpg", "NgqzFHI.png", "doom.png", "mk7.png", "quake.png", "yvsseya.gif", "pkmn2.png"];
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var mywall = new Wall("wall", {
                    "draggable":true,
                    "inertia":true,
                    "width":280,
                    "height":280*240/400,
                    "printCoordinates":false,
                    "rangex":[-300,300],
                    "rangey":[-300,300],
       //              callOnUpdate: function(items){
       //                  items.each(function(e, i){
       //                      // If use concole log
       //                      // console.log("x:" + e.x + "\t y:"+e.y);
       //                      // On Update set different color background
       //                      e.node.setStyle("background",colors[ Math.floor(Math.random()*colors.length) ]);
							// e.node.fade("hide").fade("in")
       //                  }.bind(this));
       //              }

                    callOnUpdate: function(items){
                        items.each(function(e, i){
                            var a = new Element("img[src=pic/hb/"+images[counterFluid]+"]");
                            // var a = new Element("img[src=pic/hb/"+images[getRandomInt(0, images.length - 1)]+"]");
                                a.inject(e.node).fade("hide").fade("in");
                            counterFluid++;
                            // Reset counter
                            if( counterFluid >= images.length ) counterFluid = getRandomInt(0, 3);
                        })
                    }
                });
    // Init Wall
    mywall.initWall();
});