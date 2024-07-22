import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  username: string
};

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload { 
  const bearer = token.split(' ')[1];
  const data = jwt.verify(bearer, secret) as TokenPayload; 

  return data; 
}

export {
  sign,
  verify,
};