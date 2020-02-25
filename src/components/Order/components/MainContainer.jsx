import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Avatar, Dropdown, Layout, Menu, Icon, Input } from "antd";
import { DASHBOARD_MENU_STRING, SUB_MENU_STRING } from "./constants";
// import { logoSvg } from './logo';
import './style.scss';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


const dropDownMenu = () => (
  <Menu>
    <Menu.Item>
      Me
    </Menu.Item>
    <Menu.Item>
      <Link to="#/">Profile</Link>
    </Menu.Item>
  </Menu>
)
const MainContainer = ({ children }) => {
  // const logoIcon = () => <Icon component={logoSvg} />;

  const { path } = useRouteMatch();
  console.log(path);
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} collapsible trigger={null}>
        <Icon
          className="trigger"
          type={collapsed ? "menu" : "close"}
          onClick={toggle}
        />

        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          {DASHBOARD_MENU_STRING.map(menu => {
            const { icon, menuKey, menuText, menuUrl } = menu;
            const menuLink = `${path}/${menuUrl}`;
            return menuText === "Operations" ? (
              <SubMenu
                key={menuKey}
                title={
                  <>
                    <Icon type={icon} />
                    <span>{menuText}</span>
                  </>
                }
              >
                {SUB_MENU_STRING.map(submenu => {
                  const { key, text, url } = submenu;
                  const links = `${path}/${url}`;
                  return (
                    <Menu.Item key={key}>
                      <Link to={links}>{text}</Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={menuKey}>
                <Link to={menuLink}>
                  <Icon type={icon} />
                  <span>{menuText}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>

      <Layout>
        <Header className="nav--header">
          <div>
            {/* {logoIcon()} */}
            <h1>LOGO</h1>
          </div>
          <Menu
            //   onClick={this.handleClick}
            //   selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="search">
              <Input
                placeholder="Search"
                prefix={
                  <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Menu.Item>
            <Menu.Item key="mail">
              <Icon type="mail" />
              Message
            </Menu.Item>
            <Menu.Item key="cart">
              <Icon type="shopping-cart" />
              Market Place
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="unordered-list" />
              Notification
            </Menu.Item>
            <Dropdown overlay={dropDownMenu} trigger={['click']}>
                <a>
                  <Avatar icon="user" />
                  <span>Me<Icon type="caret-down" /></span>
                </a>
            </Dropdown>
          </Menu>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContainer;
