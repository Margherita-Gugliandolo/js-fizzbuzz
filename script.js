// scrivi un programma che stampi i numeri da 1
// a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.

for (i=1; i<=100; i++) {
  var stampa;

if(i%3==0 && i%5 == 0){
	stampa = "FizzBuzz";
} else if (i%3 == 0) {
	stampa = "Fizz";
} else if (i%5 == 0) {
	stampa = "Buzz";
} else {
  stampa = i;
}
console.log(stampa);
}
