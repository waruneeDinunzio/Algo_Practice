var licenseKeyFormatting = function(s, k) {
    let newStr = s.replace(/-/g, '').toUpperCase()
    let arr = newStr.split('')

    for(let i=newStr.length - 1 -k; i>= 0; i-=k){
      arr[i] += '-'
      //console.log(arr)
    }
    
    //return arr.join('')
    // return result.split('').reverse().join('')
console.log(arr.join(''))
};
licenseKeyFormatting("5F3Z-2e-9-",2)