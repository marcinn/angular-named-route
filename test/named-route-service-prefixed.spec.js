describe('namedRouteService', function() {
  beforeEach(module('testmodule'));

  var namedRouteService;

  beforeEach(function() {
    angular.module('test.app.config', []).config(function(namedRouteServiceProvider) {
        namedRouteServiceProvider.setUrlPrefix('/#');
    });
    module('test.app.config', 'test.app.config');
    inject(function(_namedRouteService_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      namedRouteService = _namedRouteService_;
    });
  });

  it('resolves home route with url prefix', function() {
    expect(namedRouteService.reverse('home')).toEqual('/#/');
  });

  it('resolves phone detail route using single parameter with url prefix', function() {
    expect(namedRouteService.reverse('phone-detail', 2)).toEqual('/#/phones/2');
  });

  it('resolves phone detail route using array parameter with url prefix', function() {
    expect(namedRouteService.reverse('phone-detail', [2])).toEqual('/#/phones/2');
  });

  it('resolves phone model detail route using array parameter with url prefix', function() {
    expect(namedRouteService.reverse('phone-model-detail', [2, 'c'])).toEqual('/#/phones/2/models/c');
  });

  it('resolves phone detail route using object parameter with url prefix', function() {
    expect(namedRouteService.reverse('phone-model-detail', {phoneId: 2, modelId: 'c'})).toEqual('/#/phones/2/models/c');
  });

  it('optional parameter can be ignored with url prefix', function () {
    expect(namedRouteService.reverse('optional-param-route')).toEqual('/#/optional/');
  });

  it('optional parameter can be provided with url prefix', function () {
    expect(namedRouteService.reverse('optional-param-route', 'test')).toEqual('/#/optional/test');
  });

  it('greedy parameter also works with url prefix', function () {
    expect(namedRouteService.reverse('admin-greedy', 3)).toEqual('/#/admin/3/view');
  });

  it('optional parameter can be provided using object with url prefix', function () {
    expect(namedRouteService.reverse('optional-param-route', {subpath: 'test'})).toEqual('/#/optional/test');
  });

  it('greedy parameter also works using object with url prefix', function () {
    expect(namedRouteService.reverse('admin-greedy', {page: 'ten/ne'})).toEqual('/#/admin/ten/ne/view');
  });
});
