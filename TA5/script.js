function leapYears(año) {
    let res = año % 4 == 0 || (año % 100 == 0 && año % 400 == 0);
    console.log(res);
}

leapYears(3);
leapYears(4);
leapYears(100);
leapYears(400);
leapYears(2020);
leapYears(2021);