import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/images/logo/logo.svg';
import pages from '../../menu-items/pages.ts';
import { toggleSidebar, selectSidebarState } from '../../store/slices/globalSlice.ts';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  const sidebarOpen = useSelector(selectSidebarState);

  const trigger = useRef<HTMLDivElement | null>(null);
  const sidebar = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!trigger.current) return;
      if (!sidebarOpen || trigger.current.contains(target)) return;
      dispatch(toggleSidebar());
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen, dispatch]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      dispatch(toggleSidebar());
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen, dispatch]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 border-r border-stroke flex h-screen w-62.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-[38px] py-8 lg:py-6.5">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" />
          <span className="text-lg text-black font-extrabold">Soar Task</span>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => dispatch(toggleSidebar())}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="py-4">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {pages.children.map(({ id, title, url, icon }) => (
                <li
                  key={id}
                  className={`rounded-sm ${
                    pathname.includes(url)
                      ? 'border-l-4 border-black'
                      : ''
                  }`}
                >
                  <NavLink
                    to={url}
                    className="group flex items-center gap-4 px-8 py-3"
                  >
                    {icon && (
                      <img
                        src={icon as any}
                        width={28}
                        height={28}
                        alt="Item"
                        style={{
                          filter: pathname.includes(url) ? 'invert(1)' : 'none',
                          borderRadius: '8px',
                          paddingRight: 3,
                        }}
                      />
                    )}
                    <span
                      className={`text-lg font-medium ${
                        pathname.includes(url) ? 'text-black' : 'text-[#B1B1B1]'
                      }`}
                    >
                      {title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
