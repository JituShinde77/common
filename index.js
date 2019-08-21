//angular-route
import angular from 'angular';
import routeProvider from 'angular-route';

import receipe from './modules/receipe/index';
import book from './modules/book/index';
import AppComponent from './index.component';
import Common from './components/Views/common/common';

//import './css/bookpage.css';
//import './css/mainpage.css';
 angular.module('myApp', 
    [
        'ngRoute',
        'app.common',
        'receipe',
        'book'
    ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl : '/src/modules/receipe/views/receipe.html',
        controller: 'indexController'
    })
    .otherwise({
         redirectTo: '/Home'
     });
     
   
}]) 
.component('app', AppComponent);


