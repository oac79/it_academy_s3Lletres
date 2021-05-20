$(function () {
    //Nivell 1 exercici 1
    let name = ['O', 'l', 'i', 'v', 'e', 'r', '7', '9'];
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }
    name.forEach(letter => {
        if (isVowel(letter)) {
            console.log(letter + '__ es una vocal!');
        } else if (isNumeric(letter)) {
            console.log(letter + '__ el nombre no puede contener números!');
        } else {
            console.log(letter + '__ es una consonante!');
        }
    });


})

function isVowel(letter) {
    let letterLower = letter.toLowerCase();
    if (letterLower == 'a' || letterLower == 'e' || letterLower == 'i' || letterLower == 'o' || letterLower == 'u') {
        return true;
    }
    return false;
}

function isNumeric(letter) {
    for (let i = 0; i <= 9; i++) {
        if (letter == i) {
            return true;
        }
    }
    return false;
}