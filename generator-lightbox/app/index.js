/**
 * Created by feng.song on 10/08/2016.
 */
'use strict'

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function(){
      generators.Base.apply(this, arguments);
       this.argument('appname', {type: 'string', required: true});
        this.log('appname (arg):' + this.appname)
    },
   init: function(){
           this.log('inside init');
   },
    writing: {
        gulpFile: function(){
            this.copy('_gulpfile.js', 'gulpfile.js');
        },
        karma: function(){
            this.copy('_karma.conf.js', 'karma.conf.js');
        },
        packageJSON: function(){
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
            {
                appName: this.appname
            }
            );
        },
        git: function(){
            this.copy('gitignore','.gitignore');
        },
        appStaticFiles: function(){
            this.directory('styles','src/styles');
            this.directory('app/lightbox/setup', 'src/app/lightbox/setup');
        },
        bower: function(){
            var bowerJson = {
                name: this.appname, //TODO: make dynamic
                license: 'MIT',
                dependencies: {}
            };
            bowerJson.dependencies['angular'] = "~1.5.0";
            bowerJson.dependencies['angular-mocks'] = "~1.5.0";
            this.fs.writeJSON('bower.json',bowerJson);
            this.copy('bowerrc','.bowerrc');
        },
        scripts: function(){
              this.fs.copyTpl(
                  this.templatePath('app/_app.js'),
                  this.destinationPath('src/app/app.js'),
                  {
                      ngApp: this.appname,
                      appName: _.startCase(this.appname)
                  }
              );
            this.fs.copyTpl(
                this.templatePath('app/lightbox/controller/_lightbox.controller.js'),
                this.destinationPath('src/app/lightbox/controller/lightbox.controller.js'),
                {
                    ngApp: this.appname,
                    appName: _.startCase(this.appname)
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/lightbox/component/_lightbox.component.js'),
                this.destinationPath('src/app/lightbox/component/lightbox.component.js'),
                {
                    ngApp: this.appname
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/lightbox/service/_lightbox.service.js'),
                this.destinationPath('src/app/lightbox/service/lightbox.service.js'),
                {
                    ngApp: this.appname
                }
            );
        },
        test: function(){
            this.fs.copyTpl(
                this.templatePath('test/_app.test.js'),
                this.destinationPath('src/test/app.test.js'),
                {
                    ngApp: this.appname,
                    appName: _.startCase(this.appname)
                }
            );
            this.fs.copyTpl(
                this.templatePath('test/lightbox/controller/_lightbox.controller.test.js'),
                this.destinationPath('src/test/lightbox/controller/lightbox.controller.test.js'),
                {
                    ngApp: this.appname,
                    appName: _.startCase(this.appname)
                }
            );
            this.fs.copyTpl(
                this.templatePath('test/lightbox/component/_lightbox.component.test.js'),
                this.destinationPath('src/test/lightbox/component/lightbox.component.test.js'),
                {
                    ngApp: this.appname
                }
            );
            this.fs.copyTpl(
                this.templatePath('test/lightbox/service/_lightbox.service.test.js'),
                this.destinationPath('src/test/lightbox/service/lightbox.service.test.js'),
                {
                    ngApp: this.appname
                }
            );
        },
        html: function(){
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/index.html'),
                {
                    ngApp: this.appname
                }
            );
            this.fs.copy(
                this.templatePath('app/lightbox/component/_lightbox.template.html'),
                this.destinationPath('src/app/lightbox/component/lightbox.template.html')
            );
        }
    }
});