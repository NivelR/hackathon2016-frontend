angular
  .module('app')
  .component('hackathonResult', {
    templateUrl: 'app/result/result.html',
    controller: ResultController
  });

/** @ngInject */
function ResultController($http, $stateParams, $state) {
  var vm = this;

  vm.text = $state.params.text;

  $http
    .get('http://192.168.43.139:4000/hello?q=' + vm.text)
    .then(function (response) {
      vm.result = response.data;
    });
}
