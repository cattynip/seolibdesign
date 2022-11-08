interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <div className="mx-auto max-w-3xl">{children}</div>;
};

export default Layout;
