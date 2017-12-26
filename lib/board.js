var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Board = function () {
  this.hosts = {};

  this.hostsLength = function() {
    return  Object.keys(this.hosts).length;
  };

  this.initData = function() {
    var that = this;
    this.loadData(this.parseJSON, that);
  };

  this.loadData = function(callback, that){
    callback(NewRelicChallenge.jsonData, that);
  };

  //O(N*logN*M)
  this.parseJSON = function(data, that) {

    //O(N*M)
    that.addAppsToHostsUnsorted(data, that);

    //O(N*logN*M)
    that.sortAppsInHostsByApdex(that);
  };

  //O(N*M)
  this.addAppsToHostsUnsorted = function(data, that) {
    for(var i = 0; i < data.length; i += 1) {
      var app = data[i];
      for (var hi = 0; hi < app.host.length; hi += 1){
        var host = this.getOrCreateHostByName(app.host[hi]); //O(1)
        host.apps.push(app) //O(1)
      }
    }
  };

  //O(N*logN*M)
  this.sortAppsInHostsByApdex = function(that){
    var hostKeys = Object.keys(this.hosts);
    for(var i = 0; i < hostKeys.length; i += 1){
      this.hosts[hostKeys[i]].apps.sort(function(app1, app2) {return app1.apdex - app2.apdex});
    }
  };

  //O(N*M), where N is # existed apps in host and M # hosts that app will be included
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

  this.getAppsByHost = function(hostName){
    var host = this.getOrCreateHostByName(hostName);
    return host.apps.slice(0,25);
  };


};



