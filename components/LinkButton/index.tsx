import { memo } from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';

type Props = {
  href: string;
  text: string;
};

const LinkButton: React.FC<Props> = ({ href, text }) => {
  return (
    <Wrapper>
      <Link href={href}>{text}</Link>
    </Wrapper>
  );
};

export default memo(LinkButton);
