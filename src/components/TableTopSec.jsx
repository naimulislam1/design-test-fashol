import React from "react";
import {
  HiOutlineBars3BottomLeft,
  HiPlus,
  HiMagnifyingGlass,
  HiOutlinePaperAirplane,
  HiChevronRight,
  HiChevronLeft,
  HiChevronDown,
} from "react-icons/hi2";

const TableTopSec = () => {
  return (
    <div className="flex justify-between items-center mb-7">
      {/* Top Left */}
      <div className="flex items-center gap-4">
        <h3 className="text-[#298E32] text-xl">Item List</h3>
        {/* search Field */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute top-[9px] left-[10px] text-[#298E32] text-xl"></HiMagnifyingGlass>
          <input
            type="text"
            className="border border-[#298E32] rounded-lg px-10 py-1 focus:outline-none focus:ring-2 focus:ring-[#298E32]"
            placeholder="id, name, phone...."
          />
          <HiOutlinePaperAirplane className="absolute top-[9px] right-[10px] text-[#298E32] text-xl">
            {" "}
          </HiOutlinePaperAirplane>
        </div>
        <button>
          <HiOutlineBars3BottomLeft className="text-[#298E32] text-xl font-semibold"></HiOutlineBars3BottomLeft>
        </button>
        <button className="bg-[#298E32] text-white px-4 py-1 rounded-md">
          Reset
        </button>
      </div>
      {/* Top Right */}
      <div className="flex items-center gap-4">
        <div>
          <ul className="flex items-center gap-2 -space-x-px h-8 text-sm">
            <li>
              <div className="">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label
                    tabIndex={0}
                    className=" flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300 cursor-pointer"
                  >
                    25 <HiChevronDown className="inline ml-1"></HiChevronDown>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box text-[#298E32]"
                  >
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300 mb-1"
                      >
                        26
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
                      >
                        27
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                3
              </a>
            </li>
            <li className="text-3xl text-[#298E32] ">. . . .</li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                7
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                8
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                9
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                <HiChevronLeft className="inline"></HiChevronLeft>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-[#298E32] bg-green-50 border border-green-300 hover:bg-[#51dc5d] hover:text-gray-700 dark:bg-[#298E32]  dark:hover:bg-green-300 rounded-md duration-300"
              >
                <HiChevronRight className="inline"></HiChevronRight>
              </a>
            </li>
          </ul>
        </div>
        <button className="border-2 border-green-600 px-4 py-2 rounded font-semibold text-[16px] text-[#298E32]">
          Add Items{" "}
          <HiPlus className="inline ml-1 border-2 border-[#298E32] rounded-full font-bold text-[#298E32]"></HiPlus>{" "}
        </button>
      </div>
    </div>
  );
};

export default TableTopSec;
