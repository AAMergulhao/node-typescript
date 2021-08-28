import express from 'express';
import * as http from 'http';

class App {
  private express: express.Application;
  public server: http.Server;

  constructor() {
    this.express = express();
    this.server = http.createServer(this.express);
  }
}

export default new App().server;
