import { memo } from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';

type Props = {
  href: string;
  text: string;
  center?: boolean;
};

const LinkButton: React.FC<Props> = ({ href, text, center }) => {
  return (
    <Wrapper $center={center}>
      <Link href={href}>{text}</Link>
    </Wrapper>
  );
};

export default memo(LinkButton);
