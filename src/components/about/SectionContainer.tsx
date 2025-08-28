import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <div
      className={`bg-[#fdeab1] box-border content-stretch flex flex-col gap-6 items-center justify-start px-6 md:px-12 py-8 md:py-14 relative rounded-[60px] shrink-0 w-full max-w-[700px] ${className}`}
    >
      {children}
    </div>
  );
}

interface WhiteCardProps {
  children: ReactNode;
  className?: string;
}

export function WhiteCard({ children, className = '' }: WhiteCardProps) {
  return (
    <div
      className={`bg-[#ffffff] box-border content-stretch flex flex-row gap-4 items-center justify-center px-4 md:px-6 py-6 md:py-10 relative rounded-[30px] shrink-0 w-full ${className}`}
    >
      <div className="border-[#333333] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      {children}
    </div>
  );
}
