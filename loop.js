function vowelsAndConsonants(s) {
    let vowel = ["a","e","i","o","u"]
    //console.log(vowel[0])
    for (let i=0; i< s.length; i++){
        for (let j=0; j< vowel.length; j++){
            if(s[i]== vowel[j]){
                console.log(s[i]) 
            }  
        } 
    }  
    
    // for (let i=0; i< s.length; i++){
    //     for (let j=0; j< vowel.length; j++){
    //         if(s[i]!== vowel[j]){
    //             console.log(s[i]) 
    //         }
    //     } 
    // }
}
vowelsAndConsonants("wow");