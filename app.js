// chapter 21 too 25



// ---------------Q1----------

// var firstName= prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullname= firstName + lastName
// console.log("hello"  +   fullname);


// -------Q2--------

// var fvrtphone= prompt("enter your fvrt phone model")
// var fvrtphone_length= fvrtphone.length
// console.log(fvrtphone);
// console.log( "lenth of string"+fvrtphone_length );

// ----------Q3------------


// var country= "Pakistan"
// var string= country.indexOf("n")
// console.log("index of n : " + string);


// ----------Q4-----------

// var text = "Hello world"
// var text1= text.lastIndexOf("l")
// console.log("last index of l: " + text1 );


// ---------Q5--------------

// var people="pakistani"
// console.log("stirng : " + people);
// var strin1= people.charAt("3")
// console.log("character at index 3  :" + strin1);

// ------Q6--------

//  var firstName= prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullname= firstName.concat("" ,lastName)
// console.log(fullname);


// -------Q7--------

// var city = "hydrabad"
// console.log("city :" +city);
// var changecity= city.replace("hydrabad", "islamabad")
// console.log("after replacement :" + changecity);



// -------------Q8--------------

// var message = "Ali and Sami are best friends. They play cricket and football together"
// console.log(message);
// var change= message.replaceAll("and" , "&")
// console.log("After replace  : " + change);

// --------Q9-----------

// var string_num ="472"
// console.log("value :"  + string_num);
// console.log("type :" + typeof string_num);
// var num = 472 
// console.log("value :"  + typeof num);
// console.log("type :" + typeof num);

// ------Q10----------

// var userinput= prompt("enter item name")
// console.log("before:" +userinput);
// var input= userinput.toUpperCase()
// console.log("after:" +input);


// ---------Q11----------

// var userinput=prompt("enter a word")
// console.log("userinput: " + userinput);

// var user_fletter= userinput.slice(0,1)
// var user_oletter= userinput.slice(1)

// var user_fletter_c= user_fletter.toUpperCase()
// var user_oletter_s= user_oletter.toLowerCase()

//  console.log(user_fletter_c + user_oletter_s);

// -----------Q12----------

// var number=35.36
// console.log("value: " + number);
// console.log("type: " + typeof number);
// var string_number= number.toString()
// string_number= string_number.replace("." , "")
// console.log("value: " + string_number);
// console.log("type: " + typeof string_number);


// -------------Q13----------------------------

// var user_name = prompt("Enter your name");
// var isValid =true;
// for(var i= 0; i<user_name.length;i++ )
// {
//     var code = user_name.charCodeAt(i);
//     if(code === 33 || code === 44 || code === 46 || code === 64)
//     {
//        isValid=false;
//     }
// }

// if(isValid)
// {
//     console.log("your word is valid ")
// }
// else 
// {
//     console.log("your word is not valid ")
// }


// -------------Q14----------------------------

// var Bakery_items = ["cake","apple pie","cookie","chips","patties"];
// console.log("Bakery Item : " + Bakery_items );
// var user_item = prompt("Avaiable items : (cake , apple pie ,cookie , chips , patties)\n Enter to search from above or else");
// var user_item= user_item.toLowerCase();
// var user_item_index = Bakery_items.indexOf(user_item)
// if (user_item_index !== -1)
// {
//      console.log("Your item is found in the list ")
//      console.log("At Index : " + user_item_index)
// }
// else
// {
//      console.log("Your item is not found in the list. ")

// }

// -------------Q15----------------------------

// var password =  prompt("Enter a strong password");

// var isValid = true;

// if (password.length < 6) {
//   console.log("Password must be at least 6 characters long");
//   isValid = false;
// }

// var first = password.charCodeAt(0);
// if (first >= 48 && first <= 57) {
//   console.log("Password should not start with a number");
//   isValid = false;
// }

// var hasLetter = false;
// var hasNumber = false;

// for (var i = 0; i < password.length; i++) {
//   var c = password.charCodeAt(i);

//   if (c >= 48 && c <= 57) {
//     hasNumber = true;
//   } 
//   else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
//     hasLetter = true;
//   } 
//   else {
//     console.log("Invalid character found");
//     isValid = false;
//     break;
//   }
// }

// if (isValid) {
//   if (hasLetter && hasNumber) {
//     console.log("Password is valid!");
//   } else {
//     console.log("Password must contain both letters AND numbers");
//   }
// }



// --------------Q16-----------

// var text= "university of karachi"
// var textspilt= text.split("")
// for (var i =0 ; i <=text.length; i++ ){
//  console.log(text[i]);
// }


// ---------Q17---------

// var userinput= "pakistan"
// console.log("userinput" + userinput);

// var inputlchar= userinput.indexOf("n")
// console.log("lastcharacter : "+ userinput[7]);




 
// -------------Q18----------------------------

// var str ="The quick brown fox jumps over the lazy dog";
// var str= str.toLowerCase();
// var str_array = str.split(" ");
// var count=0;
// for(var i =0; i<=str_array.length; i++)
// {
//   if(str_array[i] === "the")
//   {
//     count++;
//   }
// }

// console.log("Text : "+ str)
// console.log("There are " + count + " occurencs(s) of the world 'the'. ")






