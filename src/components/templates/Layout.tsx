import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>My Kake-bo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50 font-common">
        {children}
      </div>
    </>
  );
};
