'use strict';

describe('Service: currencykey', function () {

  // load the service's module
  beforeEach(module('currencyApp'));

  // instantiate service
  var currencykey;
  beforeEach(inject(function (_currencykey_) {
    currencykey = _currencykey_;
  }));

  it('should do something', function () {
    expect(!!currencykey).toBe(true);
  });

});
