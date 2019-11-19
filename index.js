function oddNumbers()
{
  let max = prompt("Please enter 10 numbers");
  let array = [max];

  for(let i=0; i<array.length;i++){
    if(array[i] % 2 != 0){
      console.log("odd numbers are: " + array[i]);
    }
  }
}
oddNumbers();
