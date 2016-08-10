/**
 * Created by feng.song on 10/08/2016.
 */
'use strict'

var generators = require('yeoman-generator');

var MyBase = generators.Base.extend

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
        packageJSON: function(){
            this.copy('_package.json','package.json');
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
                name: 'my-app', //TODO: make dynamic
                license: 'MIT',
                dependencies: {}
            };
            bowerJson.dependencies['angular'] = "~1.5.0";
            this.fs.writeJSON('bower.json',bowerJson);
            this.copy('bowerrc','.bowerrc');
        },
        scripts: function(){
              this.fs.copyTpl(
                  this.templatePath('app/_app.js'),
                  this.destinationPath('src/app/app.js'),
                  {
                      ngApp: this.appname,
                      appName: "my cool app"
                  }
              );
            this.fs.copyTpl(
                this.templatePath('app/lightbox/controller/_lightbox.controller.js'),
                this.destinationPath('src/app/lightbox/controller/lightbox.controller.js'),
                {
                    ngApp: this.appname,
                    appName: "my cool app"
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
    },
    bar: function(){
       this.log('inside bar');
   }
});