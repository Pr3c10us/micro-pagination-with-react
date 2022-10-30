import React, { useContext } from 'react';
import { useGlobalContext } from './App';

const User = () => {
    const { post } = useGlobalContext();
    return (
        <div className="users">
            {post.map((user) => {
                const { login, avatar_url, html_url, id } = user;
                return (
                    <article key={id} className="user">
                        <img src={avatar_url} alt={login} />
                        <h4>{login}</h4>
                        <a href={html_url}>
                            <button>view profile</button>
                        </a>
                    </article>
                );
            })}
        </div>
    );
};

export default User;
