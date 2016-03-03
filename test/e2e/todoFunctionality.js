/* globals casper, document */
casper.test.begin('App is setup correctly', 3, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    var app = todo.App();
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    //test.assertEquals(cow.moo(), 'moo!');
    test.assertEquals(app.add('say hello'), Number);
  });

  casper.run(function() {
    test.done();
  });
});




// // dbCall.find(value)
// //       .exec(err, result, function() {

//       })