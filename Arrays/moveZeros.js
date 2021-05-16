const nums = [0, 0, 1];

var moveZeroes2 = function(nums) {
    let s = 0;
    
    while(s < nums.length) {
        if(nums[s] === 0 ) {
            nums.splice(s,1);
            nums.push(0);
            s--;
        } 
            s++;
            console.log(s);
        }
        return nums;
}


console.log(moveZeroes2(nums));