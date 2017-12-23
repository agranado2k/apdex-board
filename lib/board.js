var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Board = function () {
  this.hosts = {};

  this.hostsLength = function() {
    return  Object.keys(this.hosts).length;
  };

  //O(N*M), where N is # apps and M # hosts
  this.addAppToHosts = function(app) {
    for(var i = 0; i < app.host.length; i += 1)
      this.addAppToHost(app.host[i] ,app); //O(N)
  };

  //O(N)
  this.addAppToHost = function(hostName, app) {
    var host = this.getOrCreateHostByName(hostName); //O(1)
    host.addApp(app); //O(N)
  };

  //O(N*M), where N is # apps and M # hosts
  this.removeAppFromHosts = function(app) {
    for(var i = 0; i < app.host.length; i +=1)
      this.removeAppFromHost(app.host[i], app); //O(N)
  };

  //O(N)
  this.removeAppFromHost = function(hostName, app){
    var host = this.getOrCreateHostByName(hostName); //O(1)
    host.removeApp(app); //O(N)
  };

  this.getOrCreateHostByName = function(name){
    var host = this.hosts[name];
    if (!host)
      host = this.hosts[name] = new NewRelicChallenge.Host(name)

    return host;
  };

};



