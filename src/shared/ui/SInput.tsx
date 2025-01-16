import { InputHTMLAttributes, useState } from 'react';

interface SInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const SInput = ({
  label,
  id,
  type = "text",
  className = "",
  ...props
}: SInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <label htmlFor={id} className="block mb-3 text-base font-normal text-black">
        {label}
      </label>
      <input
        id={id}
        type={showPassword ? "text" : type}
        className="bg-none border border-[#DFEAF2] text-[#718EBF] font-normal text-[15px] rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-4"
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-5 top-[40%] flex items-center text-[#718EBF]"
          onClick={handleToggle}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {!showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
              <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
              <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
            </svg>)}
        </button>
      )}
    </div>
  );
};

export default SInput;
