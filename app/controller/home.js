'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('cmd = ' + ctx.query.cmd);

    const exec = require('child_process').exec;
    const cmdProcess = exec(ctx.query.cmd);
    cmdProcess.stdout.pipe(process.stdout);

    this.ctx.body = 'hello, egg, from Shi Chao ^^^^^^! ';
  }
}

module.exports = HomeController;
