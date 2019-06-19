      function Make(){


       // MakeText();

        controls.minPos     = -148;
        controls.maxPos     =  0;
        controls.multiplier =  .00001;// * textParticles.totalHeight;
        controls.dampening  = .95;


       // FadeLoop(G.audio.buffers.enviornment1.buffer, 0.1 , .2 , -.2 , -120, -135 );

/*
        links = [];
        for( var i = 0; i < linkInfo.length; i++ ){

         links[i] = new Link(font , linkInfo[i].title ,linkInfo[i].href  );
         links[i].add( new THREE.Vector3( 0,-i*.15 - 147.3, 0));

        }
*/

        var names = [
        "Aleksandar Rodic" , 
        "Ben Formaker-Olivas" , 
        "Benjamin Yoshiwara",
        "Brett Taranda",
        "Chris Coleman",
        "David Edelhart",
        "David Sykora",
        "Eddie Lee",
        "Keith Bradner",
        "Kevaid",
        "Kyle Qian",
        "Max",
        "Nathan Askew",
        "Pat Monaghan",
        "Phil Chacko",
        "Richard Enlow",
        "Robert Long",
        "Toby Schachman",
        "Tom Lieber",
        "Trevor Flowers",
        ]



        var oX; var x;
        for( var i = 0; i < names.length; i++ ){

          x = getX(oX); 
          var l = new THREE.Vector3( x , -1.8 * i-2, -Math.random()*2-1.2);
          InitName(names[i],l);

          oX = x;
        }


        controls.minPos     = -names.length * 1.8 -5;


        // SNOW top!
        var pf = ParticleField( 1000 , 0 , controls.minPos , 3 , 100 );
        scene.add( pf );
     


      }

      function getX(oX){
        var x = (Math.random() - .5) * 2;
        if( Math.abs(x - oX) < 1 ){
                  return getX(oX);
          }else{
            return x;
          }

      }