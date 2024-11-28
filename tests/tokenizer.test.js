const { tokenizer } = require('../src/tokenizer');

describe(tokenizer, () => {
  it('should return true', () => {
    expect(tokenizer('hello wold')).toBe(true);
  });
});
