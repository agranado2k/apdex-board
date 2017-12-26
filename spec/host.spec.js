describe('Host', function() {
  var app_1, host;

  beforeEach(function() {
    app_1 = new window.NewRelicChallenge.Application(fixture.load('app_1.json'));
    name = '7e6272f7-098e.dakota.biz';
    host = new window.NewRelicChallenge.Host(name);
  });

  it('should create object', function() {
    expect(host).not.toBeNull();
    expect(host.name).toBe(name);
  });

  describe('addApp', function(){
    var app_2, app_3, app_4, app_5, app_6, app_7;

    beforeEach(function() {
      app_2 = new window.NewRelicChallenge.Application(fixture.load('app_2.json'));
      app_3 = new window.NewRelicChallenge.Application(fixture.load('app_3.json'));
      app_4 = new window.NewRelicChallenge.Application(fixture.load('app_4.json'));
      app_5 = new window.NewRelicChallenge.Application(fixture.load('app_5.json'));
      app_6 = new window.NewRelicChallenge.Application(fixture.load('app_6.json'));
      app_7 = new window.NewRelicChallenge.Application(fixture.load('app_7.json'));
    });

    it('should include a app', function() {
      host.addApp(app_1);

      expect(host.apps.length).toBe(1);
    });

    it('should include mult apps and keep the app list sorted by apdex', function() {
      host.addApp(app_1);
      host.addApp(app_3);
      host.addApp(app_2);
      host.addApp(app_4);
      host.addApp(app_5);
      host.addApp(app_6);
      host.addApp(app_7);

      expect(host.apps[0].apdex).toBe(app_4.apdex);
      expect(host.apps[1].apdex).toBe(app_5.apdex);
      expect(host.apps[2].apdex).toBe(app_2.apdex);
      expect(host.apps[3].apdex).toBe(app_7.apdex);
      expect(host.apps[4].apdex).toBe(app_3.apdex);
      expect(host.apps[5].apdex).toBe(app_6.apdex);
      expect(host.apps[6].apdex).toBe(app_1.apdex);
    });
  });

  describe('removeApp', function(){
    var app_1;

    beforeEach(function() {
      app_1 = new window.NewRelicChallenge.Application(fixture.load('app_1.json'));
      host.addApp(app_1);
    });

    it('should remove app from host app list', function(){
      host.removeApp(app_1)

      expect(host.apps.length).toBe(0);
    });
  });

  describe('View', function(){
    describe('Add Host to View', function(){
      var hostName = 'e7bf58af-f0be.dallas.biz';

      it('create li tag with host information', function(){
        var host = new window.NewRelicChallenge.Host(hostName);
        var app_1 = new window.NewRelicChallenge.Application(fixture.load('app_1.json'));
        var app_3 = new window.NewRelicChallenge.Application(fixture.load('app_3.json'));
        var app_4 = new window.NewRelicChallenge.Application(fixture.load('app_4.json'));
        var app_6 = new window.NewRelicChallenge.Application(fixture.load('app_6.json'));

        host.addApp(app_1);
        host.addApp(app_3);
        host.addApp(app_4);
        host.addApp(app_6);

        var liHost = host.viewCreateHostTag();

        expect(liHost).toContain('<div class="card"><h4 class="host-info">'+ hostName +'</h4><ul class="app-list">'+app_4.viewCreateAppTag()+app_3.viewCreateAppTag()+app_6.viewCreateAppTag()+app_1.viewCreateAppTag() +'</ul></div>');
      });
    });
  });
});
