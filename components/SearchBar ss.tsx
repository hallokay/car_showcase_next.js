// "use client";
// import { SearchManufacturer } from "./index";
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
//   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
//     <Image
//       src={'magnifying-glass.svg'}
//       alt="magnifying-glass"
//       width={40}
//       height={40}
//       className="object-contain"
//     />
//   </button>
// )

// export default function SearchBar({ setManufacturer, setModel }: any) {

//   const router = useRouter();
//   const [searchManufacturer, setSearchManufacturer] = useState('');
//   const [searchModel, setSearchModel] = useState('')

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (searchManufacturer === '' && searchModel === '') {
//       return alert('검색어를 입력해주세요.')
//     }

//     setModel(searchModel);
//     setManufacturer(searchManufacturer);
//   };


//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <div className="searchbar__item">
//         <SearchManufacturer
//           selected={searchManufacturer}
//           setSelected={setSearchManufacturer}
//         />
//         <SearchButton otherClasses='sm:hidden' />
//       </div>
//       <div className="searchbar__item">
//         <Image
//           src={'/model-icon.png'}
//           width={25}
//           height={25}
//           className="absolute w-[20px] h-[20px] ml-4"
//           alt="car model"
//         />
//         <input
//           type="text"
//           name="model"
//           value={searchModel}
//           onChange={(e) => setSearchModel(e.target.value)}
//           placeholder="tiguan"
//           className="searchbar__input"
//         />
//         <SearchButton otherClasses='sm:hidden' />

//       </div>
//       <SearchButton otherClasses='max-sm:hidden' />


//     </form>
//   );
// }
