import { Model } from "sequelize"
import { Product } from "../../src/types/Product"


export const productsListReturnFromDB: Product[] = [
    {
      id: 1,
      name: 'Excalibur',
      price: '10 peças de ouro',
      userId: 1
    },
    {
      id: 2,
      name: 'Espada Justiceira',
      price: '20 peças de ouro',
      userId: 1
    },
    {
      id: 3,
      name: 'Lira de Orfeu',
      price: '1 peça de ouro',
      userId: 2
    },
    {
      id: 4,
      name:' Armadura de Aquiles',
      price: '1 peça de ouro',
      userId: 2
    },
    {
      id: 5,
      name: 'Harpa de Dagda',
      price: '15 peças de ouro',
      userId: 3
    },
    {
      id: 6,
      name: 'Arco Escudo Invejável',
      price: '3 Gemas da Noite',
      userId: 1
    }
  ]

  