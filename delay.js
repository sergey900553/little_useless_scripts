let arrayNumbers = [1,2,3,4,5];

arrayNumbers.forEach(function(item, i) {
    setTimeout(function() {
      console.log(item);
    }, i * 2000);
  });
