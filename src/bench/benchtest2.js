compare("RegExp vs String::indexOf again", function(){
    var input = "demo.string."
    benchmark("RegExp", function(){
      /(\.)/.test(input);
    });
    benchmark("String::indexOf", function(){
      input.indexOf(".") > -1;
    });
  });