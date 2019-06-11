//работа с сервером

export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => { //async await - конструкция ES7, синхронная функция, ожидает ответа fetch
        const res = await fetch(`${this._apiBase}${url}`); //это аналог ajax
        if (!res.ok) { //если сервер ответил
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json(); //возвращает промис, обещание того, что вернется формат json
    };

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    };

    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    };

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}