import React, {Component} from 'react'; //всегда при создании компонента
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

//класс всегда с большой буквы
export default class Header extends Component {
    render() {
        return(
            <header>
                <div className="container h-flex">
                    <Link to='/' className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to='/' className="menu__links">
                                    Лента
                                </Link>
                            </li>
                            <li>
                                <Link to='/profile' className="menu__links">
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

