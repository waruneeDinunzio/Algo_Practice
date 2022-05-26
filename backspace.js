// var backspaceCompare = function(s, t) {
//     let stringS = []
//     let stringT = []
    
//     for(let i=0; i < s.length; i++){
//         if(s[i] !== "#"){
//             stringS.push(s[i]);
//         }
//         console.log(stringS) 
//     }
//     //return build(s) == build(t)
//     console.log(stringS)
// }
function backspaceCompare(S, T) {
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < S.length; i++) {
      if (S[i] === "#") {
        sArr.pop();
      } else {
        sArr.push(S[i]);
      }
    }
    for (let i = 0; i < T.length; i++) {
      if (T[i] === "#") {
        tArr.pop();
      } else {
        tArr.push(T[i]);
      }
    }
    sArr = sArr.join("");
    tArr = tArr.join("");
    //return sArr === tArr;
    console.log(sArr===tArr)
  }
backspaceCompare("ab#c","ab#c")