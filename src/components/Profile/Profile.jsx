import PropTypes from 'prop-types';

import {
    Wrap,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    Stats,
    Item,
    Label,
    Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Wrap>
            <Description>
                <Avatar src={avatar} alt={username} />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Item>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </Item>
                <Item>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </Item>
                <Item>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </Item>
            </Stats>
        </Wrap>
    )
}  

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};