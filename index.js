function isLeapYear(year) {
   if (year % 4 === 0) {
     if (year % 100 === 0) {
       if (year % 400 === 0) {
         return `${year} est une année bissextile.`;
       } else {
         return `${year} n'est pas une année bissextile.`;
       }
     } else {
       return `${year} est une année bissextile.`;
     }
   } else {
     return `${year} n'est pas une année bissextile.`;
   }
 }
 
 // Exemple
 console.log(isLeapYear(2024)); // Résultat: 2024 est une année bissextile.
 console.log(isLeapYear(1900)); // Résultat: 1900 n'est pas une année bissextile.
 console.log(isLeapYear(2000)); // Résultat: 2000 est une année bissextile.

 

 function ticketPrice(age) {
   if (age <= 12) {
     return "Le prix est de 10 $ (Enfant).";
   } else if (age >= 13 && age <= 17) {
     return "Le prix est de 15 $ (Adolescent).";
   } else {
     return "Le prix est de 20 $ (Adulte).";
   }
 }
 
 // Exemple
 console.log(ticketPrice(10)); // Résultat: Le prix est de 10 $ (Enfant).
 console.log(ticketPrice(15)); // Résultat: Le prix est de 15 $ (Adolescent).
 console.log(ticketPrice(25)); // Résultat: Le prix est de 20 $ (Adulte).

 
 function fibonacci(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 // Exemple
 console.log(fibonacci(6)); // Résultat: 8 (séquence: 0, 1, 1, 2, 3, 5, 8)
 console.log(fibonacci(10)); // Résultat: 55

 
 function fibonacci(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 // Exemple
 console.log(fibonacci(6)); // Résultat: 8 (séquence: 0, 1, 1, 2, 3, 5, 8)
 console.log(fibonacci(10)); // Résultat: 55

 


 function isPalindrome(str) {
   // Nettoyer la chaîne en supprimant les espaces, la ponctuation, et en mettant en minuscule
   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
   const length = cleanStr.length;
 
   // Fonction récursive interne
   function checkPalindrome(start, end) {
     if (start >= end) return true; // Base: Si on atteint le centre, c'est un palindrome
     if (cleanStr[start] !== cleanStr[end]) return false; // Base: Si les caractères diffèrent, ce n'est pas un palindrome
     return checkPalindrome(start + 1, end - 1); // Récursion
   }
 
   return checkPalindrome(0, length - 1);
 }
 
 // Exemple
 console.log(isPalindrome("A man, a plan, a canal: Panama")); // Résultat: true
 console.log(isPalindrome("hello")); // Résultat: false
 console.log(isPalindrome("madam")); // Résultat: true
 