import { APP_CONFIG_DEFAULTS } from '@/app-config';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { companyName, logo, logoDark } = APP_CONFIG_DEFAULTS;

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt={`${companyName} Logo`}
            className="h-9 w-auto max-w-[200px] object-contain drop-shadow"
          />
        </div>
      </header>

      {children}
    </>
  );
}
