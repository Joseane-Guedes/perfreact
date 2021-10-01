import { memo, useState } from "react";
import { AddProductToWishlistProps} from "./AddProductToWishlist";
import dynamic from 'next/dynamic'
import lodash from 'lodash';




const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  // return import('./AddProductToWishlist') Quando é export default
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist); //Quando não é export default
}, {
  loading: () => <span>Carregando...</span>
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}


export function ProductItemComponent({
  product,
  onAddToWishlist,
}: ProductItemProps) {
  const [isAddToWishlist, setIsAddingToWishList ] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      {isAddToWishlist && (
      <AddProductToWishlist
          onAddToWishList={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
        )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);

//- Memo realiza as seguintes comparações:
//shallow compare => comparação rasa
//{} === {} => false
// igualdade referencial