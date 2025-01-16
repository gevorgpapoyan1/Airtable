import { useRef, useState } from "react";
import userOne from "../../../../assets/images/users/user-one.png";
import userTwo from "../../../../assets/images/users/user-two.png";
import userThree from "../../../../assets/images/users/user-three.png";

const QuickTransfer = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const usersData = [
    {
      id: 1,
      avatar: <img src={userOne as string} className="w-20 h-20 rounded-full" alt="userOne" />,
      user_name: "Livia Bator",
      position: "CEO",
    },
    {
      id: 2,
      avatar: <img src={userTwo as string} className="w-20 h-20 rounded-full" alt="userTwo" />,
      user_name: "Randy Press",
      position: "Director",
    },
    {
      id: 3,
      avatar: <img src={userThree as string} className="w-20 h-20 rounded-full" alt="userThree" />,
      user_name: "Workman",
      position: "Designer",
    },
  ];

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 150;
    }
  };

  const toggleButton = () => setIsEnabled(!isEnabled);

  return (
    <div className="col-span-12 rounded-25 bg-white p-7 xl:col-span-5">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex items-center mb-7 overflow-x-auto space-x-7 scrollbar-hide"
        >
          {usersData.map((user) => (
            <div key={user.id} className="flex flex-col gap-2">
              <div>{user.avatar}</div>
              <div className="flex flex-col items-center">
                <h2 className="text-black font-normal text-base">{user.user_name}</h2>
                <span className="text-sm font-normal text-[#718EBF]">{user.position}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow rounded-full w-12 h-12 flex items-center justify-center"
        >
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base font-normal text-[#718EBF]">Write Amount</span>

        <div className="relative w-[265px] h-[50px] rounded-full bg-[#EDF1F7] flex items-center justify-between px-7 py-4 transition-all">
          <div className="relative w-full h-full flex items-center">
            <div
              onClick={toggleButton}
              className="w-full flex text-[#718EBF] font-normal text-base cursor-pointer"
            >
              <button>525.50</button>
            </div>

            <div
              onClick={toggleButton}
              className="w-full flex justify-center text-gray-400 cursor-pointer"
            >
              <button>No choose me</button>
            </div>
          </div>

          <span
            className={`bg-black text-sm hover:bg-primary flex gap-3 items-center rounded-25 justify-center
             w-1/2 h-full transition-all duration-150 ease-linear rounded-full absolute left-1 text-white font-medium 
            ${isEnabled ? "left-1 text-white font-semibold bg-black" : "left-1/2 -ml-1 text-gray-800"}`}
          >
            {isEnabled ? "I'm Selected" : (
              <>
                <p className='text-base font-medium text-white'>Send</p>
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                    fill="white"
                  />
                </svg>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
