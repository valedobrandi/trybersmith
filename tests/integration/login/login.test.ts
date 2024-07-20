import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import { userFindOneReturnFromDB } from '../../mocks/singleUser';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () {
  
  beforeEach(function () { sinon.restore(); });
  it('1 - "SUCCESSFUL" login', async function () {
    const mockFindOneReturn = UserModel.build(userFindOneReturnFromDB)

    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn)

    const httpResponse = await chai.request(app).post('/login').send(
      { username: 'Hagar', password: 'AnyPassWord' }
    );

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token')
  });

  it('1 - "UNAUTHORIZED" username inválido', async function () {

    sinon.stub(UserModel, 'findOne').resolves(null)

    const httpResponse = await chai.request(app).post('/login').send(
      { username: 'Hagar', password: 'AnyPassWord' }
    );

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' })
  });

  it('1 - "UNAUTHORIZED" password inválido', async function () {
    const mockFindOneReturn = UserModel.build(userFindOneReturnFromDB)

    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn)

    const httpResponse = await chai.request(app).post('/login').send(
      { username: 'Hagar', password: 'WrongPassword' }
    );

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' })
  });

});
