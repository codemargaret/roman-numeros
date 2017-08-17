///BAck end
  var romanConverter = [
    ["I",1],
    ["IV",4],
    ["V",5],
    ["IX",9],
    ["X",10],
    ["XL",40],
    ["L",50],
    ["XC",90],
    ["C",100],
    ["CD",400],
    ["D",500],
    ["CM",900],
    ["M",1000]
  ];

  var trojanNumbers = [2,3,6,7,8]

function converter(userInput) {
  if (parseInt(userInput) === 0) {
    return "We can't help you. There is no zero in Roman numerals.";
  }
  places = userInput.split("").reverse();
  alert(places);
  for(var i = 0; i < romanConverter.length; i++) {
    if (parseInt(userInput) === romanConverter[i][1]) {
      return romanConverter[i][0];
    };
  };
};

///front end
$(document).ready(function() {
  $("form#numeros").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userInput").val();
    // alert(userInput);
    var result = converter(userInput);
    // alert(result);
  });
});
