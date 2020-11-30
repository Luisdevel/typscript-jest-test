import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSPy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSPy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:", and msg', () => {
    const sut = createSut();
    const consoleSPy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSPy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});

// describe('TESTANDO ALGUMA COISA', () => {
//   it('should return one', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
// });

// describe('TESTANDO ALGUMA COISA', () => {
//   test('should retrn Luis', () => {
//     const name = 'Luis';
//     expect(name).toBe('Luis');
//   });
// });
