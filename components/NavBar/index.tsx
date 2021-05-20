import { memo, useState } from 'react';
import { useRouter } from 'next/router';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { colors } from 'styles';

import { Navigation, NavButton, StyledIcon, MenuIcon } from './styles';
import Link from 'next/link';

const MENU_ROUTES = {
  DASHBOARD: '/dashboard',
  BROWSE: '/browse',
  NEW: '/new-project',
};

const NavBar: React.FC = () => {
  const t = useTranslationPrefix('General');
  const { route } = useRouter();
  console.log('path', route);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (): void => {
    // TODO
  };

  const toggleMenuState = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navigation isMenuOpen={isMenuOpen}>
      <div>
        <NavButton isActive={MENU_ROUTES.DASHBOARD === route}>
          <Link href={MENU_ROUTES.DASHBOARD}>{t('my_projects')}</Link>
        </NavButton>
        <NavButton isActive={MENU_ROUTES.BROWSE === route}>
          <Link href={MENU_ROUTES.BROWSE}>{t('browse_projects')}</Link>
        </NavButton>
        <NavButton isActive={MENU_ROUTES.NEW === route}>
          <Link href={MENU_ROUTES.NEW}>{t('create_new_project')}</Link>
        </NavButton>
      </div>
      <div>
        <Link href="/profile">
          <StyledIcon type="account" color={colors.white} />
        </Link>
        <StyledIcon type="power" color={colors.white} onClick={handleLogout} />
      </div>
      <MenuIcon type="menu" color={colors.white} onClick={toggleMenuState} />
    </Navigation>
  );
};

export default memo(NavBar);
