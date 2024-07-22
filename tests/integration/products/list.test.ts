import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import { productsListReturnFromDB } from '../../mocks/listProducts';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import { userFindOneReturnFromDB } from '../../mocks/singleUser';
import { JWT_TOKEN } from '../../mocks/token';

chai.use(chaiHttp);

describe('INTEGRATION - GET /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" list all products', async function () {
    const returnFindAllFromDB = productsListReturnFromDB
      .map((instances) => ProductModel.build(instances))
    const mockFindOneReturn = UserModel.build(userFindOneReturnFromDB)
      
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);
    sinon.stub(ProductModel, 'findAll').resolves(returnFindAllFromDB)

    const httpResponse = await chai.request(app).get('/products')
    .set('Authorization', JWT_TOKEN);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productsListReturnFromDB)
  })
});
