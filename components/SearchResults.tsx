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
            {results.map((product) => {
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