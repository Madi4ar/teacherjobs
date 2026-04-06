interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`container px-3.5 md:px-0 md:w-full md:py-0 lg:w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
