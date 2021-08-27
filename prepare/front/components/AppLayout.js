import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd'

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>랜딩 페이지</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필 페이지</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign:"middle" }}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입 페이지</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/sjun8932" target="_blank" rel="noreferrer noopener">Made by SANGJUN</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // 화면에 그릴 수 있는 것 즉 위 AppLayout 컴포넌트 안 Return 안에 있는 모든 것들이 node이다.
}
export default AppLayout;