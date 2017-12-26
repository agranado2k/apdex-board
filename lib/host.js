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
    var endIndex = appList.length-1;
    var pivotIndex = 0
    if(endIndex === 0) return pivotIndex;

    while (startIndex <= endIndex){
      pivotIndex = parseInt((startIndex + endIndex) / 2);

      if (app.apdex < appList[pivotIndex].apdex) {
        if (pivotIndex === 0) {
          return pivotIndex;
        }
        else if (app.apdex >= appList[pivotIndex-1].apdex) {
          return pivotIndex;
        }
        else {
          endIndex = pivotIndex;
        }
      }else {
        if (pivotIndex === (appList.length-1)) {
          return pivotIndex;
        }
        else if (app.apdex <= appList[pivotIndex+1].apdex) {
          return pivotIndex + 1;
        }
        else {
          startIndex = pivotIndex + 1;
        }
      };
    }

    return pivotIndex;
  }

  //O(N)
  this.removeApp = function(app) {
    var appIndex = this.apps.indexOf(app);
    this.apps.splice(appIndex,1);
  };

  this.viewCreateHostTag = function(){
    var tag = '<li><span>'+ this.name +'</span><ul>';
    for(var i = 0; i < this.apps.length; i += 1){
      tag += this.apps[i].viewCreateAppTag();
    }
    tag += '</ul></li>';

    return tag;
  };
}
