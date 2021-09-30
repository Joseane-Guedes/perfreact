/* eslint-disable react/jsx-key */
import { ProductItem } from "./ProductItem";

    interface SearchResultsProps {
        results: Array<{
          id: number;
          price: number;
          title: string;
        }>
}

export function SearchResults ({results}: SearchResultsProps) {
    return (
        <div>
            {results.map(product => {
                return (
                    <ProductItem product={product} />
                );
            })}

        </div>
    )
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