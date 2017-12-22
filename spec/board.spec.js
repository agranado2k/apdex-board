describe('Board', function() {
  var board;

  beforeEach(function(){
    fixture.setBase('spec/fixtures');
  });

  beforeEach(function(){
    board = new NewRelicChallenge.Board()
  });

  it('should create object', function() {
    expect(board.hosts).toBeDefined();
    expect(board.getOrCreateHostByName).toBeDefined();
  });

  it('should create a Host', function() {
    var hostName = '7e6272f7-098e.dakota.biz';

    board.getOrCreateHostByName(hostName);

    expect(board.hostsLength()).toBe(1);
  });

  it('should not create but get a existent Host', function() {
    var hostName1 = '7e6272f7-098e.dakota.biz';
    var hostName2 = '9a450527-cdd9.kareem.info';
    var host1 = board.getOrCreateHostByName(hostName1);
    var host2 = board.getOrCreateHostByName(hostName2);

    var host = board.getOrCreateHostByName(hostName1);

    expect(host).toBe(host1);
    expect(board.hostsLength()).toBe(2);
  });

  describe('Host', function() {
    var app_1, host;

    beforeEach(function() {
      app_1 = new NewRelicChallenge.Application(fixture.load('app_1.json'));
      name = '7e6272f7-098e.dakota.biz';
      host = new NewRelicChallenge.Host(name);
    });

    it('should create object', function() {
      expect(host).not.toBeNull();
      expect(host.name).toBe(name);
    });

    describe('addApp', function(){
      var app_2, app_3, app_4, app_5, app_6, app_7;

      beforeEach(function() {
        app_2 = new NewRelicChallenge.Application(fixture.load('app_2.json'));
        app_3 = new NewRelicChallenge.Application(fixture.load('app_3.json'));
        app_4 = new NewRelicChallenge.Application(fixture.load('app_4.json'));
        app_5 = new NewRelicChallenge.Application(fixture.load('app_5.json'));
        app_6 = new NewRelicChallenge.Application(fixture.load('app_6.json'));
        app_7 = new NewRelicChallenge.Application(fixture.load('app_7.json'));
      });

      it('should include a app', function() {
        host.addApp(app_1);

        expect(host.apps.length).toBe(1);
      });

      it('should include a app sort by apdex', function() {
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
  });

  describe('Application', function() {
    var application, json;
    beforeEach(function() {
      json = fixture.load('app_1.json');
      application = new NewRelicChallenge.Application(json);
    });

    it('should create object', function() {
      expect(application).not.toBeNull();
      expect(application.name).toBe(json.name);
      expect(application.contributors).toBe(json.contributors);
      expect(application.version).toBe(json.version);
      expect(application.apdex).toBe(json.apdex);
    });
  });
});
