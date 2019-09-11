const pkg = require('..');
const expect = require('chai').expect;

describe('oauth2orize-crossorigin', () => {
  it('should export extensions', () => {
    expect(pkg.extensions).to.be.an('function');
  });
});
