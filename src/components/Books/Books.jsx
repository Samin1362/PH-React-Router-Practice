import React from 'react';
import { useLoaderData } from 'react-router';

const Books = () => {

  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className='text-[40px] text-bold text-center'>Books</h1>

    </div>
  );
};

export default Books;