import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { DASHBOARD_MENU_STRING, SUB_MENU_STRING } from './constants';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const MainContainer = ({children}) => {
    const { path } = useRouteMatch();
    console.log(path)
    const [collapsed, setCollapsed] = useState(false);
    const onCollapsed = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
            collapsed={collapsed}
            collapsible
            trigger={null}
            >
               <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                mode="inline"
               >
                    {DASHBOARD_MENU_STRING.map(menu => {
                        const { icon, menuKey, menuText, menuUrl } = menu;
                        const menuLink =  `${path}/${menuUrl}`
                        return menuText === 'Operations' ? 
                        <SubMenu
                            key={menuKey}
                            title={
                                <>
                                    <Icon />
                                    <span>{menuText}</span>
                                </>
                            }
                        >
                            { SUB_MENU_STRING.map(submenu => {
                                const { key, text, url } = submenu;
                                const links = `${path}/${url}`
                                return (
                                    <Menu.Item key={key}>
                                        <Link to={links}>{text}</Link>
                                    </Menu.Item>
                                )
                            }) }
                        </SubMenu>
                        : 
                        <Menu.Item key={menuKey}>
                            <Link to={menuLink}>
                                <Icon />
                                <span>{menuText}</span>
                            </Link>
                        </Menu.Item>
                    
                    })}
                </Menu>
            </Sider>

            <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
    )
}

export default MainContainer;
