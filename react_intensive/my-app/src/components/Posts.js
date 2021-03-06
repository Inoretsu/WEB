import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import User from "./User";
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
    InstaService = new InstaService();  //новый синтаксис, не является стандартом
    state = {  //состояния
        posts: [],
        error: false
    };

    componentDidMount() { //когда компонент загрузится
        this.updatePosts();

    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded) //промис
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    renderItems(arr) {
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item; //key={id} необходимо для реакта, чтобы обновлялись только новые посты
            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min/>
                    <img src={src} alt={alt}/>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }
    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        )
    }
}