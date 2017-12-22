var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Host = function(name) {
  this.name = name;
}

NewRelicChallenge.Board = function () {
  this.hosts = {};

  this.hostsLength = function() {
    return  Object.keys(this.hosts).length;
  };

  this.getOrCreateHostByName = function(name){
    var host = this.hosts[name];
    if (!host)
      host = this.hosts[name] = new NewRelicChallenge.Host(name)
    return host;
  };
};



NewRelicChallenge.Application = function(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
}
