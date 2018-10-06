import * as express from 'express';

export interface ApplicationWs extends express.Application {
    ws (route: string, ...cb): ApplicationWs; 
  }