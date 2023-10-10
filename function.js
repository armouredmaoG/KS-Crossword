var grid = ["rrrrrrrrrrbbb",
            "bbbbbbrbbbbbb",
            "bbbbbbrbbbbbb",
            "bbbbbrrrrrrbb",
            "bbbbbbbbrbbbb",
            "bbbbbbbbrrrrr",
            "bbbbbbbbrbrbb",
            "bbbbbbbbbbrbb",
            "bbbbbbbbbbrbb",
            "bbbbbbbbbbrbb"];

var span_val = {"0,0" : "1",
                "0,6" : "2",
                "3,5" : "3",
                "3,8" : "4",
                "5,8" : "5",
                "5,10" : "6"
            };


var answers = ["JAVASCRIPT---",
               "------U------",
               "------B------",
               "-----PYTHON--",
               "--------T----",
               "--------MYSQL",
               "--------L-C--",
               "----------A--",
               "----------L--",
               "----------A--"];

var gridRows = grid.length;
var gridCols = grid[0].length;
var black = [];
var green = [];

var modal = document.getElementById("")

var textInputForJS = document.getElementById("javascript");
var textInputForRuby = document.getElementById("ruby");

var textInputForPy = document.getElementById("python");

var textInputForHTML = document.getElementById("html");

var textInputForMySQL = document.getElementById("mysql");

var textInputForScala = document.getElementById("scala");



textInputForJS.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    for(let j = 0; j < gridCols; j++){
        var cell = document.querySelectorAll("tr")[0].querySelectorAll("td")[j];
        cell.querySelector("b").textContent = inputValue[j] || "";
    }
});

textInputForRuby.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    var rowsToUpdate = [0, 1, 2, 3];
    var colToUpdate = 6; 

    rowsToUpdate.forEach(function(rowIndex) {
        var cell = document.querySelectorAll("tr")[rowIndex].querySelectorAll("td")[colToUpdate];
        cell.querySelector("b").textContent = inputValue[rowIndex] || "";
    });
});

textInputForPy.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    var rowIndex = 3;
    var startCol = 5; 
    var endCol = 11; 

    for (var colIndex = startCol; colIndex < endCol; colIndex++) {
        var cell = document.querySelectorAll("tr")[rowIndex].querySelectorAll("td")[colIndex];
        cell.querySelector("b").textContent = inputValue[colIndex - startCol] || ""; // Use empty string if no more characters
    }
});

textInputForHTML.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    var startRow = 3;
    var endRow = 6; 
    var colIndex = 8;

    for (var rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
        var cell = document.querySelectorAll("tr")[rowIndex].querySelectorAll("td")[colIndex];
        cell.querySelector("b").textContent = inputValue[rowIndex - startRow] || ""; 
    }
});


textInputForMySQL.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    var rowIndex = 5; 
    var startCol = 8; 
    var endCol = 13; 

    for (var colIndex = startCol; colIndex < endCol; colIndex++) {
        var cell = document.querySelectorAll("tr")[rowIndex].querySelectorAll("td")[colIndex];
        cell.querySelector("b").textContent = inputValue[colIndex - startCol] || "";
    }
});

textInputForScala.addEventListener("input", function() {
    var inputValue = this.value.toUpperCase();
    var startRow = 5; 
    var endRow = 10;
    var colIndex = 10; 

    for (var rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
        var cell = document.querySelectorAll("tr")[rowIndex].querySelectorAll("td")[colIndex];
        cell.querySelector("b").textContent = inputValue[rowIndex - startRow] || ""; 
    }
});

function gridBox(){
    var boxes = "";
    for(let i=0;i<grid.length;i++){
        boxes += "<tr>";
        for(let j=0;j<grid[i].length;j++){
            var s = span_val[i+","+j]??"";
            boxes += `<td onclick="myClick(this)" row="${i}" col="${j}" class=${grid[i][j]}><span class='num'>${s}</span> <b></b></td>`;
        }
        boxes += "</tr>";

    }
    document.getElementById("table").innerHTML = boxes;
}

