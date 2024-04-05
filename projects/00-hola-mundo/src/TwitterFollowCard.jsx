import { useState } from "react"

export function TwitterFollowCard({children, formatUserName, userName='unknown', initialIsFollowing}) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    
    /*const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/
    
    const imageSrc =`https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={imageSrc} 
                alt="No se puede cargar imagen" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}