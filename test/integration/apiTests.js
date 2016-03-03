describe('API integration', function (){
  var server, setupStub, JSONresponse, xhr;
  before(function(){
      server = sinon.fakeServer.create();
      server.autoRespond = true;

  });
  afterEach(function(){
      server.restore();
      //this.xhr.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called',function(done){
    var list = JSON.stringify({todos: ['wash car', 'call mom', 'burn this mother down']});

    sinon.spy(todo, "setup");

    server.respondWith("GET", "http://localhost:3000/todos",
            [200, { "Content-Type": "application/json" },
             list]);

    todo.init(false);

    server.respond();

    expect(todo.setup.calledWith(list));
    todo.setup.restore();
    done();
  });      
})

  
    