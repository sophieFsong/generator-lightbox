/**
 * Created by feng.song on 10/08/2016.
 */
    'use strict';
    angular.module('<%= ngApp%>')
        .controller('LightboxCtrl',['$scope','LigthboxService','$interval',function($scope, LigthboxService,$interval){
            var setupData,diff;
            var promise;
            var step = 100;
            $scope.enable = true;
            LigthboxService.getSetupData().then(function(data){
                setupData = data.data.lightbox;
                diff = setupData.finish - setupData.start;
                step = 100;
                $scope.reset();
                $scope.start(setupData,diff,step);
            });
            $scope.reset = function(){
                $scope.progress = 0;
                $scope.complete = false;
            }
            $scope.close = function () {
                $scope.enable = false;
            }
            $scope.start = function(setupData,diff,step){
                $scope.enable = true;
                $scope.stop();
                promise = $interval(
                    function(){
                        $scope.progress = $scope.progress + diff / (setupData.duration / step)
                    }, step)
            }
            $scope.open = function(){
                $scope.start(setupData,diff,step);
            }
            $scope.stop= function(){
                $interval.cancel(promise);
            }
            $scope.$watch('progress', function(){
                if($scope.progress >= diff){
                    $scope.stop();
                    $scope.complete = true;
                }
            })
            /*while($scope.progress < diff){
                $scope.progress = $scope.progress + diff / setupData.duration
            }*/
        }]);