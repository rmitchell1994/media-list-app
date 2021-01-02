import React from "react";
import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
import { LayoutWrapper, ContentWrapper } from "./layout.styles";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
