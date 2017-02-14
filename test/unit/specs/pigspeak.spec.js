import pigspeak from 'src/lib/pigspeak'

describe('pig latin', () => {
  it('should convert words', () => {
    expect(pigspeak.piggify('hello')).to.equal('hello')
  })
})
