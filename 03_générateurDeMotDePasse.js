// on déclare 4 variables tableaux chacunes différentes 
const character = "acdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"
const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "123456789"
const symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"

//  on déclare une variable password vide pour la modifier avec une fonction
let password ="";
// la fonction va piocher 5 caractères dans la première constante puis 1 dans la 2ème, 1 dans la 3ème et 1 dans la 4ème afin d'avoir 
// les conditions de caractères spéciaux (MAJ/NUMERO/SYMBOLE)
function generatePassword(){
    for (let i=0; i<5; i++){
        password += character[Math.floor(Math.random()* character.length)]
        }
        password += maj[Math.floor(Math.random()* maj.length)]
        password += numbers[Math.floor(Math.random()* numbers.length)]
        password += symbols[Math.floor(Math.random()* symbols.length)]
    return shuffle(password);
}
// Le shuffle va prendre chaque variable et les mélanger pour éviter d'avoir tout le temps le meme ordre de caractères 
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }
// afficher le mot de passe avec la fonction du générateur de mot de passe
console.log(generatePassword())