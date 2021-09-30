import { memo } from 'react'


interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}
//- Memo realiza as seguintes comparações:
//shallow compare => comparação rasa
//{} === {} => false
// igualdade referencial


export function ProductItemComponent({ product }: ProductItemProps ) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem =  memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product) 
})


