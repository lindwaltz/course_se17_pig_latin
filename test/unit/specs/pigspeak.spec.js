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
    expect(pigspeak.rovarify('Sjö')).to.equal('Sosjojö')
  })

  it('should convert sentences', () => {
    expect(pigspeak.rovarify('Farfar var en sjörävarsjäl.'))
      .to.equal('Fofarorfofaror vovaror enon sosjojörorävovarorsosjojälol.')
  })
})

describe('pigspeak: fikonspråket', () => {
  it('should convert words', () => {
    expect(pigspeak.fikonify('datorgrafik')).to.equal('fitorgrafik dakon')
    expect(pigspeak.fikonify('korv')).to.equal('firv kokon')
    expect(pigspeak.fikonify('kaffe')).to.equal('fiffe kakon')
    expect(pigspeak.fikonify('t')).to.equal('t')
    expect(pigspeak.fikonify('I')).to.equal('I')
  })

  it('should convert sentences', () => {
    expect(pigspeak.fikonify('Inga speciella svenska tecken.'))
      .to.equal('Finga ikon ficiella spekon finska svekon ficken tekon.')
  })

  it('it works with swedish Å QÄ Ö ', () => {
    expect(pigspeak.fikonify('Många pågar påtade.'))
      .to.equal('Finga måkon figar påkon fitade påkon.')
  })
})
