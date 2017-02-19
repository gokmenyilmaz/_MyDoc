````
 for (i = 0; i < liste.length; i++) {
            liste[i].addEventListener("animationend", function(e){
            if(e.animationName=="currentLeft-anim" || e.animationName=="currentRight-anim"){
                    for (i = 0; i < liste.length; i++) {
                    liste[i].classList.remove("oldLeft", "oldRight");
                }
            };
        
        }, false);
        
    }

````
