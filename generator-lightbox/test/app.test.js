/**
 * Created by feng.song on 11/08/2016.
 */
'use strict';

var path  = require('path');
var assert  = require('yeoman-assert');
var helper  = require('yeoman-test');


describe('lightbox:app', function(){
    describe('default', function(){
        before(function(done){
            helper.run(path.join(__dirname,'../app'))
                .withArguments(['myLightboxApp'])
                .withOptions({skipInstall: true})
                .on('end',done);
        });

        it('creates files', function(){
            assert.file([
                'package.json',
                'src/app/app.js',
                '.bowerrc',
                '.gitignore',
            ])
        });

        it('adds default ngApp', function(){
            assert.fileContent('src/app/app.js',/angular.module\('myLightboxApp'/)
        });

        if('inject default ngApp',function(){
                assert.fileContent('src/index.html', /<html lang="en" ng-app="myLightboxApp" class="no-js">/)
        });
    });


})