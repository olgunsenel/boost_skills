console.log("JS Modules is running");

<<<<<<< HEAD
<<<<<<< HEAD

import karesi, {WHW, dec, inc, sum, counter} from `./mymodule.js`;

console.log(`WHW : >>, WHW`);
=======
=======
>>>>>>> cf16bf3420f42f821e134cd3bbe6d547b77f0181
import karesi, {
  WHW as W,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";
import ugurla, { selam } from "./module2.js";

// import { default as karesi, WHW, WORKING_HOURS_WEEK, dec, inc, sum, counter } from './mymodule.js';

// console.log("W :>> ", W);
// console.log("WORKING_HOURS_WEEK :>> ", WORKING_HOURS_WEEK);
// console.log("karesi(4) :>> ", karesi(4));

inc(4);
inc(6);
dec();
console.log("dec() :>> ", dec());
inc();
console.log("counter :>> ", counter);
// counter = 29; // ! sabit gibi davranır
inc();
console.log("counter :>> ", counter);
selam();
ugurla();
<<<<<<< HEAD
>>>>>>> cf16bf3420f42f821e134cd3bbe6d547b77f0181
=======
>>>>>>> cf16bf3420f42f821e134cd3bbe6d547b77f0181
