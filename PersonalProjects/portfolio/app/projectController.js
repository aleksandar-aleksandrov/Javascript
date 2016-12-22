angular.module('portfolio.controllers')
    .controller('ProjectsController', ['$scope', function($route){
        var liPro = angular.element(document.querySelector('#li-project'))
        liPro.addClass('active')
}])