describe("Fizzbuzz", function(){

	it("Should tell when the number divisible by 3", function(){
		expect(isDivideByThree(3)).toBe(true)
	});

	it("Should tell when the number is divisble by 5", function(){
	  expect(isDivideByFive(5)).toBe(true)
	});

	it("Should tell when a number is divisible by 15",function(){
	 expect(isDivideByFifteen(15)).toBe(true)
	});

	it("Should tell when a number is divisible by 15, testing another function",function(){
		expect(MakeDivision(15,5)).toBe(true)
	});

  it("Should tell false when a number is not divisible by 3,5,15",function(){
   expect(MakeDivision(15,4)).toBe(false);
  });

it("Should tell true when a number is divisible by 3,5,15",function(){
   expect(MakeDivision2()).toEqual(true);
  });

});

describe("Play", function(){

	it("Should say Fizz when the number is divisble by three",function(){
      expect(MakeNumberDivisor(3)).toBe(true);
	})


});