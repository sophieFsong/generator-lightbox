/**
 * Created by feng.song on 10/08/2016.
 */

'use strict';

angular.module('<%= ngApp%>').component('lightbox', {
    templateUrl: 'app/lightbox/component/lightbox.template.html',
    bindings: {
        progress: '<',
        complete: '<',
        onClose: '&'
    },
    controller: function(){
        var ctrl = this;
        ctrl.close = function(){
            ctrl.onClose();
        }
        ctrl.progressStyle = {'width': ctrl.progress + '%'}
    }
});