import React from "react";
import { Layout} from "antd";
const { Header, Footer, Content } = Layout;
import style from "./style.module.css";
import { Poster,MyHeader } from "../../components";

const Home = () => {
  return (
    <Layout className={style.home}>
      <Header className={style.header}>
      <MyHeader/>
      </Header>
      <Content className={style.content}>
        <Poster/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
