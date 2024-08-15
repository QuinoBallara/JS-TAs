function getSum(nums) {
    let res = 0;
    res = nums.reduce((accumulator, currentValue) => accumulator + currentValue, res);
    console.log(res);
}

getSum([1, 2, 3, 4, 5]);