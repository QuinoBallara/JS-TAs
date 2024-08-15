const ranges = [
    {
        name: "number",
        start: 48,
        end: 57,
    },
    {
        name: "symbols",
        start: 33,
        end: 47,
    },
    {
        name: "upper",
        start: 65,
        end: 90,
    },
    {
        name: "lower",
        start: 97,
        end: 122
    }
]

function generatePassword(length) {
    let pass;
    let checks = [false, false, false, false];
    if (length < 8) {
        length = 8;
    }
    while (!checks.every((value) => value)) {
        pass = "";
        checks = [false, false, false, false];
        for (let i = 0; i < length; i++) {
            let range = Math.floor(Math.random() * 4)
            checks[range] = true;
            let number = Math.floor(Math.random() * (ranges[range].end - ranges[range].start)) + ranges[range].start;
            pass += String.fromCharCode(number);
        }
    }
    console.log(pass);
    return pass;
}

generatePassword(3);
generatePassword(8);
generatePassword(20);
generatePassword(10);

