import { useState } from 'react';
const SearchBar = () => {
   const [searchTerm, setSearchTerm] = useState('search');

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
   };

   return (
      <>
         <input
            className="search_input"
            onChange={changeHandler}
            type="text"
            value={searchTerm}
         />
         <div>{searchTerm}</div>

         <style jsx>
            {`
               .search_input {
                  color: var(--color-primary);
                  padding: var(--padding-base);
                  border: none;
                  border-bottom: 2px solid var(--color-primary);
                  border-radius: 0.2rem;
                  background: #eee;
                  font-size: 1rem;
               }
            `}
         </style>
      </>
   );
};

export { SearchBar };
