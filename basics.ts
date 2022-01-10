const sum = (a: number, b: number) => {
  return a + b;
}

console.log(sum(1, 3))

// ----------------------------------------
interface Person {
  name: string,
  age: number,
  gender?: string
}

const pessoa : Person = {name: 'Ana', age: 32}
console.log(pessoa);

//-----------------------------------------

fetch('https://swapi.dev/api/people/1')
    .then((response => response.json()))
    .then((person: Person) => {
        console.log(`Name: ${person.name}, Age: ${person.age ?? 0}, Gender: ${person.gender}`);
    });
