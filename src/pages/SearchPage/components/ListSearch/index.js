import React from 'react';
import PropTypes from 'prop-types';
import { Typography, List } from 'antd';
import {
    StyledListSearch,
    StyledSearchInfo,
    StyledTag,
    SectionSearchInfo,
    SectionSearchResult,
    StyledLocation,
    StyledTitleResult,
    StyledIconHeart,
    StyledHorizon,
    StyledStar,
    StyledPrice,
    StyledDescription,
    StyledImage
} from './styles';
import { Link } from 'react-router-dom';
import { StarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const data = [
    { title: 'Muji Việt Nam và top sản phẩm HOT nhất đến từ thương hiệu này' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 1' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 2' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 3' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 4' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 5' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' }
];

const ListSearch = props => {
    const renderTitle = () => {
        return (
            <>
                <StyledIconHeart />
                <Link to="" style={{ marginRight: 24, display: "inline-block" }}>
                    <StyledLocation>Toàn bộ tầng lửng tại Thành phố Đà Lạt</StyledLocation>
                    <StyledTitleResult>Stay,Feel&Love_The awesome valley view</StyledTitleResult>
                    <StyledHorizon>_____</StyledHorizon>
                    <StyledDescription>Với thương hiệu nổi đình đám tại Nhật Bản, Muji nhanh chóng nhận được sự yêu thích và chào đón tại thị trường Việt Nam. Đặc biệt là sự kiện ra mắt cửa hàng trải nghiệm Muji Việt Nam...</StyledDescription>
                </Link>
            </>
        );
    };

    const renderDescription = () => {
        return (
            <>
                <StyledStar>
                    <StarOutlined />
                    <strong>4.7</strong>
                </StyledStar>
                <StyledPrice>
                    <Title level={4} style={{ marginBottom: 0 }}>$30/đêm</Title>
                </StyledPrice>
            </>
        );
    };

    return (
        <StyledListSearch>
            <SectionSearchInfo>
                <StyledSearchInfo>
                    Hơn 300 chổ · 18 thg 9 - 19 thg 9 · 2 khách
                </StyledSearchInfo>
                <Title level={1}>Chỗ ở tại Dalat</Title>
                <StyledTag>Tùy chọn hủy linh hoạt</StyledTag>
                <StyledTag>Loại nơi ở</StyledTag>
                <StyledTag>Giá</StyledTag>
                <StyledTag>Đặt ngay</StyledTag>
            </SectionSearchInfo>

            <SectionSearchResult>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <StyledImage src="https://shopee.vn/blog/wp-content/uploads/2020/08/muji-viet-nam-1068x712.jpg" />
                                }
                                title={renderTitle()}
                                description={renderDescription()}
                            />
                        </List.Item>
                    )}
                />
            </SectionSearchResult>
        </StyledListSearch>
    );
};

ListSearch.propTypes = {

};

export default ListSearch;