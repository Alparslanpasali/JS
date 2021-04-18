let guess_counter = 0 ;

const random_number = Math.floor(Math.random() * 100 + 1);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function(event) {
    if(event.keyCode === 13)
    checkNumber()
}); 

    // kullanıcının enter tusu ile giris yapmasını saglıyoruz.
    // keyup tusa basma event idir. 
    // keycode(13) ise enter tusunun kodudur(keycode her tus için değişir). 


function checkNumber() {
    
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    

    if(userInputElement.value == random_number) {
        
        alert("You are the winner!Guess time: " + ++guess_counter );
        guess_counter = 0;

    } else if(userInputElement.value == ""){
        answerLabelElement.innerText = "Enter a number!"
    } else if (userInputElement.value > random_number){
        guess_counter++;
        document.querySelector("#count_it").innerText = `Guess count is : ${guess_counter}`;
        answerLabelElement.innerText = "Try a lower number!"
    } else if (userInputElement.value < random_number){
        guess_counter++;
        document.querySelector("#count_it").innerText = `Guess count is : ${guess_counter}`;
        answerLabelElement.innerText = "Try a higher number!"
    } else if(isNaN(userInputElement.value)){
        answerLabelElement.innerText = "It is not a number!"
    }

    userInputElement.focus(); //input a odaklanması sağlanır.
    userInputElement.value = ""; //her denemede input sıfırlanır.

};
