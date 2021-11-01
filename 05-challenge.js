function removeSpaces(string) {
    let strRemoved = "";
    for (letter of string) {
       // console.log(i)
       if (letter !== " ") {
           strRemoved += letter
       }
    }
    return strRemoved
}

let adele = "Hello from the other side."
console.log(removeSpaces(adele))