import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, StyledTitle, StyledLink } from './styles';
import { Col, Row, List } from 'antd';

const Footer = props => {
    return (
        <StyledFooter>
            <Row gutter={24}>
                <Col span={24} xl={6} className="footer-col">
                    <StyledTitle level={4}>
                        Giới thiệu
                    </StyledTitle>
                    <List
                        bordered={false}
                    >
                        <List.Item><StyledLink to="/">Phương thức hoạt động của Airbnb</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Trang tin tức</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Airbnb Plus</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Airbnb Luxe</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Airbnb for Work</StyledLink></List.Item>
                    </List>
                </Col>
                <Col span={24} xl={6} className="footer-col">
                    <StyledTitle level={4}>
                        Cộng đồng
                    </StyledTitle>
                    <List
                        bordered={false}
                    >
                        <List.Item><StyledLink to="/">Sự đa dạng và Cảm giác thân thuộc</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Tiện nghi phù hợp cho người khuyết tật</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Đối tác liên kết Airbnb</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Chỗ ở cho tuyến đầu</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Mời bạn bè</StyledLink></List.Item>
                    </List>
                </Col>
                <Col span={24} xl={6} className="footer-col">
                    <StyledTitle level={4}>
                        Đón tiếp khách
                    </StyledTitle>
                    <List
                        bordered={false}
                    >
                        <List.Item><StyledLink to="/">Cho thuê nhà</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Tổ chức Trải nghiệm trực tuyến</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Tổ chức trải nghiệm</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Ngôi nhà rộng mở</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Trung tâm tài nguyên</StyledLink></List.Item>
                    </List>
                </Col>
                <Col span={24} xl={6} className="footer-col">
                    <StyledTitle level={4}>
                        Hỗ trợ
                    </StyledTitle>
                    <List
                        bordered={false}
                    >
                        <List.Item><StyledLink to="/">Thông tin cập nhật về COVID-19</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Trung tâm trợ giúp</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Các tùy chọn hủy</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Hỗ trợ khu dân cư</StyledLink></List.Item>
                        <List.Item><StyledLink to="/">Tin cậy và an toàn</StyledLink></List.Item>
                    </List>
                </Col>
            </Row>
        </StyledFooter>
    );
};

Footer.propTypes = {

};

export default Footer;