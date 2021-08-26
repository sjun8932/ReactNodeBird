import React from 'react';
import PropTypes from "prop-types";
import 'antd/dist/antd.css';
import Head from 'next/head'

const JunMade = ({Component}) => { // 여기서 <Component />는 index.js에서 <AppLayout>...</AppLayout> 을 담당한다.
    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>공통 페이지 입니다😜</title>
            </Head>
            <Component />
        </>
    );
}

JunMade.propTypes= {
    Component: PropTypes.elementType.isRequired,
}

export default JunMade;