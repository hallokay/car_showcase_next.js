"use client";
import { SearchManufacturer } from "./index";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');

  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
