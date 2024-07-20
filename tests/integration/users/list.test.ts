import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { usersFindAllReturnFromDB, usersListReturn } from '../../mocks/listUsers';
import UserModel from '../../../src/database/models/user.model';
import { productsListReturnFromDB } from '../../mocks/listProducts';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" list all users', async function () {
    const returnFindAllUsersFromDB = usersFindAllReturnFromDB
      .map((instances) => UserModel.build(instances))

    const returnFindAllProductsFromDB = productsListReturnFromDB
      .map((instances) => ProductModel.build(instances))

    sinon.stub(ProductModel, 'findAll').resolves(returnFindAllProductsFromDB)
    sinon.stub(UserModel, 'findAll').resolves(returnFindAllUsersFromDB)

    const httpResponse = await chai.request(app).get('/users').send();

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(usersListReturn)
  })
});
