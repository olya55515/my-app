import React from 'react'
import { useSelector } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import { Sort, sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../Pagination';
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { useAppDispatch } from '../redux/store';




const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx))
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  };

  const getPizzas = async () => {


    const sortBy = sort && sort.sortProperty ? sort.sortProperty.replace('-', '') : '';
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';


    
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );



    window.scroll(0, 0);

  }




  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //     currentPage,
    //   };

    //   const queryString = qs.stringify(params, { skipNulls: true });

    //   navigate(`/?${queryString}`);
    // }

    // const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
    // const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
    // dispatch(
    //   setFilters({
    //     searchValue: params.search,
    //     categoryId: Number(params.category),
    //     currentPage: Number(params.currentPage),
    //     sort: sortObj || sortList[0],
    //   }),
    // );

    getPizzas();
    // isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // Парсим параметры при первом рендере
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //   }
  //   isMounted.current = true;
  // }, []);



  const pizzas = items.map((obj: any) => (
  
    <PizzaBlock  {...obj} />
    
    ));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ? (
          <div className='content__error-info'>
            <h2>Произошла ошибка 😔</h2>
            <p> сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.
            </p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home;
