const beasts = [
    'ant', 'bison', 'camel', 'duck', 'elephant', 'fox', 'giraffe', 'hippo',
    'iguana', 'jaguar', 'kangaroo', 'lion', 'monkey', 'narwhal', 'octopus',
    'panda', 'quokka', 'rabbit', 'snake', 'tiger', 'unicorn', 'viper',
    'wombat', 'x-ray tetra', 'yak', 'zebra'
];

console.log(beasts.filter(beast => beast.length > 5));
console.log(beasts.filter(beast => beast.startsWith('a')));
console.log(beasts.filter(beast => beast.endsWith('a')));
console.log(beasts.filter(beast => beast.includes('a')));
console.log(beasts.indexOf('camel'));
console.log(beasts.findIndex(beast => beast.length > 5));
console.log(beasts.find(beast => beast.length > 5));
console.log(beasts.includes('camel'));
