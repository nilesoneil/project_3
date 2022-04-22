function beepBoop(input) {   
  let roboArray = [];
  for (let index = 0; index <= input; index++) {
      let stringIndex = index.toString();
      let appendable = index
    
    if (stringIndex.includes("1")) {
      appendable = "beep";
    } else if (stringIndex.includes("2")) {
      appendable = "boop";
    } else if (stringIndex.includes("3")) {
      appendable = "won't you be my neighbor?";
    }
    roboArray.push(appendable);
  } 
  return roboArray
}  
  
  
  $(document).ready(function() {
    $("form#").submit(function(event) {
 

    event.preventDefault();
  });
});