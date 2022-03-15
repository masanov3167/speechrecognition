var btnRec = document.querySelector(".btn")


var record = new webkitSpeechRecognition();

record.lang = "uz-UZ";



btnRec.addEventListener("click" , function(){
  record.start();

})

var todos = [];

record.onresult = function(evt){

    var commands = evt.results[0][0].transcript;
  
    // var liItem = document.createElement("li");
    //  liItem.textContent = commands;
    //  document.getElementById("list").appendChild(liItem);

    todos.push({
        id: todos.length + 1,
        title: commands,
    });

    document.getElementById("list").innerHTML = "";

    for(var todo of todos){
        var liItem = document.createElement("li");
        liItem.textContent = `${todo.id}: ${todo.title}`;
        document.getElementById("list").appendChild(liItem);
    }

    console.log(todos);
}

