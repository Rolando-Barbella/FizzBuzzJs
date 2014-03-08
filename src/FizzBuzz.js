function FizzBuzz() {
}

function MakeDivision(divisor){
	return function(number){
		return number % divisor == 0;
	}
};

	isDivideByThree = MakeDivision(3)
	isDivideByFive = MakeDivision(5)
	isDivideByFifteen = MakeDivision(15)

	Fizz = function(number){
	 if (isDivideByFifteen(number)== true){
	 	return"Fizzbuzz";
	 }
	 else if(isDivideByFive(number)== true){
		return "Buzz";
		}
		else if(isDivideByThree(number)== true){
		return "Fizz";
		}
		else return number;
	};