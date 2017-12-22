describe('Board', function() {
  it('should create object', function() {
    var board = new NewRelicChallenge.Board()

    expect(board.hosts).toBeDefined();
    expect(board.getOrCreateHostByName).toBeDefined();
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
