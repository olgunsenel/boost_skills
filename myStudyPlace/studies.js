// girilen sayilarin ortalamasi cift olana kadar sayi isteyen while dongusu yap

let entry, sum, counter, avg;

sum = 0;
counter = 0;
avg = 1;

while (avg % 2 !== 0) {
  entry = Number(prompt(`Enter a number: `));
  counter += 1
  sum += entry;
  avg = sum / counter;
}

console.log(avg);

// 1.57'nci dakika