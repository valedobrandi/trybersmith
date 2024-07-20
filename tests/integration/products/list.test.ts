import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import { productsListReturnFromDB } from '../../mocks/listProducts';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" list all products', async function () {
    const returnFindAllFromDB = productsListReturnFromDB
      .map((instances) => ProductModel.build(instances))

    sinon.stub(ProductModel, 'findAll').resolves(returnFindAllFromDB)

    const httpResponse = await chai.request(app).get('/products').send();

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productsListReturnFromDB)
  })
});
