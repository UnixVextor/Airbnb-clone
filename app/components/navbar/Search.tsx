'use client';
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      onClick={() => {}}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-sm
            font-bold
            px-6
          "
        >
          Anywhere
        </div>
        <div 
          className="
            text-sm
            hidden 
            sm:block 
            font-bold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          Any Week
        </div>
        <div 
          className="
            pl-6 
            text-sm 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div 
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
