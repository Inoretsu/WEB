import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                alt="prince"
                name="Harry"/>
            <div className="users__block">
                <User
                    src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                    alt="prince"
                    name="Harry"
                    min/>
                <User
                    src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                    alt="prince"
                    name="Harry"
                    min/>
                <User
                    src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                    alt="prince"
                    name="Harry"
                    min/>
                <User
                    src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                    alt="prince"
                    name="Harry"
                    min/>
            </div>
        </div>
    )
}