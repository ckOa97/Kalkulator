function kalkulator(prviBroj, operator, drugiBroj) {
        
        let result;
    
       if ((parseFloat(prviBroj) == parseFloat(prviBroj)) && (parseFloat(drugiBroj) == parseFloat(drugiBroj))) {

    switch(operator){

        case '+':
            result = parseFloat(prviBroj) + parseFloat(drugiBroj);
            break;

        case '-':
            result = parseFloat(prviBroj) - parseFloat(drugiBroj);
            break;

        case '*':
            result = parseFloat(prviBroj) * parseFloat(drugiBroj);
            break;

        case '/':
            result = parseFloat(prviBroj) / parseFloat(drugiBroj);
            break;

        default:
            throw {name: 'Greska: ' , message: 'operator koji ste uneli nije ispravan, u polje za unos operatora dozvoljeni su sledeci operatori: "+", "-", "*", "/"'}
            break;

    }

    }   
        else if((parseFloat(drugiBroj) == parseFloat(drugiBroj))){
        throw {name:'Greska: ', message:'prvi broj koji ste uneli nije ispravan, u polje za unos brojeva nije dozvoljeno unositi: "slova" i "znakove."'};
    }  
        else if((parseFloat(prviBroj) == parseFloat(prviBroj))){
        throw {name:'Greska: ', message:'drugi broj koji ste uneli nije ispravan, u polje za unos brojeva nije dozvoljeno unositi: "slova" i "znakove."'};
    }
        else {
        throw {name:'Greska: ', message:'brojevi koje ste uneli nisu ispravni, u polje za unos brojeva nije dozvoljeno unositi: "slova" i "znakove."'};
    }

    return result;
}

    try {
        let rezultat = kalkulator(prompt('Unesite prvi broj:'), prompt('Unesite operator:'), prompt('Unesite drugi broj:'));
        alert('Konacan rezultat je: ' + rezultat)
        document.writeln('<h1>');
        document.writeln('Konacan rezultat je: ' + rezultat);
    }
    catch(greska){
        alert(greska.name + greska.message)
        document.writeln('<h1>');
        document.writeln(greska.name + greska.message);
    }