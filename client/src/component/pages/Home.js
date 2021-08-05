import React, { useState } from 'react'
import { Col, Row, Card, Popover, Typography } from 'antd';

const { Text, Link } = Typography;
const Home = () => {
    const [user, setUser] = useState({
        name: "phongphat",
        program: ['cis', '403']
    })

    const program = [
        { id: '1', name: 'โปรแกรมแสดง Track Radar', code: 'cis', image: '/images/tracklui.jpg' },
        { id: '2', name: 'โปรแกรมสถานการณ์การข่าว', code: 'track', image: '/images/rtaflui.jpg' },
        { id: '3', name: 'โปรแกรมถ่ายโอนข้อมูลภาพ-วิดีโอ', code: '403', image: '/images/403lui.jpg' },
    ]
    const { Meta } = Card;



    const contentOk = () => (
        <div>
            <Text type="success">คุณมีสิทธ์เข้าใช้งานโปรแกรม</Text>
        </div>
    );
    const contentNoOk = () => (
        <div>
            <Text mark>คุณไม่มีสิทธิ์เข้าใช้งานโปรแกรมนี้</Text>
        </div>
    );
    // style={{ filter: "grayscale(100%)" }}
    console.log(user.program)
    var tam;
    return (
        <>
            <Row style={{ alignItems: 'center' }} justify="center" align="middle">
                <h1>Home</h1>
            </Row>
            {/* <Row style={{ alignItems: 'center' }} justify="center" align="middle">
                {program.map((item, index) => (
                    <Col span={6} offset={1}>
                        {tam = user.program.includes(item.code)}
                        <Popover content={tam ? contentOk : contentNoOk} placement="bottom">
                            <Card
                                hoverable
                                cover={<img alt={item.name}
                                    src={item.image}
                                    style={tam ? null : { filter: 'grayscale(100%)', cursor: 'not-allowed' }}
                               
                                />}
                            >
                                <Meta title={item.name} align='center'/>
                            </Card>
                        </Popover>
                    </Col>
                ))}


            </Row> */}

        </>
    )
}

export default Home
