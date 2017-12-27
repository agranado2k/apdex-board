'use strict';

describe('Main', function(){
  var fixtureHTML;

  beforeEach(function() {
   fixtureHTML = '<div class="card">\
        <div class="app-info"></div>\
      </div>\
      <div id="userEmailColumn" class=""></div>\
      <div id="checkboxColumn"><label id="checkboxLabel" class=""></label></div>';
    document.body.insertAdjacentHTML('afterbegin', fixtureHTML);
  });

  it('should include grid class on card', function() {
    window.NewRelicChallenge.applyGridClassOnCards();

    var card = document.getElementsByClassName('card')[0];

    expect(card.classList).toContain('grid');
  });

  it('should include app-info-grid class on app-info', function() {
    window.NewRelicChallenge.applyAppInfoGridClassOnAppInfo();

    var appInfo = document.getElementsByClassName('app-info')[0];

    expect(appInfo.classList).toContain('app-info-grid');
  });

  it('should include app-name-grid class on app-name', function() {
    window.NewRelicChallenge.applyAppInfoGridClassOnAppInfoName();

    var appInfo = document.getElementsByClassName('app-name')[0];

    expect(appInfo.classList).toContain('app-name-grid');
  });

  it('should include user-email-grid class on user-email', function() {
    var userEmail = document.getElementById('userEmailColumn');
    var checkbox = document.getElementById('checkboxColumn');

    window.NewRelicChallenge.applyClassOnHeader();

    expect(userEmail.classList).toContain('user-email-grid');
    expect(checkbox.classList).toContain('checkbox-grid');

    window.NewRelicChallenge.applyClassOnHeader();

    expect(userEmail.classList).not.toContain('user-email-grid');
    expect(checkbox.classList).not.toContain('checkbox-grid');
  });

  it('should apply the class when change mode view', function() {
    var classOnCards = spyOn(window.NewRelicChallenge,'applyGridClassOnCards');
    var classOnAppInfo = spyOn(window.NewRelicChallenge,'applyAppInfoGridClassOnAppInfo');
    var classOnAppInfoName = spyOn(window.NewRelicChallenge,'applyAppInfoGridClassOnAppInfoName');
    var classOnHeader = spyOn(window.NewRelicChallenge,'applyClassOnHeader');

    window.NewRelicChallenge.changeModeView();

    expect(classOnCards).toHaveBeenCalled();
    expect(classOnAppInfo ).toHaveBeenCalled();
    expect(classOnAppInfoName ).toHaveBeenCalled();
    expect(classOnHeader ).toHaveBeenCalled();
  });
});
