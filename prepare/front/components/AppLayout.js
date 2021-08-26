import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd'

const AppLayout = ({children}) => {
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
                    <Link href="/signup"><a>회원가입 페이지</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // 화면에 그릴 수 있는 것 즉 위 AppLayout 컴포넌트 안 Return 안에 있는 모든 것들이 node이다.
}
export default AppLayout;