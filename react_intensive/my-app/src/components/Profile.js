import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src = "https://im0-tub-ru.yandex.net/i?id=1a0aa267e9654ceeabdcfe6b1fa55c9f-l&n=13"
                alt = "Man"
                name = "some_cool_man"/>
            <Palette/>
        </div>
    )
};

export default Profile;