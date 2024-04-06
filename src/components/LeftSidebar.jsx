import { useEffect, useState } from 'react';

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <p
          key={category.id}
          className={`h-16 ${
            category.id === '0' ? 'bg-neutral-200 text-neutral-700 font-semibold' : 'text-neutral-400 font-medium'
          } text-xl rounded-[5px] flex items-center pl-12 `}>
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
