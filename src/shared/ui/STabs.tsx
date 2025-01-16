import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  initialTab?: string;
}

const STabs: React.FC<TabsProps> = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0]?.id);

  return (
    <div className="bg-white rounded-25 sm:p-6 p-5">
      <div className="mb-4 border-b border-stroke">
        <ul
          className="flex flex-wrap -mb-px text-sm gap-[30px] font-medium text-center"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li className="me-2" role="presentation" key={tab.id}>
              <button
                className={`flex flex-col items-center gap-3 text-base font-medium ${
                  activeTab === tab.id ? "text-black" : "text-[#718EBF] border-transparent"
                }`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="active-tab-underline"
                    style={{
                      width: "114px",
                      height: "5px",
                      background: "#232323",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  ></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {tabs
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              role="tabpanel"
              className="sm:p-7.5 rounded-lg"
              aria-labelledby={`${tab.id}-tab`}
            >
              {tab.component}
            </div>
          ))}
      </div>
    </div>
  );
};

export default STabs;
