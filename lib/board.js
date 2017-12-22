var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Host = function(name) {
  this.name = name;
  this.apps = [];

  //time complexity O(N)
  this.addApp = function(app) {
    var pos = this.findPosition(app, this.apps);
    this.apps.splice(pos,0,app);
  }

  //time complexity O(logN)
  this.findPosition = function(app, appList) {
    var startIndex = 0;
    var endIndex = appList.length;
    var pivotIndex = parseInt(startIndex + ((endIndex - startIndex) / 2), 10);
    if (!appList[pivotIndex]) return pivotIndex;

    for(var i = 0; i < appList.length; i += 1) {
      if (appList[pivotIndex].apdex < app.apdex)
          pivotIndex = parseInt(pivotIndex + ((endIndex - pivotIndex) / 2), 10)
      else
          pivotIndex = parseInt(startIndex + ((pivotIndex - startIndex) / 2), 10);
    }

    return pivotIndex;
  }
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
