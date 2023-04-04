import { useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface IAnchor {
  href: string;
  colored?: boolean;
  children: React.ReactNode;
}

const Anchor = ({
  href: linkTo,
  colored,
  children,
  ...props
}: IAnchor & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const anchorTextColor = useColorModeValue('#4340ff', 'orange');

  return (
    <Link href={linkTo} passHref legacyBehavior>
      <a
        style={{
          cursor: 'pointer',
          color: colored ? anchorTextColor : 'auto'
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
