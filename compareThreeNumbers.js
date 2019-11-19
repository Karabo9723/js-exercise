function compareThreeNumbers(num1,num2,num3)
{
    if (num1 > num2 && num1 > num3)
    {
      console.log("The max number is " + num1);
    }
    else if (num2 > num1 && num2 > num3)
    {
      console.log("The max number is " + num2);
    }
    else
    {
          console.log("The max number is " + num3);
    }


//compare to find the max number
  if (num1 < num2 && num1 < num3)
  {
    console.log("The min number is " + num1);
  }
  else if (num2 < num1 && num2 < num3)
  {
    console.log("The min number is " + num2);
  }
  else
  {
    console.log("The min number is " + num3);
  }
}
compareThreeNumbers(1,5,7);
