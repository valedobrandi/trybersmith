import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { usersFindAllReturnFromDB, usersListReturn } from '../../mocks/listUsers';
import UserModel from '../../../src/database/models/user.model';
import { productsListReturnFromDB } from '../../mocks/listProducts';
import ProductModel from '../../../src/database/models/product.model';
import { JWT_TOKEN } from '../../mocks/token';
import { userFindOneReturnFromDB } from '../../mocks/singleUser';

chai.use(chaiHttp);

describe('INTEGRATION - GET /users', function () {
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" list all users', async function () {
    const mockFindOneReturn = UserModel.build(userFindOneReturnFromDB)

    const returnFindAllUsersFromDB = usersFindAllReturnFromDB
      .map((instances) => UserModel.build(instances))

    const returnFindAllProductsFromDB = productsListReturnFromDB
      .map((instances) => ProductModel.build(instances))

    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn)
    sinon.stub(ProductModel, 'findAll').resolves(returnFindAllProductsFromDB)
    sinon.stub(UserModel, 'findAll').resolves(returnFindAllUsersFromDB)

    const httpResponse = await chai.request(app).get('/users').set('Authorization', JWT_TOKEN);;

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(usersListReturn)
  })
});