function setDefaultValue() {

    document.querySelectorAll("tr")[0].querySelectorAll("td")[0].querySelector("b").textContent = "J";
    document.querySelectorAll("tr")[0].querySelectorAll("td")[2].querySelector("b").textContent = "V";
    document.querySelectorAll("tr")[0].querySelectorAll("td")[3].querySelector("b").textContent = "A";
    document.querySelectorAll("tr")[0].querySelectorAll("td")[5].querySelector("b").textContent = "C";
    document.querySelectorAll("tr")[0].querySelectorAll("td")[7].querySelector("b").textContent = "I";
    document.querySelectorAll("tr")[0].querySelectorAll("td")[8].querySelector("b").textContent = "P";

    document.querySelectorAll("tr")[1].querySelectorAll("td")[6].querySelector("b").textContent = "U";

    
    document.querySelectorAll("tr")[3].querySelectorAll("td")[6].querySelector("b").textContent = "Y";
    document.querySelectorAll("tr")[3].querySelectorAll("td")[8].querySelector("b").textContent = "H";
    document.querySelectorAll("tr")[3].querySelectorAll("td")[9].querySelector("b").textContent = "O";

    document.querySelectorAll("tr")[5].querySelectorAll("td")[8].querySelector("b").textContent = "M";
    document.querySelectorAll("tr")[5].querySelectorAll("td")[11].querySelector("b").textContent = "Q";
    document.querySelectorAll("tr")[5].querySelectorAll("td")[10].querySelector("b").textContent = "S";

    document.querySelectorAll("tr")[7].querySelectorAll("td")[10].querySelector("b").textContent = "A";

    document.querySelectorAll("tr")[8].querySelectorAll("td")[10].querySelector("b").textContent = "L";
}

var current = null;
function myClick(box){
    console.log(box.classList.contains("b"));
    if(box.classList.contains("w")){
        //clickable
        if(current!=null){
            current.style.backgroundColor = "white";
        }
        current = box;
        var row = box.getAttribute("row");
        var col = box.getAttribute("col");
        box.style.background = "orange";
    }
}

document.body.onkeydown = function(e){
    console.log(e);
    if(current != null){
        
        if(e.which >= 37 && e.which <= 40){
            // console.log(e.which);
            nextMove(e.which);
        }

        if(e.keyCode >= 65 && e.keyCode <= 90){
            console.log(e.key);
            current.querySelector("b").innerHTML = e.key.toUpperCase();
            nextMove(39);
        }

        if(e.code == '8' || e.code == '32'){
            // console.log(e.which);
            current.querySelector("b").innerHTML = "";
        }
    }
}

function nextMove(code){
    var row = parseInt(current.getAttribute("row"));
    var col = parseInt(current.getAttribute("col"));

    switch(code){
        case 37: //left
            col = col==0 ? gridCols-1 : col-1;
            console.log(col);
            break;
        case 38: //top
            row = row==0 ? gridRows-1 : row-1;
            break;
        case 39: //right
            col = col==gridCols-1 ? 0 : col+1;
            break;
        case 40: //down
            row = row==gridRows-1 ? 0 : row+1;
            break;
        default:
            break;
    }

    if(current.classList.contains("r")){
        current.style.background = "red";
    }

    current = document.querySelectorAll("tr")[row].querySelectorAll("td")[col];
    if (current.classList.contains("b")) {
        nextMove(code);
    } else {
        current.style.background = "orange";
    }
    
}

function key_check(){
    green.splice(0);
    black.splice(0);
    var reds = document.querySelectorAll(".r");
    console.log(reds);
    reds.forEach(el =>{ 
        var text = el.querySelector("b").innerHTML;
        if(text.length > 0){
            var row = el.getAttribute("row");
            var col = el.getAttribute("col");
            console.log(row, col, text, answers[row][col]);
            if(text==answers[row][col]){
                el.style.backgroundColor = "greenyellow";
                green.push(el);
            }else{
                el.style.backgroundColor = "black";
                black.push(el);
            }
        }
        
    });

    if((green.length === reds.length)){
        console.log("You win");
        $('#popupModal').modal('show');
    }
}


gridBox();
setDefaultValue();