function ageAvarage(monTableau) {
    let moyenneAge = 0;
    let sommeAge = 0;

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

    for (let index=0; index < monTableau.length; index++){
        // console.log(index);
        /**
         *  index = 0
            1) monTableau[0] = 12
            index = 0 + 1 = 1
            2) monTableau[1] = 59
            index = 1 +1 = 2
            3) monTableau[2] = 78
            index = 2 +1 = 3
         *  */
        // console.log(index);
        sommeAge = sommeAge + monTableau[index]
    }
    moyenneAge = sommeAge / monTableau.length
    // console.log('inside function');
    return moyenneAge
}

const lesAges = [12, 15, 35]

const moyenneAgeHorsFonction = ageAvarage(lesAges)
console.log(Math.floor(moyenneAgeHorsFonction));