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
