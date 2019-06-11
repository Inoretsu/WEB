import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render() {
        return (
           <div className="post">
               <User
                    src="https://i.pinimg.com/736x/8c/4e/91/8c4e91384fc6a02433b494ac0c0c9127.jpg"
                    alt="prince"
                    name="Harry"
                    min/>
               <img src={this.props.src} alt={this.props.alt}/>
               <div className="post__name">
                    some account
               </div>
               <div className="post__descr">
                   <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus eligendi error eveniet
                       facilis in incidunt iure molestiae, officia placeat porro quam quas saepe sint totam ut vel.
                       Soluta, ut!
                   </div>
               </div>
           </div>
        )
    }

}