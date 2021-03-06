import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from '../class/interfaces/car-item';

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWitchProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta', 40);
  const caartItem2 = createCartItem('Caneta', 1);
  sut.addItem(cartItem1);
  sut.addItem(caartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
  });

  it('shouldtest total and totalWithDiscount', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWitchProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWitchProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });
});
