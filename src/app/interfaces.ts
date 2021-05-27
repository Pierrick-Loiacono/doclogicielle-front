/**
 * Enum for user type
 */
enum USERTYPE {
  ADMIN = "ADMIN",
  USER = "USER"
}

/**
 * Enum for the state of a construction
 */
enum CONSTRUCTION_STEPS {
  WAITING = "WAITING",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
  LATE = "LATE"
}

/**
 * Interface for users
 */
interface User {
  id: number
  firstName: string
  lastName: string
  mail: string
  password: string
  usertype: USERTYPE
}

/**
 * Interface for suppliers
 */
interface Provider {
  id: number
  firmName: string
  address: string
  phone: string
}

/**
 * Interface for products
 */
interface Product {
  id: number
  designation: string
  price: number
  quantity: number
  provider: Provider
}

/**
 * Interface for constructions
 */
interface Construction {
  id: number
  products: Map<Product, number>
  price: number
  state: CONSTRUCTION_STEPS
}


class NewProduct {
  designation: string
  price: number
  quantity: number
  provider: number

  /**
   * Constructor for NewProduct
   * @param {string} designation name of product
   * @param {number} price price of product
   * @param {number} quantity available quantity for this product
   * @param {number} provider provider id
   */
  constructor(designation: string, price: number, quantity: number, provider: number) {
    this.designation = designation;
    this.price = price;
    this.quantity = quantity;
    this.provider = provider;
  }

}
