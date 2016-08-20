angular
  .module('app')
  .component('hackathonTrainings', {
    templateUrl: 'app/trainings/trainings.html',
    controller: TrainingsController
  });

/** @ngInject */
function TrainingsController() {
  var vm = this;
  vm.hola = "Hola";
  vm.forms = {
  	fields: [{
  		text: 'Corderas es malo',
  		types: [{
  			text: 'B'
  		}, {
  			text: 'N'
  		}, {
  			text: 'M'
  		}],
  		type: ''
  	}, {
  		text: 'Corderas es bueno',
  		types: [{
  			text: 'B'
  		}, {
  			text: 'N'
  		}, {
  			text: 'M'
  		}],
  		type: ''
  	}, {
  		text: 'Corderas',
  		types: [{
  			text: 'B'
  		}, {
  			text: 'N'
  		}, {
  			text: 'M'
  		}],
  		type: ''
  	}]
  };
}
