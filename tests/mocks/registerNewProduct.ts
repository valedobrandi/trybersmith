import { Model } from "sequelize"
import { ProductSequelizeModel } from "../../src/database/models/product.model"
import { Product } from "../../src/types/Product"

export const registerProduct = {
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    userId: 1
  }

  export const registerProductReturnFromDB: Product = {
    id: 6,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    userId: 1
  }