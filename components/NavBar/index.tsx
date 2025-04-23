import { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { LOGIN_ROUTE } from 'utils/constants';
import { checkIfTokenExists } from 'utils/helpers';
import { colors } from 'styles';

import { Navigation, NavButton, StyledIcon, MenuIcon } from './styles';

const MENU_ROUTES = {
  DASHBOARD: '/dashboard',
  BROWSE: '/browse',
  NEW: '/new-project',
};

const NavBar: React.FC = () => {
  const t = useTranslationPrefix('General');
  const { route, push } = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const tokenExist = checkIfTokenExists();

    if (!tokenExist && logout) {
      push(LOGIN_ROUTE);
    }
  }, [logout, push]);

  const handleLogout = (): void => {
    global.localStorage?.removeItem('token');
    setLogout(true);
  };

  const toggleMenuState = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navigation $isMenuOpen={isMenuOpen}>
      <div>
        <NavButton $isActive={MENU_ROUTES.DASHBOARD === route}>
          <Link href={MENU_ROUTES.DASHBOARD}>{t('my_projects')}</Link>
        </NavButton>
        <NavButton $isActive={MENU_ROUTES.BROWSE === route}>
          <Link href={MENU_ROUTES.BROWSE}>{t('browse_projects')}</Link>
        </NavButton>
        <NavButton $isActive={MENU_ROUTES.NEW === route}>
          <Link href={MENU_ROUTES.NEW}>{t('create_new_project')}</Link>
        </NavButton>
      </div>
      <div>
        <StyledIcon type="power" color={colors.white} onClick={handleLogout} />
      </div>
      <MenuIcon type="menu" color={colors.white} onClick={toggleMenuState} />
    </Navigation>
  );
};

export default memo(NavBar);
