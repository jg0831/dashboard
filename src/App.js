import './App.css';
import { Layout, Typography, Avatar, Row, Col, Image } from 'antd';
import SidebarMenu from './components/SidebarMenu';
import LeftGrid from './components/LeftGrid';
import RightGrid from './components/RightGrid';
import logo from './logo.svg'

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;


  // let handleClick = e => {
  //   console.log('click ', e);
  // };
  return (
    <div className="App">
      <Layout>
        <Header>
          <Image
            width={100}
            src={logo}
          />
          {/* <Row gutter={[5, 0]}>
            <Col>     <Image
              width={100}
              src="./logo.svg"
            /></Col>
          </Row> */}
        </Header>
        <Layout>
          <Sider>
            <SidebarMenu />
          </Sider>
          <Layout>
            <Content>
              <Row>
               <LeftGrid />
              <RightGrid />   
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
