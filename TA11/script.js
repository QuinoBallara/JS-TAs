function duplicates(nums) {
    let elemsInNums = [];
    let repeatedElemsInNums = [];
    let res = 0;
    for (const num of nums) {
        if (elemsInNums.indexOf(num) == -1) {
            elemsInNums.push(num);
        } else if (repeatedElemsInNums.indexOf(num) == -1) {
            repeatedElemsInNums.push(num);
            res++;
        }
    }
    console.log(res);
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]);