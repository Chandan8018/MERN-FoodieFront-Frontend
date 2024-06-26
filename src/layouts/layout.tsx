import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <div className='flex-1 mx-auto py-10 container'>{children}</div>
    </div>
  );
}

export default Layout;
