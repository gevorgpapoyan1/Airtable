import { useState } from 'react';
import UserOne from '../../../assets/images/users/profoile-icon.png';
import EditIcon from '../../../assets/icons/edit-icon.svg';
import ProfileForm from '../../settings/profile-form/ProfileForm.tsx';

const ProfileTab = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex mt-11.75 sm:mt-0 gap-5.5 sm:gap-14.5 flex-col items-center sm:flex-row sm:items-start w-full">
      <div className="h-24 w-24 rounded-full relative">
        <img src={(avatar || UserOne) as string} alt="User" />
        <span className="w-7.5 h-7.5 flex justify-center items-center absolute bg-black rounded-full bottom-1.25 -right-3">
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <img src={EditIcon as string} alt="Edit icon" />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </span>
      </div>
      <ProfileForm />
    </div>
  );
};

export default ProfileTab;