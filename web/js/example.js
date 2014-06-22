/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/** @type {angular.Module} */
angular.module('exampleModule', [])
    .controller('exampleCtrl', ['$scope', '$window', '$http', '$q', ExampleCtrl]);

/**
 * @param {angular.$scope} $scope
 * @param {angular.$window} $window
 * @param {angular.$http} $http
 * @param {angular.$q} $q
 */
function ExampleCtrl($scope, $window, $http, $q) {
//    /** @type {angular.$q.Deferred} */
//    var deferred = $q.defer();
//    /** @type {angular.$q.Promise} */
//    var promise = deferred.promise;
//    
//    promise.then(function(/** @type {Object|null} */ value) {
//        $scope['data'] = value;
//    });

    var id = 1;
    
    /** @type {Object} */
    var config = {
        method: 'POST',
        url: 'rest/api'
    };
        
    /** @type {HttpPromise} */
    var httpPromise = $http(config);
    httpPromise
        .success(function(data, status, headers, config) {
            console.log('There\'s no problem.');
            console.log('Status: ' + status);
            console.log('Response: '+ JSON.stringify(data));
            
            if (data['response']['success']) {
                $scope.data = data.data;
            } else {
                $scope.error = JSON.stringify(data);
            }
        })
        .error(function(data, status, headers, config) {
            console.log('There\'s a problem!');
            console.log('Status: ' + status);
            console.log('Response: '+ data);
            $scope.error = JSON.stringify(data);
        });
    
    // scope variables and functions
//    $scope.error = null;
//    
//    $scope.system = null;
//    
//    $scope.addSystem = function() {
//        if ($scope.system === null) {
//            $scope.system = {
//                name: 'default system',
//                sloc: 0,
//                subSystems: [],
//                id: ++id
//            };
//        }
//    };
//    
//    $scope.addSubSystem = function(system) {
//        var subSystem = {
//            name: 'deafult subsystem',
//            sloc: 0,
//            components: [],
//            id: ++id
//        };
//        system.subSystems.push(subSystem);
//    };
//    
//    $scope.addComponent = function(subSystem) {
//        var component = {
//            name: 'default component',
//            slco: 0,
//            subComponents: [],
//            id: ++id
//        };
//        subSystem.components.push(component);
//    };
//    
//    $scope.system = {
//        name: 'blah',
//        sloc: 0,
//        subSystems: [
//            {
//                name: 'blah',
//                components: [
//                    {
//                        name: 'blah',
//                        subComponents: [
//                            {
//                                name: 'blah'
//                            }
//                        ]
//                    }
//                ]
//            },
//            {
//                name: 'blah2',
//                components: []
//            }
//        ]
//    };
};

/** @type {angular.$injector} */
var injector;

angular.element(document.documentElement).ready(function() {
    injector = angular.bootstrap(/** @type {Element} */ document.documentElement, ['exampleModule']);
});
