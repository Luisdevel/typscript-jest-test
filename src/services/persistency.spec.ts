import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSPy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSPy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso."', () => {
    const sut = new Persistency();
    const consoleSPy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSPy).toHaveBeenCalledWith('Pedido salvo com sucesso.');
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
