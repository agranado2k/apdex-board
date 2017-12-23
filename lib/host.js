var NewRelicChallenge = NewRelicChallenge || {};

NewRelicChallenge.Host = function(name) {
  this.name = name;
  this.apps = [];

  //time complexity O(N)
  this.addApp = function(app) {
    var pos = this.findPosition(app, this.apps); //O(N)
    this.apps.splice(pos,0,app); //O(logN)
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

  //O(N)
  this.removeApp = function(app) {
    var appIndex = this.apps.indexOf(app);
    this.apps.splice(appIndex,1);
  };
}
