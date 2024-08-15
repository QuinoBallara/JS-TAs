const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

function findTheOldest(people) {
    let res = "";
    let oldest = -1;
    for (const person of people) {
        if (person.yearOfDeath - person.yearOfBirth > oldest) {
            oldest = person.yearOfDeath - person.yearOfBirth;
            res = person.name;
        }
    }
    console.log(res + " is the oldest person with " + oldest + " years of life.");
    return res;
}

findTheOldest(people);