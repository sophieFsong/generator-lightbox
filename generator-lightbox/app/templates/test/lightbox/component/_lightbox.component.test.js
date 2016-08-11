/**
 * Created by feng.song on 11/08/2016.
 */
'use strict';

describe('<%=ngApp%> component test', function() {
    beforeEach(module('<%=ngApp%>'));
    beforeEach(module('app/lightbox/component/lightbox.template.html'));
    var $compile, $rootScope;
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('With heading lightbox', function() {
        var element = $compile("<lightbox progress='10' complete='true'></lightbox>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("lightbox");
    });
});