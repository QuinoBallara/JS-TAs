function sumAll(a, b) {
    let min;
    let max;
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }
    let res = 0;
    for (let i = min; i <= max; i++) {
        res += i;
    }
    console.log(res);
}

sumAll(1, 1);
sumAll(1, 2);
sumAll(2, 1);
sumAll(1, 10)

