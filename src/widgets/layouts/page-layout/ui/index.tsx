interface Props {
  children: React.ReactNode;
}
export function PageLayout(props: Props) {
  const { children } = props;

  return (
    <div
      className={`border-y-0 flex flex-col w-full h-[200vh] mx-auto max-w-[600px] desktop:max-w-[1200px] bg-background `}
    >
      {children}
    </div>
  );
}
