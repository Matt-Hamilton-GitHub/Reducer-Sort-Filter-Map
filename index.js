var arr = [11,3,5,4,1,2,3];

const sum = arr.reduce(function(acc, next) {

  return acc + next

},[])


console.log(sum)


const mapArray = 
  arr.map((num) => [num, arr.find(num=> num)])
  .sort((n1,n2) => n1[1] < n2[1] ? 1 :-1)

console.log(mapArray)