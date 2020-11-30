import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterPriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Luis', 'Henrique', '000.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Luis');
    expect(sut).toHaveProperty('lastName', 'Henrique');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luis', 'Henrique', '000.000.000-00');
    expect(sut.getName()).toBe('Luis Henrique');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

afterEach(() => jest.clearAllMocks());

describe('EnterpriseCustomer', () => {
  it('should have nameand cnpj', () => {
    const sut = createEnterPriseCustomer('Chevrollet', '0000.0000');
    expect(sut).toHaveProperty('name', 'Chevrollet');
    expect(sut).toHaveProperty('cnpj', '0000.0000');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterPriseCustomer('Chevrollet', '0000.0000');
    expect(sut.getName()).toBe('Chevrollet');
    expect(sut.getIDN()).toBe('0000.0000');
  });
});
