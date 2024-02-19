import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link} from 'react-router-dom'


export const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://659ef14f6ee7621d94dbc67c.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/')

      }
    }

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <>Загрузка...</>;

  }


  return (
    <div className='container'>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
     <Link to='/'>
     <button className='button button--outline button--add'>
        <span>Назад</span>
      </button>
     </Link>
    </div>
  )
}


export default FullPizza;