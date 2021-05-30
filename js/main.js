$(function () {
    var name_ui = [];
    var data = '';
    var str = '';
    var type_char = '';
    const map = new Map();


    $('#btn-name').click(function (e) {
        e.preventDefault();

        data = $('#in-name').val();
        alert('click btn name!!!!' + data);
        for (let i = 0; i < data.length; i++) {

            str += '<td>' + data[i] + '</td>';
            if (isVowel(data[i])) {
                type_char += '<td style="color:green">Vocal</td>';
            } else if (isNumeric(data[i])) {
                type_char += '<td style="color:red;">Número</td>';
            } else {
                type_char += '<td style="color:yellow">Consonante</td>';
            }
            name_ui.push(data[i]);
            //Crear un map
            let l = data[i].toUpperCase();
            map.set(l, 0);
            let count = 1;
            name_ui.forEach(letter => {
                let l_compare = letter.toUpperCase();
                if (l == l_compare) {
                    map.set(l, count);
                    count++;
                }
            })
        }
        //iterar todos los valores
        for (const [k, v] of map.entries()) {
            console.log('KEY ----> ' + k, ' VALUE ----> ' + v)
        }
        console.log('map---> ' + map);
        console.log('name characters ----> ' + name_ui);
        console.log('str-----> ' + str);
        $('.tr-chars').append(str);
        $('.tr-type').append(type_char);
        $('#in-name').val('');
        str = '';

    })


    //Nivell 1 exercici 1
    // let name = ['O', 'l', 'i', 'v', 'e', 'r'];
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }
    // name.forEach(letter => {
    //     //Nivell 1 exercici 2
    //     if (isVowel(letter)) {
    //         console.log(letter + '__ es una vocal!');
    //     } else if (isNumeric(letter)) {
    //         console.log(letter + '__ el nombre no puede contener números!');
    //     } else {
    //         console.log(letter + '__ es una consonante!');
    //     }
    // });

    //Nivell 1 exercici 3
    // const map = new Map();
    // name.forEach(letter => {
    //     let l = letter.toUpperCase();
    //     map.set(l, 0);
    //     let count = 1;
    //     name.forEach(l_compare => {
    //         let compare = l_compare.toUpperCase();
    //         if (compare == l) {
    //             map.set(l, count);
    //             count++;
    //         }
    //     })
    // });

    //iterar todos los valores
    // for (const [k, v] of map.entries()) {
    //     console.log('KEY ----> ' + k, ' VALUE ----> ' + v)
    // }

    //Nivell 1 exercici 4
    // let surname = ['A', 'b', 'a', 'd'];
    // let fullName = name;
    // fullName.push(" ");
    // surname.forEach(sn_letter => {
    //     fullName.push(sn_letter);
    // })
    // console.log(fullName);

    //Nivell 2 exercici 5
    // var randomNumber = Math.floor(Math.random() * textArray.length);
    // var listEmails = ['oliverabad18@yahoo.es', 'oliwon79@gmail.com', 'oabadch@gmail.com'];
    // var email = 'juanmanuel45@yahoo.es';
    // if (validateEmail(email)) {
    //     if (emailExists(email)) {
    //         console.log('El email introducido ya existe!');
    //     } else {
    //         console.log('Crear email ya que el formato es correcto y no ha sido creado previamente.');
    //         let emails = createEmail(email);
    //         console.log('Lista de emails creados---> ' + emails);
    //         console.log('Borramos el email creado---> ');
    //         deleteEmail(emails, email);
    //         console.log('Lista de emails donde no aparece el elemento creado ya que ha sido borrado----> ' + emails);
    //     }

    // } else {
    //     console.log('el email introducido no tienen el formato correcto!');
    // }

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


    function validateEmail(email) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(mailformat)) {
            // alert("Valid email address!");
            return true;
        }
        else {
            // alert("You have entered an invalid email address!");
            return false;
        }

    }

    function getAllEmail(listEmails) {
        listEmails.forEach(email => {
            console.log(email);
        })
    }

    function createEmail(email) {
        // let listEmails = ['oliverabad18@yahoo.es', 'oliwon79@gmail.com', 'oabadch@gmail.com'];
        listEmails.push(email);
        return listEmails;
    }

    function emailExists(email) {
        let exist = false;
        let i = 0;
        while (i < listEmails.length && exist == false) {
            if (listEmails[i] == email) {
                exist = true;
            }
            console.log('entra en el while');
            i++;
        }
        return exist
    }

    function deleteEmail(emails, email) {
        var index = emails.indexOf(email);
        console.log('index---> ' + index);
        if (index > -1) {
            emails.splice(index, 1);
        }
    }

})

