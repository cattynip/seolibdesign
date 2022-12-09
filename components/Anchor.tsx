import { useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface IAnchor {
  href: string;
  colored?: boolean;
  children: React.ReactNode;
}

const Anchor = ({
  href,
  colored,
  children,
  ...props
}: IAnchor & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const anchorTextColor = useColorModeValue('#4340ff', 'orange');

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        style={{
          cursor: 'pointer',
          color: colored ? anchorTextColor : 'white'
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
