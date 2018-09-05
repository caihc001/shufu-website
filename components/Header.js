import Link from 'next/link'
//import testImg from '../static/image/shufu.png'
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from 'react-bootstrap/lib';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import css from '../static/css/bootstrap.min.css';
import Head from 'next/head'

const linkStyle = {
  display: 'flex',
  marginRight: 25,
  color:'#2979ff',
  textDecoration : 'none',
  fontFamily:'sans-serif',
  fontWeight:'300'
}

const iconStyle = {
  width: 45,
  height: 45
}

const linkContainer = {
  flex:1,
  display: 'flex',
  flexDirection:'row',
}

const titleStyle = {
  marginLeft:15,
  fontSize:22,
  fontWeight:'600',
  color:'#2979ff',
  fontFamily:'sans-serif',
  letterSpacing:2
}

const Header = () => (
  <Navbar className='navbar' style={{backgroundColor:'transparent',borderWidth:0,marginTop:20}} collapseOnSelect>
    <Head>
      <link href='../static/css/bootstrap.css' rel="stylesheet" />
    </Head>
  <Navbar.Header>
    <Navbar.Brand style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <img style={iconStyle} src={require('../static/image/shufu.png')}/>
      <a style={{marginLeft:20}} href="#brand">Siuvo</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="/index" style={{fontSize:15}}>
        关于我们
      </NavItem>
      <NavItem eventKey={2} href="/about" style={{fontSize:15}}>
        新闻中心
      </NavItem>
      <NavItem eventKey={3} href="/about" style={{fontSize:15}}>
        招贤纳士
      </NavItem>
      <NavItem eventKey={4} href="/about" style={{fontSize:15}}>
        联系我们
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header