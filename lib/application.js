var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Application = function(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
  this.host = json.host;
}
