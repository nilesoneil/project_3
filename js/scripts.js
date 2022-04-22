function beepBoop(userInput) {   
  let roboArray = [];
  for (let index = 0; index <= userInput; index++) {
    let appendable = index
    if (index.toString().includes("1")) {
      appendable = "beep";
    } else if (index.toString().includes("2")) {
      appendable = "boop";
    } else if (index.toString().includes("3")) {
      appendable = "won't you be my neighbor?";
    }
    roboArray.push(appendable);
  } 
  return roboArray
}  
  
  
  $(document).ready(function() {
    $("form#translate").submit(function(event) {
      event.preventDefault();
      const num1 = parseInt($("input#translate1").val())
      const result = beepBoop(num1);
      $("#output").text(result);

    
  });
});

