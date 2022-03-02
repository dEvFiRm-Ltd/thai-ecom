// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

function Category() {
  const [content, setContent] = useState([]);

  const category = async () => {
    const cat = await fetch('https://devfirm-ecommerce.herokuapp.com/category');
    const data = await cat.json();
    setContent(data.category);
    console.log(data.category);
  };
  useEffect(() => {
    category();
    return () => {
      setContent([]);
    };
  }, []);

  return (
    <section className='container py-16 bg-white'>
      <div className='flex flex-row justify-center'>
        {content.map((item, index) => (
          <Link
            to={`/category/${item._id}`}
            key={index}
            className='w-[66px] mx-8 flex transition-all flex-col hover:bg-zinc-200 '
          >
            <div className='w-full h-[40px] '>
              <img
                src={`https://devfirm-ecommerce.herokuapp.com/${item.icon}`}
                alt={item.slug}
                className='m-auto h-full '
              />
            </div>
            <div className='w-full p-8 pb-0 text-center'>
              <p className='capitalize text-center font-semibold text-black '>
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
