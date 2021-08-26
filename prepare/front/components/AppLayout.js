import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({children}) => {
    return(
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, // 화면에 그릴 수 있는 것 즉 위 AppLayout 컴포넌트 안 Return 안에 있는 모든 것들이 node이다.
}
export default AppLayout;