//function InputbyUser(input){
//    let userinput = input.toLowerCase(input);
  //  return userinput;
   // }

   let gamescore = 0;
  function ComputerInput(){
     let computeroptions = ["rock","paper","scissors"]; 
     let computerchoice = computeroptions[Math.floor(Math.random() * computeroptions.length)]; 
     return computerchoice;
     }

  function gameEngine(userchoice, computerchoice){
      let gamecondition = userchoice +" "+ computerchoice;
      
      let winConditions = ["rock scissors", "paper rock", "scissors paper"];
      let loseMessage = "you lost bro";

      for (let i=0; i<4 ; i++){
        if (gamecondition == winConditions[i]){
            let winMessage = "you bloody won";
            gamescore ++ ; 
            return winMessage;
        }
        else if(userchoice == computerchoice) return "its a tie"; 
        }
      return loseMessage;
    }

    

  function Playgame(userInput){
    
    let computerchoice = ComputerInput();
    let results = gameEngine (userInput, computerchoice);
    alert (`computer chose ${computerchoice}`);
    
    
    alert(results);
    const Printresults = document.querySelector('#results');
    Printresults.textContent=`This round result : ${results}`; 
    const points = document.createElement('p');
    console.log(gamescore);
    points.textContent= `ur score ${gamescore}`;
    Printresults.appendChild(points);
    
  }



    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
         Playgame(button.id);
        });
    });
   
    
    