angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('trainings', {
    	url: '/trainings',
    	component: 'hackathonTrainings'
    })
    .state('result', {
    	url: '/result',
    	params: {
    		text: null
    	},
    	component: 'hackathonResult'
    });
}
