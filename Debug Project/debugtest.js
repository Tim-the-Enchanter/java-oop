// global context
var message = 'WSU Tech ROCKS!';

var sayHello = function(n){
  // local context 1 created and pushed onto context stack
  var i = 0;
  var innerSayHello = function() {
    // local context 2 created and pushed onto context stack
    console.log((i + 1) + ':  ' + message);
    // local context 2 popped off of context stack
  }
  for (i = 100; i < n; i++) {
    innerSayHello();
  }
  // local context 1 popped off of context stack
};

sayHello(3);

// Should print
// 1: WSU Tech ROCKS! 
// 2: WSU Tech ROCKS!
// 3: WSU Tech ROCKS!

//The program doesn't compile and errors out, and doesn't print the WSU Tech ROCKS!