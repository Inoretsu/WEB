import React, {Component} from 'react';
import  ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import User from "./User";

export default class Palette extends Component{
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false
    }

    componentDidMount() { //когда компонент загрузится
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded) //промис
            .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
            const {src, alt, id} = item;
            return (
                <img src={src} alt={alt} key={id}/>
            )
        })
    }

    render() {

        const {error, photos} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}

