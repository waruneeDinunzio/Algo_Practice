function compareTriplets(a, b) {
    // Write your code here
    let score = [0,0];
    //let aliceScore = score[0];
    //let bobScore = score[1];
    for (let i=0; i < a.length; i++){
        if(a[i]>b[i]) {
            aliceScore +=1;
            console.log(aliceScore)
        } else if(a[i]<b[i]){
            bobScore +=1;
            console.log(bobScore)
        } else {
            score;
        }
        
    }
console.log(score);
}
compareTriplets([5,6,7],[3,6,10]);
