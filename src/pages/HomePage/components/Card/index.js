import React from 'react';
import { Row, Card, Col } from 'antd';
import { StyledWrapCard } from './styles.js';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

const ListCard = props => {
    return (
        <StyledWrapCard>
            <Row gutter={16}>
                <Col md={8}>
                    <StyledLink to="/">
                        <Card cover={<img alt="example" src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" />}>
                            <Card.Meta
                                title="Chổ ở độc đáo"
                                description="Những không gian mà không chỉ là nơi để ngủ."
                            />
                        </Card>
                    </StyledLink>
                </Col>
                <Col md={8}>
                    <StyledLink to="/">
                        <Card cover={<img alt="example" src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" />}>
                            <Card.Meta
                                title="Trải nghiệm trực tuyến"
                                description="Các hoạt động độc đáo mà chúng ta có thể cùng nhau trải nghiệm, dưới sự dẫn dắt của rất nhiều người tổ chức."
                            />
                        </Card>
                    </StyledLink>
                </Col>
                <Col md={8}>
                    <StyledLink to="/">
                        <Card cover={<img alt="example" src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" />}>
                            <Card.Meta
                                title="Toàn bộ nhà"
                                description="Những chổ ở riêng thoải mái, có không gian dành cho bạn bè hoặc gia đình."
                            />
                        </Card>
                    </StyledLink>
                </Col>
            </Row>
        </StyledWrapCard>
    );
};

ListCard.propTypes = {

};

export default ListCard;