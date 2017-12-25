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

  describe('Add App', function(){
    var app_1, app_2;

    beforeEach(function() {
      app_1 = new NewRelicChallenge.Application(fixture.load('app_1.json'));
      app_2 = new NewRelicChallenge.Application(fixture.load('app_2.json'));
    });

    it('should add an app to a host', function() {
      var hostName = '7e6272f7-098e.dakota.biz';

      board.addAppToHost(hostName, app_1);

      expect(board.hostsLength()).toBe(1);
    });

    it('should add an app to hosts', function() {
      board.addAppToHosts(app_1)
      board.addAppToHosts(app_2)

      expect(board.hostsLength()).toBe(4);
    });
  });

  describe('Remove App', function() {
    var hostName = '7e6272f7-098e.dakota.biz';
    var app_1, app_2;

    beforeEach(function() {
      app_1 = new NewRelicChallenge.Application(fixture.load('app_1.json'));

      board.addAppToHost(hostName, app_1);
    });

    it('should remove an app from a host', function() {
      var host = board.getOrCreateHostByName(hostName);

      board.removeAppFromHost(hostName, app_1);

      expect(host.apps.length).toBe(0);
    });

    it('should remove an app from hosts', function() {
      var host_1 = board.getOrCreateHostByName(app_1.host[0]);
      var host_2 = board.getOrCreateHostByName(app_1.host[1]);
      var host_3 = board.getOrCreateHostByName(app_1.host[2]);

      board.removeAppFromHosts(app_1);

      expect(host_1.apps.length).toBe(0);
      expect(host_2.apps.length).toBe(0);
      expect(host_3.apps.length).toBe(0);
    });
  });

  describe('Get the top 25 most satisfying apps by host', function(){});


  describe('Init Board', function() {
    describe('Parse JSON', function(){
      var app_1, app_3, app_4, app_6;
      var json;
      var host;

      beforeEach(function() {
        app_1 = new NewRelicChallenge.Application(fixture.load('app_1.json'));
        app_3 = new NewRelicChallenge.Application(fixture.load('app_3.json'));
        app_4 = new NewRelicChallenge.Application(fixture.load('app_4.json'));
        app_6 = new NewRelicChallenge.Application(fixture.load('app_6.json'));

        json =[app_1, app_3, app_4, app_6];

        var hostName = 'e7bf58af-f0be.dallas.biz';
        host = board.getOrCreateHostByName(hostName);
      });

      it('should include apps sorted in hosts', function(){
        board.parseJSON(json, board);

        expect(host.apps[0].apdex).toBe(app_4.apdex);
        expect(host.apps[1].apdex).toBe(app_3.apdex);
        expect(host.apps[2].apdex).toBe(app_6.apdex);
        expect(host.apps[3].apdex).toBe(app_1.apdex);
      });
    });

    it('should load hosts file', function(){
       board.loadData(function(res){
         expect(res.length).toBe(10000);
       });
    });

    it('should create all hosts and include apps', function(){
      board.initData();

      expect(board.hostsLength()).toBeGreaterThan(0);
    });
  });
});
