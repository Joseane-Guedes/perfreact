/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;

  onAddToWishlist: (id: number) => void;
}
//igualdade referencial

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem 
          key={product.id}
          product={product} 
          onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  );
}

/**
 * 1. Criar nova versão do componente;
 * 2. Comparar com a versão anterior;
 * 3. Se ha alterações, vai atualizar o que alterou;
 */

/* Aplicações do memo:
 * 1 - Pure functional Components <==> Funções puras são basicamente funções que dados os mesmos paramentros sempre retornam o mesmo resultado.
 * 2 - Renders too often
 * 3 - Re-renders with same props
 * 4 - Components with medium to big size
 */

/* UseMemo  / UseCallback
Evitar que alguma coisa que ocupe muito processamento seja refeito toda vez que o mesmo componente renderizar.
1 - Calculos pesados;
2 - Igualdade referencial - quando repassada a info para componente filho;
3 -
*/

/* Importante lembrar de inserir key quando realizar um map por exemplo. No caso
a nossa aplicação tem 1000 itens e o react precisa da key para identificação.
*/