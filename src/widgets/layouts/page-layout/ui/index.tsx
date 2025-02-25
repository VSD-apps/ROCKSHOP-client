interface Props {
  children: React.ReactNode;
}
export function PageLayout(props: Props) {
  const { children } = props;

  return (
    <div className={`flex flex-col w-full h-[100vh] mx-auto max-w-[600px] desktop:max-w-[1200px] bg-[#f5f5f5]`}>
      {children}
    </div>
  );
}
