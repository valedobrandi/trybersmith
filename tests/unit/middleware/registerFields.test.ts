import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { NextFunction, Request, Response } from 'express';
import registerFields from '../../../src/middleware/registerFields';

chai.use(sinonChai);

describe('UNIT - MIDDLEWARE Register Fields', function () {
  const req = {} as Request;
  const res = {} as Response;
  let nextFunction: NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    nextFunction = sinon.spy() as NextFunction;
    sinon.restore();
  });

  it('1 - "BAD_REQUEST" there is no name field ', function () {
    req.body = { price: 'AnyPrice', userId: 1 }

    registerFields(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    expect(nextFunction).not.to.have.been.calledWith()
  });

  it('2 - "BAD_REQUEST" there is no price field ', function () {
    req.body = { name: 'Hagar', userId: 1 }

    registerFields(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"price" is required' });
    expect(nextFunction).not.to.have.been.calledWith()
  });

  it('3 - "BAD_REQUEST" there is no userId field ', function () {
    req.body = { name: 'Hagar', price: 'AnyPrice' }

    registerFields(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"userId" is required' });
    expect(nextFunction).not.to.have.been.calledWith()
  });

  it('4 - "BAD_REQUEST" UserId is not a number ', function () {
    req.body = { name: 'Hagar', price: 'AnyPrice', userId: "1" }

    registerFields(req, res, nextFunction)

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"userId" must be a number'  });
    expect(nextFunction).not.to.have.been.calledWith()
  });

});


