import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { NextFunction, Request, Response } from 'express';
import authorization from '../../../src/middleware/authorization';
import { password } from '../../../src/database/config/database';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  let nextFunction: NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    nextFunction = sinon.spy() as NextFunction;
    sinon.restore();
  });

  it('1 - "UNAUTHORIZED" when there is no password field ', function () {
    req.body = { name: 'Hagar' }

    authorization(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required'});
    expect(nextFunction).not.to.have.been.calledWith()
  });

  it('2 - "UNAUTHORIZED" when there is no username field ', function () {
    req.body = { password: 'AnyPassWord' }

    authorization(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
    expect(nextFunction).not.to.have.been.calledWith()
  });


});