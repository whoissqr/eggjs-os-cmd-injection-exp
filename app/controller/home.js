'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('cmd = '+ ctx.query.cmd);

    var exec = require('child_process').exec;
    var cmdProcess = exec(ctx.query.cmd);
    cmdProcess.stdout.pipe(process.stdout);

    this.ctx.body = 'hello, egg, from Shi Chao ^^^^^^! ';
  }
}

module.exports = HomeController;
