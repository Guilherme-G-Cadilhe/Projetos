import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';

import ProductCard from '../../components/product-card/product-card.component';

import Spinner from '../../components/spinner/spinner.component';

// import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const GET_CATEGORY = gql`
query($title: String!) {
  getCollectionsByTitle(title: $title) {
    id,
    title,
    items {
      id
      name
      price
      imageUrl
    }
  }
}`

const SET_CATEGORY = gql`
mutation ($category: Category!) {
  addCategory(category: $category) {
    id,
    title,
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`


const Category = () => {
  const { category } = useParams();
  // const { categoriesMap, loading } = useContext(CategoriesContext);
  // const [products, setProducts] = useState(categoriesMap[category]);

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category
    }
  })

  // Nome de função customizada pra a função retornada, e os retornos padrões
  // const [ addCategory, { loading, error, data }] = useMutation(SET_CATEGORY)
  // addCategory({
  //   variables: {
  //     category: categoryObject
  //   }
  // })

  // const [products, setProducts] = useState(categoriesMap[category]);
  const [products, setProducts] = useState([]);

  console.log('loading :>> ', loading);
  console.log('data :>> ', data);
  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  useEffect(() => {

    if (data) {
      const { getCollectionsByTitle: { items } } = data
      console.log('items :>> ', items);
      setProducts(items)
    }
  }, [category, data])


  return (
    <Fragment>
      {loading ? <Spinner /> : (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}

    </Fragment>
  );
};

export default Category;
