let isEverOwn = prompt("have you previously bought a Tesla ?")
        let isAmerican = prompt("Are you US citizen ?")
        if(isEverOwn == 1){
            let HowAgo = prompt("Year Of Tesla Purchase ?")
            var today = new Date();
            var yyyy = today.getFullYear();
            HowAgo = yyyy - HowAgo;
            if (HowAgo > 4) {
                console.log("Would like to upgrade ?");
            } else {
                console.log("Are you satisfied with the car ?");
            }
            if( isAmerican == "0"){
                console.log("would like to move to the US ?");
            }
        }
        else {
            console.log("whether they are interested in buying one ?");
        }