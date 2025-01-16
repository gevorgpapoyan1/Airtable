import { useDispatch } from 'react-redux';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { toggleSidebar } from '../../store/slices/globalSlice.ts';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white border-b border-stroke">
      <div className='px-6 py-4 flex flex-col space-between items-stretch	gap-5 2xl:px-11 2xl:py-5 flex flex-grow items-center justify-between'>
        <div className="flex flex-grow items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleSidebar())
              }}
              className="z-99999 block rounded-sm bg-white p-1.5 shadow-sm lg:hidden"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z" fill="#343C6A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z" fill="#343C6A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z" fill="#343C6A"/>
              </svg>

            </button>
          </div>

          <div className="block">
            <Breadcrumb />
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="sm:block hidden w-[255px]"
            style={{
              background: "#F5F7FA",
              borderRadius: "40px",
              padding: "15px 25px"
            }}
          >
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-body hover:fill-primar"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Search for something"
                  className="w-full bg-[transparent] pl-9 pr-4 text-black focus:outline-none placeholder-[#8BA3CB] xl:w-125"
                />
              </div>
            </form>
          </div>

          <ul className="hidden lg:flex items-center gap-2 2xsm:gap-4">
            <DropdownNotification />
            <DropdownMessage />
          </ul>

            <DropdownUser />
          </div>
        </div>
        <div className="sm:hidden block w-full"
            style={{
              background: "#F5F7FA",
              borderRadius: "40px",
              padding: "15px 25px"
            }}
          >
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-body"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Search for something"
                  className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-nonexl:w-125"
                />
              </div>
            </form>
          </div>
      </div>
    </header>
  );
};

export default Header;
