/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 18
if (votingAge >= 18)
{
    {
        console.log(true)
    }
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var crazyVar=1
if (votingAge = 18)
{
    {
       crazyVar=23; console.log(crazyVar)
    }
    
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method





//Task d: Write a function to multiply a*b 

let a = 5
let b = 8
result = a*b
console.log(result)

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let meAge = 18
let dogYear = 7
result = meAge*dogYear
console.log(result)




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  let dogAge = "1 year"
  let dogWeight = 15
  var dogFood
  if (dogAge => "1 year")
  {
      {
         if (dogWeight<=5)
         {
             {
                dogFood = dogWeight*.05
             }
         }
         if ((dogWeight >= 6 ) && (dogWeight<= 10 ))
         {
             {
                 dogFood = dogWeight*.04
             }
         }
         if ((dogWeight >= 11 ) && (dogWeight<= 15 ))
         {
             {
                 dogFood = dogWeight*.03
             }
         }
         if (dogWeight > 15 )
         {
             {
                 dogFood = dogWeight*.02
             }
         }
      }
  }
  console.log(dogFood)
  if (dogAge < "1 year")
  {
      {
        if ((dogAge>= "2 months") && (dogAge<= "4 months"))
        {
            {
                dogFood = dogWeight*.1
            }
        }
        if ((dogAge>= "5 months") && (dogAge<= "7 months"))
        {
            {
                dogFood = dogWeight*.05
            }
        }
        if ((dogAge>= "8 months") && (dogAge<= "12 months"))
        {
            {
                dogFood = dogWeight*.04
            }
        }
      }
  }
  console.log(dogFood)
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  functionRPS
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





