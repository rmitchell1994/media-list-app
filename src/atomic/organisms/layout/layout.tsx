import React, { FC } from "react";
import Header from "../../molecules/header/header";
import Footer from "../../molecules/footer/footer";
import { LayoutWrapper, ContentWrapper } from "./layout.styles";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
