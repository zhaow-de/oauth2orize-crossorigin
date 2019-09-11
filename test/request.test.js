const pkg = require('..');
const expect = require('chai').expect;

describe('extensions', () => {
  it('should return a mod', () => {
    const mod = pkg.extensions();
    expect(mod.name).to.equal('*');
    expect(mod.request).to.be.a('function');
  });

  it('should return an empty mod if no loginTicket', () => {
    const req1 = pkg.extensions().request({
      host: 'localhost',
    });
    expect(req1).to.eql({});
    const req2 = pkg.extensions().request({
      host: 'localhost',
      query: {
        utm: 'foobar',
      },
    });
    expect(req2).to.eql({});
  });
  it('should return a mod with loginTicket', () => {
    const req = pkg.extensions().request({
      host: 'localhost',
      query: {
        login_ticket: 'foobar',
      },
    });
    expect(req).to.eql({ loginTicket: 'foobar' });
  });
});
