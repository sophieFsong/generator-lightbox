/**
 * Created by feng.song on 10/08/2016.
 */
angular.module('<%= ngApp%>')
    .factory('LigthboxService', ['$log', '$http', function ($log,$http) {

        return {
                getSetupData: function() {
                    // the query code here.
                    return $http.get('app/lightbox/setup/data.json').then(function(response){
                        return response.data;
                    });
                }
        };

    }])