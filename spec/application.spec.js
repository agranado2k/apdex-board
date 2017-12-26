describe('Application', function() {
  var application, json;
  beforeEach(function() {
    json = fixture.load('app_1.json');
    application = new window.NewRelicChallenge.Application(json);
  });

  it('should create object', function() {
    expect(application).not.toBeNull();
    expect(application.name).toBe(json.name);
    expect(application.contributors).toBe(json.contributors);
    expect(application.version).toBe(json.version);
    expect(application.apdex).toBe(json.apdex);
  });

  describe('View', function(){
    describe('Add App to View', function(){
      it('create li tag with app information', function(){
        var app = new window.NewRelicChallenge.Application(fixture.load('app_1.json'));

        var liApp = app.viewCreateAppTag();

        expect(liApp).toContain('<li class="app-info"><span class="app-apdex">68</span><span class="app-name">Small Fresh Pants - Kautzer - Boyer, and Sons</span></li>');
      });
    });
  });
});
