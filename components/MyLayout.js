import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const Layout = (props) => {
    return (
    <div>
        <Header />
        <div style={layoutStyle}>
            {props.children}
        </div>
    </div>
    )
}
  


export default Layout