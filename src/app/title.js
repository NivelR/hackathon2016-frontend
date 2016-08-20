angular
  .module('app')
  .component('hackathonTitle', {
    templateUrl: 'app/title.html',
    controller: TitleController
  });

  	/** @ngInject */
	function TitleController($http, $state) {
	  var vm = this;
	  vm.text = '';

	  vm.analyze = function() {
	  	$state.go('result', { text: vm.text });
	  }
	}
