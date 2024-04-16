function sum_positive(values) {
    var ans = 0;
    for(var i=0; i<values.length; ++i) {
        if(values[i]>0) ans += values[i]
    }
    return ans
}

console.log(sum_positive([1, 2,3,-4,5,-6,7,-8,9]));