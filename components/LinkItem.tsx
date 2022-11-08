import { Link } from '@chakra-ui/react';

interface INavigationElement {
  href: string;
  target?: string;
  inHeader?: boolean;
  children: React.ReactNode;
}

const LinkItem = ({
  href,
  target,
  inHeader,
  children,
  ...props
}: INavigationElement) => {
  return (
    <Link
      href={href}
      target={target}
      display="flex"
      alignItems="center"
      py={inHeader ? 2 : 0}
      px={inHeader ? 2.5 : 0}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
