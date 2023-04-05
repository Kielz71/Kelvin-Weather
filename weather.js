// Forecast today
const kelvin = 293;

// converting to celsius
const celsius = kelvin - 273;

// converting to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounding off to a whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);



//Converting celsius to Newtons
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`Celsius converted to newtons is ${newton}`);
