import { useLocation } from 'react-router-dom';
import { getPageName } from '../../shared/helpers/helpers.ts';

const useBreadcrumb = () => {
  const location = useLocation();
  const pageName = getPageName(location.pathname);

  return pageName;
};

export default useBreadcrumb;
