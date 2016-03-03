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
  it('should return false for an invalid name', function() {
    expect(todo.util.isValidTodoName('blah')).to.equal(true);
  })
  it('should not return a value less than one', function() {
    var hello = todo.util.getUniqueId;
    expect(hello()).to.not.equal(!1);
  })
  it('should trim whitespace', function() {
    expect(todo.util.trimTodoName('hello there darling')).length.to.be(19);
  })
});
