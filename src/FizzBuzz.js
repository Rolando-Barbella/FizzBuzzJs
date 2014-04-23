function FizzBuzz(){
}

function isDivideByThree(number){
  if(number%3==0){
  return true;
  }
};

function isDivideByFive(number){
  if(number%5==0){
  return true;
   }
};

function isDivideByFifteen(number){
   if(number%15 == 0){
   return true;
    }
};

function MakeDivision(number,divider){
   if(number % divider == 0){
    return true;
    }
    else{
    return false;
    }
};

function MakeDivision2(){
  var number = 15;
  var divider = 5;
  return number%divider == 0;
}

function MakeNumberDivisor(number){
   return function(divisor){
   return number%divisor == 0;
	}
};

   isDivideByThree = MakeNumberDivisor(3);
   isDivideByFive = MakeNumberDivisor(5);
   isDivideByFifteen = MakeNumberDivisor(15);

    Play = function(number){
	   if(isDivideByThree(number) == true){
	   	return"Fizz";
	   }
	   else if(isDivideByFive(number)== true){
	   	return"Buzz";
	   }
	
	   else if(isDivideByFifteen(number)== true){
	   	return"Fizz Buzz";
	   }
	
	else{
	    return number
	 }

     };

