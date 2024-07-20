import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model'
import { registerProduct, registerProductReturnFromDB } from '../../mocks/registerNewProduct';
chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('1 - "CREATED" register a new product', async function () {
    const mockCreateReturn = ProductModel.build(registerProductReturnFromDB)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

    const httpResponse = await chai.request(app).post('/products')
    .send(registerProduct);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(registerProductReturnFromDB)
  } )

});
