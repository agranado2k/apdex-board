var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Board = function () {
  this.hosts = {};

  this.getOrCreateHostByName = function(){

  };
};


NewRelicChallenge.Host = function(name) {
  this.name = name;
}

NewRelicChallenge.Application = function(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
}
