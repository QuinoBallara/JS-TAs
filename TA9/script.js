function getOdds(nums) {
    let res = nums.filter(num => num % 2 !== 0);
    console.log(res);
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 3, 5, 7, 9]