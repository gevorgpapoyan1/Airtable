import ProfileTab from "../settings/tabs/ProfileTab.tsx";
import PreferencesTab from "../settings/tabs/PreferencesTab.tsx";
import SecurityTab from "../settings/tabs/SecurityTab.tsx";
import STabs from '../../shared/ui/STabs.tsx';

const SettingsComponent = () => {
  const tabs = [
    { id: "profile", label: "Edit Profile", component: <ProfileTab /> },
    { id: "preferences", label: "Preferences", component: <PreferencesTab /> },
    { id: "security", label: "Security", component: <SecurityTab /> },
  ];

  return <STabs tabs={tabs} initialTab="profile" />;
};

export default SettingsComponent;
