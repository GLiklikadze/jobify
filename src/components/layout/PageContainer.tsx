const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="z-0 min-h-[34rem] pt-8">{children}</div>;
};

export default PageContainer;
