describe('Board', function() {
  it('should create object', function() {
    var board = new NewRelicChallenge.Board()

    expect(board.hosts).toBeDefined();
    expect(board.getOrCreateHostByName).toBeDefined();
  });

  it('should create a Host', function() {
    var board = new NewRelicChallenge.Board()
    var hostName = '7e6272f7-098e.dakota.biz';

    board.getOrCreateHostByName(hostName);

    expect(board.hostsLength()).toBe(1);
  });

  it('should not create but get a existent Host', function() {
    var board = new NewRelicChallenge.Board()
    var hostName1 = '7e6272f7-098e.dakota.biz';
    var hostName2 = '9a450527-cdd9.kareem.info';
    var host1 = board.getOrCreateHostByName(hostName1);
    var host2 = board.getOrCreateHostByName(hostName2);

    var host = board.getOrCreateHostByName(hostName1);

    expect(host).toBe(host1);
    expect(board.hostsLength()).toBe(2);
  });

  describe('Host', function() {
    it('should create object', function() {
      var name = '7e6272f7-098e.dakota.biz';

      var host = new NewRelicChallenge.Host(name);

      expect(host).not.toBeNull();
      expect(host.name).toBe(name);
    });
  });

  describe('Application', function() {
    it('should create object', function() {
      var json =  {"name": "Small Fresh Pants - Kautzer - Boyer, and Sons",
              "contributors": [
                "Edwin Reinger",
                "Ofelia Dickens",
                "Hilbert Cole",
                "Helen Kuphal",
                "Maurine McDermott Sr."
              ],
              "version": 7,
              "apdex": 68,
              "host": [
                "7e6272f7-098e.dakota.biz",
                "9a450527-cdd9.kareem.info",
                "e7bf58af-f0be.dallas.biz"
              ]
            };
      var application = new NewRelicChallenge.Application(json);

      expect(application).not.toBeNull();
      expect(application.name).toBe(json.name);
      expect(application.contributors).toBe(json.contributors);
      expect(application.version).toBe(json.version);
      expect(application.apdex).toBe(json.apdex);
    });
  });
});
