import HomeItem from '../components/homepage/item';
import CartItem from '../components/cart/item';
import ShowItem from '../components/show/item';

export const OK = 200

export const SMALL = 'S'
export const MEDIUM = 'M'
export const LARGE = 'L'
export const XTRA_LARGE = 'XL'
export const SIZES = [SMALL, MEDIUM, LARGE, XTRA_LARGE]

export const QUANTITIES = [1,2,3,4,5,6,7,8,9,10]

export const HOME = 'HOME'
export const CART = 'CART'
export const SHOW = 'SHOW'

export const ITEM_TYPES = {
  HOME: HomeItem,
  CART: CartItem,
  SHOW: ShowItem
}