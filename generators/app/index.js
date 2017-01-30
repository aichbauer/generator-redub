'use strict'


var Generator = require('yeoman-generator');


module.exports = class extends Generator {

  constructor(args, opts) {

    super(args, opts);

  }


  method1() {

    this.log('test method 1');

  }


  method2() {

    this.log('test method 2');

  }

};