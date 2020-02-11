var a = ".... . .-.. .--.   -- .   -.-.--";
    //➞ "HELP ME !"
var b = "-.-. .... .- .-.. .-.. . -. --. ."; 
    //➞ "CHALLENGE"
var c = ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."; 
    //➞ "EDABBIT CHALLENGE"


function decodeMorse(str) {
    let morseCode = {
        "-----" : "0",
        ".----" : "1",
        "..---" : "2",
        "...--" : "3",
        "....-" : "4",
        "....." : "5",
        "-...." : "6",
        "--..." : "7",
        "---.." : "8",
        "----." : "9",
        ".-" : "a",
        "-..." : "b",
        "-.-." : "c",
        "-.." : "d",
        "." : "e",
        "..-." : "f",
        "--." : "g",
        "...." : "h",
        ".." : "i",
        ".---" : "j",
        "-.-" : "k",
        ".-.." : "l",
        "--" : "m",
        "-." : "n",
        "---" : "o",
        ".--." : "p",
        "--.-" : "q",
        ".-." : "r",
        "..." : "s",
        "-" : "t",
        "..-" : "u",
        "...-" : "v",
        ".--" : "w",
        "-..-" : "x",
        "-.--" : "y",
        "--.." : "z",
        ".-.-.-" : ".",
        "--..--" : ",",
        "..--.." : "?",
        "-.-.--" : "!",
        "-....-" : "-",
        "-..-." : "/",
        ".--.-." : "@",
        "-.--." : "(",
        "-.--.-" : ")",
        "" : " ",
        "---..." : ":",
        ".----." : "'",
    }
    
    var dicoEntree = Object.keys(morseCode);
    var dicoSortie = Object.values(morseCode);
    var arrStr = str.split(' ');
    var strSortie = [];

    function toLetter(str){
        
        for (let i=0; i<dicoEntree.length; i++){
            dicoEntree[i].valueOf() === dicoSortie[i].valueOf();
            if(str === dicoEntree[i]){
                strSortie.push(dicoSortie[i].valueOf());
            }
        }
        
    }
    arrStr.map(item => toLetter(item))
    var strFinale = strSortie.join('').toLocaleUpperCase();
        console.log(strFinale)
        return strFinale
}

decodeMorse(a)