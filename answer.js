const sumDigPow = (a,b) =>{
 const arr = []
 for(var i=a;i<=b;i++){
  var sum = 0
  var numString= i.toString()
  for(var j=0;j<=numString.length;j++){
   sum += Math.pow(parseInt(numString[j]),j+1)
   sum === i ? arr.push(i) : arr
  }
 }
 return arr
}
