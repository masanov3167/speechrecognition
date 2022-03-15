document.body.innerHTML = "<!-- card container -->"

var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

var card = document.createElement("div");
card.classList.add("card","display-none");
container.appendChild(card);

var cardHeader = document.createElement("div");
cardHeader.classList.add("card-header");
card.appendChild(cardHeader);

for (var cards of cardArr){
    var cardImg = document.createElement("img");
    cardImg.classList.add("card-header-img");
    cardImg.setAttribute("src", cards.img);
    cardImg.setAttribute("alt", "user img");

    var cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-header-title");
    cardTitle.textContent = cards.title;

    cardHeader.appendChild(cardImg);
    cardHeader.appendChild(cardTitle);
}

var cardBody = document.createElement("div");
cardBody.classList.add("card-body");
card.appendChild(cardBody);

var startChat = document.createElement("span");
startChat.classList.add("card-body-chat","display-none");
startChat.textContent = "succesfully started";
cardBody.appendChild(startChat);

var cardFooter = document.createElement("div");
cardFooter.classList.add("card-footer");
card.appendChild(cardFooter);

var cardFooterRec = document.createElement("div");
cardFooterRec.classList.add("card-footer-rec");
cardFooter.appendChild(cardFooterRec);


var rec = new webkitSpeechRecognition();
rec.lang = "en-US";
rec.start();


rec.onresult = function(evt){
    var commands = evt.results[0][0].transcript;
    
    for(var openArr of openArray){
        if(commands.includes(openArr)){
            card.classList.remove("display-none");
            card.classList.add("display-block");
        }
    }
}

cardFooterRec.addEventListener("click", function(){
    rec.start();
    rec.lang = "en-US";

    rec.onresult = function(evt){
        var command = evt.results[0][0].transcript;
        
        for(var startChatArr of startChatArray){
        
            if(command.includes(startChatArr)){
                startChat.classList.remove("display-none");
                startChat.classList.add("display-block");
            }
        }

        for(var helloArr of helloArray){
        
            if(command.includes(helloArr)){
                var myMesage = document.createElement("h4");
                myMesage.textContent = command;
                myMesage.classList.add("my-message");
                cardBody.appendChild(myMesage);

                var friendMessage = document.createElement("h5");
                friendMessage.classList.add("friend-message");
                friendMessage.textContent = "Hello, how are you?";
                cardBody.appendChild(friendMessage);
            }
        }

        for(var conditionArr of conditionArray){
        
            if(command.includes(conditionArr)){
                var myMesage = document.createElement("h4");
                myMesage.textContent = command;
                myMesage.classList.add("my-message");
                cardBody.appendChild(myMesage);

                var friendMessage = document.createElement("h5");
                friendMessage.classList.add("friend-message");
                friendMessage.textContent = "Oh, I am fine too!";
                cardBody.appendChild(friendMessage);
            }
        }

        for(var goodbyeArr of goodbyeArray){
        
            if(command.includes(goodbyeArr)){
                var myMesage = document.createElement("h4");
                myMesage.textContent = command;
                myMesage.classList.add("my-message");
                cardBody.appendChild(myMesage);

                var friendMessage = document.createElement("h5");
                friendMessage.classList.add("friend-message");
                friendMessage.textContent = "Ok, see you later!";
                cardBody.appendChild(friendMessage);
            }
        }

        for(var closeChatArr of closeChatArray){
        
            if(command.includes(closeChatArr)){
                // startChat.textContent = "succesfully closed";
                card.classList.remove("display-block");
                card.classList.add("display-none");
            }
        }
    }
});
