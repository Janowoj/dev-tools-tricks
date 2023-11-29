const dogs = [{ name: 'Snickers', age: 2 },
{ name: 'hugo', age: 8 }];

let name = 'Jan';

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('cześć');
// Interpolated
console.log('cześć, jestem %s', 'Jan');
console.log(`cześć, jestem ${name}`);
// Styled
console.log('%c cześć, jestem Jan', 'font-size: 30px; background: blue; text-shadow: 10px 5px 0 white')
// warning!
console.warn('Ostrzeżenie!');
// Error :|
console.error('Błąd!');
// Info
console.info('Learn javascript more!');
// Testing
console.assert('a' === 'b', 'To nie jest prawda!');

const p = document.querySelector('p');

console.assert(p.classList.contains('wow'), 'Nie ma takiej klasy!');
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`Ten pies wabi się ${dog.name}`);
    console.log(`${dog.name} ma ${dog.age} lat`);
    console.log(`If ${dog.name} was a human, he would be ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`)
})
// counting
console.count('jan');
console.count('jan');
console.count('ludwik');
console.count('ludwik');
console.count('jan');
console.count('jan');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })

// table
console.table(dogs);