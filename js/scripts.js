///Back end
  // var romanConverter = [
  //   ["I",1],
  //   ["IV",4],
  //   ["V",5],
  //   ["IX",9],
  //   ["X",10],
  //   ["XL",40],
  //   ["L",50],
  //   ["XC",90],
  //   ["C",100],
  //   ["CD",400],
  //   ["D",500],
  //   ["CM",900],
  //   ["M",1000]
  // ];
  //
  // var trojanNumbers = [2,3,6,7,8]
  var romanNumerals = [
    ['M', 'MM', 'MMM'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'VXX', 'LXXX', 'XC'],
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  ];

  function converter(userInput) {
    var result = '';
    if (userInput.length === 4) {
      result += romanNumerals[0] [userInput[0]-1];
      if (userInput[1] != '0') {
        result += romanNumerals[1] [userInput[1]-1];
      }
    }

  //   if (parseInt(userInput) === 0) {
  //   return "We can't help you. There is no zero in Roman numerals.";
  // }
  // places = userInput.split("").reverse();
  // alert(places);
  // if (userInput === 1) {
  //   return ones[i][0];
  //   console.log(userInput);
  // }
  // for(var i = 0; i < romanConverter.length; i++) {
  //   if (parseInt(userInput) === romanConverter[i][1]) {
  //     return romanConverter[i][0];
  //   } else if (userInput === 2) {
  //     return ones[i][0];
  //   }
  // };

///front end
$(document).ready(function() {
  $("form#numeros").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var result = converter(userInput);
  });
});
