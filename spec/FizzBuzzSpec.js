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

 it("Should say false when the number is not divisible by 3,5 or 15",function(){
 	expect(MakeDivision(5,4)).toBe(true)
 });


});


// describe("Fizzbuzz", function(){

//   it("should tell number if is divisible by 3", function(){
//     expect(isDivideByThree(3)).toBe(true);
//   });

//   it("should tell number if is divisible by 5", function(){
//     expect(isDivideByFive(5)).toBe(true);

//   });

//   it("should tell number if is divisible by 3 and 5", function(){
//     expect(isDivideByFifteen(15)).toBe(true);
//   });
//   it ("should return number if is not divisible by 3 or 4", function(){
//     expect(isDivideByFifteen(4)).toBe(false);
//   });

// });

// describe("Play", function() {

//   it ("should tell fizz if the number is divisible by 3",function(){
//     expect(Fizz(15)).toEqual("Fizzbuzz")
//   });

//   it ("should tell fizz if the number is divisible by 3",function(){
//     expect(Fizz(3)).toEqual("Fizz")
//   });

//   it ("should tell Buzz if the number is divisible by 5",function(){
//     expect(Fizz(5)).toEqual("Buzz")
//   });


//   it ("should return number if is not divisible by 3 and 5",function(){
//     expect(Fizz(4)).toEqual(4)
//   });

// });