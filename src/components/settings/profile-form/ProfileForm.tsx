import React from 'react';
import SButton from '../../../shared/ui/SButton.tsx';
import SInput from '../../../shared/ui/SInput.tsx';

const ProfileForm: React.FC = () => {
  return (
    <form className="w-full">
      <div className="grid gap-y-5.5 gap-x-7.5 sm:mb-10.5 mb-4 md:grid-cols-2">
        <SInput
          type="text"
          id="your_name"
          label="Your Name"
          defaultValue="Charlene Reed"
          required
        />
        <SInput
          type="text"
          id="user_name"
          label="User Name"
          defaultValue="Charlene Reed"
          required
        />
        <SInput
          type="email"
          id="email"
          label="Email"
          defaultValue="charlenereed@gmail.com"
          required
        />
        <SInput
          type="password"
          id="password"
          label="Password"
          defaultValue="Pass123!"
          required
        />
        <SInput
          type="date"
          id="date-of-birth"
          label="Date of Birth"
          defaultValue="1990-01-25"
          required
        />
        <SInput
          type="text"
          id="present-address"
          label="Present Address"
          defaultValue="San Jose, California, USA"
          required
        />
        <SInput
          type="text"
          id="permanent-address"
          label="Permanent Address"
          defaultValue="San Jose, California, USA"
          required
        />
        <SInput
          type="text"
          id="city"
          label="City"
          defaultValue="San Jose"
          required
        />
        <SInput
          type="number"
          id="postal-code"
          label="Postal Code"
          defaultValue="45962"
          required
        />
        <SInput
          type="text"
          id="country"
          label="Country"
          defaultValue="USA"
          required
        />
      </div>
      <SButton
        type="submit"
        label="Save"
        className="!px-17 float-right"
      />
    </form>
  );
};

export default ProfileForm;
