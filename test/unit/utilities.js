var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
       expect(todo.App.prototype).to.have.property('render');
       expect(todo.App.prototype).to.have.property('renderItem');
       expect(todo.App.prototype).to.have.property('add');
       expect(todo.App.prototype).to.have.property('getItem');
       expect(todo.App.prototype).to.have.property('setDone');
       expect(todo.App.prototype).to.have.property('setNotDone');
       expect(todo.App.prototype).to.have.property('toggleDone');
       expect(todo.App.prototype).to.have.property('remove');
       expect(todo.App.prototype).to.have.property('addListeners');
       expect(todo.App.prototype).to.have.property('handleFormSubmit');
       expect(todo.App.prototype).to.have.property('handleListClick');
       expect(todo.App.prototype).to.have.property('handleItemChange');
    });
  });
});

describe('the todo.util methods', function() {
  it('should be an object', function() {
    assert.typeOf(todo.util, 'object');
  })
  it('should have all the necessary methods', function(){
    expect(todo.util).to.have.property('trimTodoName');
    expect(todo.util).to.have.property('isValidTodoName');
    expect(todo.util).to.have.property('getUniqueId');
  })
  //isvalidtodoname should not equal 
  it('should return false for an invalid name', function() {
    expect(todo.util.isValidTodoName('blah')).to.equal(true);
  })

  it('should have a length of however many items pushed in', function(){
    var things = {
      items: ['wash car', 'visit mom', 'burn this mother down'],
      el: "section"}
    var myList = new todo.App(things);
    expect(myList.items).to.have.length(3);
  })
});
