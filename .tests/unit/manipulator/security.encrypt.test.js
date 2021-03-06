
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Security = require('../../../manipulator/security');

describe('security encrypt method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {

    expect(function() { 
      Security.encrypt(null);
    }).to.throw('Invalid params');
  });

  it('should fail when data is invalid', async function() {

    expect(function() { 
      Security.encrypt({
        data: undefined,
      });
    }).to.throw('Invalid params');
  });

  it('should fail when key is invalid', async function() {

    expect(function() { 
      Security.encrypt({
        data: "some_secret",
        key: undefined
      });
    }).to.throw('Invalid params');
  });

  it('should fail when secret is invalid', async function() {

    expect(function() { 
      Security.encrypt({
        data: "some_secret",
        key: "some_key",
        secret: undefined
      });
    }).to.throw('Invalid params');
  });

  it('should success with encrypted data', async function() {
    const key = Security.createRandomKey();
    const secret = Security.createRandomSecret();
    const encryptdText = Security.encrypt({
      data: "some_data",
      key: key,
      secret: secret
    });

    const decryptedText = Security.decrypt({
      data: encryptdText,
      key: key,
      secret: secret
    });

    expect(typeof encryptdText === "string").to.equal(true);
    expect(decryptedText).to.equal("some_data");
  });

});