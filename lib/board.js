window.NewRelicChallenge = window.NewRelicChallenge || {};

window.NewRelicChallenge.Board = function () {
  this.hosts = {};
};

window.NewRelicChallenge.Board.prototype.hostsLength = function() {
  return  Object.keys(this.hosts).length;
};

window.NewRelicChallenge.Board.prototype.initData = function() {
  var that = this;
  this.loadData(this.parseJSON, that);
};

window.NewRelicChallenge.Board.prototype.loadData = function(callback, that){
  callback(window.NewRelicChallenge.jsonData, that);
};

//O(N*logN*M)
window.NewRelicChallenge.Board.prototype.parseJSON = function(data, that) {

  //O(N*M)
  that.addAppsToHostsUnsorted(data, that);

  //O(N*logN*M)
  that.sortAppsInHostsByApdex(that);

  that.createBoard();
};

//O(M*N)
window.NewRelicChallenge.Board.prototype.createBoard = function() {
  var hostListHTML = '';
  var hostLength = this.hostsLength();
  var hostKeys = Object.keys(this.hosts);

  for(var i = 0; i < hostLength; i += 1){
    hostListHTML += this.hosts[hostKeys[i]].viewCreateHostTag();
  }

  var hostListTag = this.element('hostList');
  hostListTag.innerHTML = hostListHTML;
};

window.NewRelicChallenge.Board.prototype.element = function(id){
  return document.getElementById(id);
};

//O(N*M)
window.NewRelicChallenge.Board.prototype.addAppsToHostsUnsorted = function(data, that) {
  for(var i = 0; i < data.length; i += 1) {
    var app = new window.NewRelicChallenge.Application(data[i]);
    for (var hi = 0; hi < app.host.length; hi += 1){
      var host = this.getOrCreateHostByName(app.host[hi]); //O(1)
      host.apps.push(app) //O(1)
    }
  }
};

//O(N*logN*M)
window.NewRelicChallenge.Board.prototype.sortAppsInHostsByApdex = function(that){
  var hostKeys = Object.keys(this.hosts);
  for(var i = 0; i < hostKeys.length; i += 1){
    this.hosts[hostKeys[i]].apps.sort(function(app1, app2) {return app2.apdex - app1.apdex});
  }
};

//O(N*M), where N is # existed apps in host and M # hosts that app will be included
window.NewRelicChallenge.Board.prototype.addAppToHosts = function(app) {
  for(var i = 0; i < app.host.length; i += 1)
    this.addAppToHost(app.host[i] ,app); //O(N)
};

//O(N)
window.NewRelicChallenge.Board.prototype.addAppToHost = function(hostName, app) {
  var host = this.getOrCreateHostByName(hostName); //O(1)
  host.addApp(app); //O(N)
};

//O(N*M), where N is # apps and M # hosts
window.NewRelicChallenge.Board.prototype.removeAppFromHosts = function(app) {
  for(var i = 0; i < app.host.length; i +=1)
    this.removeAppFromHost(app.host[i], app); //O(N)
};

//O(N)
window.NewRelicChallenge.Board.prototype.removeAppFromHost = function(hostName, app){
  var host = this.getOrCreateHostByName(hostName); //O(1)
  host.removeApp(app); //O(N)
};

window.NewRelicChallenge.Board.prototype.getOrCreateHostByName = function(name){
  var host = this.hosts[name];
  if (!host)
    host = this.hosts[name] = new window.NewRelicChallenge.Host(name)

  return host;
};

window.NewRelicChallenge.Board.prototype.getAppsByHost = function(hostName){
  var host = this.getOrCreateHostByName(hostName);
  return host.apps.slice(0,25);
};

