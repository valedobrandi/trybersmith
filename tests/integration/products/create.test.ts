import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model'
import { registerProduct, registerProductReturnFromDB } from '../../mocks/registerNewProduct';
import UserModel from '../../../src/database/models/user.model';
import { userFindOneReturnFromDB } from '../../mocks/singleUser';
chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" register a new product', async function () {
    const mockCreateReturn = ProductModel.build(registerProductReturnFromDB)
    const mockFindOneReturn = UserModel.build(userFindOneReturnFromDB)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn)

    const httpResponse = await chai.request(app).post('/products')
    .send(registerProduct);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(registerProductReturnFromDB)
  } );

  it('2 - "BAD_REQUEST" register a new product', async function () {
    const mockCreateReturn = ProductModel.build(registerProductReturnFromDB)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)
    sinon.stub(UserModel, 'findOne').resolves(null)

    const httpResponse = await chai.request(app).post('/products')
    .send(registerProduct);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"userId\" not found"})
  } )

});
