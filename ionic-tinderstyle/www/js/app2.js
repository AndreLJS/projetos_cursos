// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope) {

})

.controller('SearchCtrl', function($scope) {

})

.controller('ChatDetailCtrl', function($scope) {

})

.controller('ConfigCtrl', function($scope) {

})

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

 // Set up an abstract state for the tabs directive.
   .state('tab', {
   url: "/tab",
   abstract: true,
   templateUrl: "templates/tabs.html"
 })

 // Each tab has its own nav history stack:
 .state('tab.dash', {
   url: '/dash',
   views: {
     'tab-dash': {
       templateUrl: 'templates/tab-dash.html',
       controller: 'DashCtrl'
     }
   }
 })

 .state('tab.chats', {
     url: '/chats',
     views: {
       'tab-chats': {
         templateUrl: 'templates/tab-chats.html',
         controller: 'ChatsCtrl'
       }
     }
   })

   .state('tab.chatDetail', {
  url: '/chatDetail',
  views: {
    'tab-chats': {
      templateUrl: 'templates/tab-chat-details.html',
      controller: 'ChatDetailCtrl'
    }
  }
})

 .state('tab.search', {
   url: '/search',
   views: {
     'tab-search': {
       templateUrl: 'templates/tab-search.html',
       controller: 'SearchCtrl'
     }
   }
 })

 .state('tab.config', {
   url: '/config',
   views: {
     'tab-config': {
       templateUrl: 'templates/tab-config.html',
       controller: 'ConfigCtrl'
     }
   }
 });

 
 // If none of the above states are matched, use this as the fallback:
 $urlRouterProvider.otherwise('/tab/dash');
})
