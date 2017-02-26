import pigspeak from 'src/lib/pigspeak'

describe('pigspeak: pig latin', () => {
  it('should convert words', () => {
    expect(pigspeak.piggify('hello')).to.equal('ellohay')
    expect(pigspeak.piggify('orld')).to.equal('orldway')
    expect(pigspeak.piggify('world')).to.equal('orldway')
    expect(pigspeak.piggify('dworl')).to.equal('orldway')
    expect(pigspeak.piggify('English')).to.equal('Englishway')
  })

  it('should convert sentences', () => {
    expect(pigspeak.piggify('Hello the Yarn, in the Beautiful World.'))
      .to.equal('Ellohay ethay Yarnway, inway ethay Eautifulbay Orldway.')
    expect(pigspeak.piggify('Sample text for use in translation. Contains English words, commas, semicolons and other style-related thingies; alas!'))
      .to.equal('Amplesay exttay orfay useway inway anslationtray. Ontainscay Englishway ordsway, ommascay, emicolonssay andway otherway ylestay-elatedray ingiesthay; alasway!')
  })
})

describe('pigspeak: rövarspråket', () => {
  it('should convert words', () => {
    expect(pigspeak.rovarify('hej')).to.equal('hohejoj')
    expect(pigspeak.rovarify('Pippi')).to.equal('Popipoppopi')
  })

  it('should convert sentences', () => {
    expect(pigspeak.rovarify('Farfar var en sjörävarsjäl.'))
      .to.equal('Fofarorfofaror vovaror enon sosjojörorävovarorsosjojälol.')
  })
})
