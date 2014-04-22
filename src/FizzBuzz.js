function FizzBuzz(){
}

	function isDivideByThree(number){
	  if(number%3==0){
	  return true;
	  }
	};

	function isDivideByFive(number){
		if(number%5 == 0){
			return true;
		}
	};

	function isDivideByFifteen(number){
		if(numbe%15 == 0){
			return true;
		}
	};


// function MakeDivision(divisor){
// 	return function(number){
// 		return number % divisor == 0;
// 	}
// };

// 	isDivideByThree = MakeDivision(3)
// 	isDivideByFive = MakeDivision(5)
// 	isDivideByFifteen = MakeDivision(15)

// 	Fizz = function(number){
// 	 if (isDivideByFifteen(number)== true){
// 	 	return"Fizzbuzz";
// 	 }
// 	 else if(isDivideByFive(number)== true){
// 		return "Buzz";
// 		}
// 		else if(isDivideByThree(number)== true){
// 		return "Fizz";
// 		}
// 		else return number;
// 	};