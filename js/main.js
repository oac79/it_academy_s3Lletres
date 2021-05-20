$(function () {
    //Nivell 1 exercici 1
    let name = ['O', 'a', 'O', 'A', 'e', 'O', 'I', 'i'];
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }
    name.forEach(letter => {
        //Nivell 1 exercici 2
        if (isVowel(letter)) {
            console.log(letter + '__ es una vocal!');
        } else if (isNumeric(letter)) {
            console.log(letter + '__ el nombre no puede contener números!');
        } else {
            console.log(letter + '__ es una consonante!');
        }
    });

    //Nivell 1 exercici 3
    const map = new Map();
    name.forEach(letter => {
        let l = letter.toUpperCase();
        map.set(l, 0);
        let count = 1;
        name.forEach(l_compare => {
            let compare = l_compare.toUpperCase();
            if (compare == l) {
                map.set(l, count);
                count++;
            }
        })
    });

    //iterar todos los valores
    for (const [k, v] of map.entries()) {
        console.log('KEY ----> ' + k, ' VALUE-----> ' + v)
    }


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