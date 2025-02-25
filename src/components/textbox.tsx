"use client"

import { useState } from 'react';

function MyForm() {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event : any) => {
      setInputValue(event.target.value);
    };
  
    return (
      <textarea className="bg-inherit text-inherit border-solid w-full"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text here"
      />
    );
  }

export default MyForm;