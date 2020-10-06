import React from 'react'

function NewsCard({key, i,article: { source:{name},title,description,publishedAt,url, urlToImage }}) {
    return (
        <div className="card ">
            <a href={url} target="_blank" >
            <div className="card-image">
            <img src={urlToImage} alt="news image"/>
            </div>
            </a>
            <div className="content p-3">
                 <h4 className=" has-text-centered">
                    {title && title}
                </h4>
                <p><i>{description && description}</i></p>
            </div>
            <footer className="card-footer p-3">
                <p><small>{name && name}</small></p>
                <p><small>{publishedAt && publishedAt}</small></p>
                <p><small>{i+1 }</small></p>
            </footer>
        </div>
    )
}

export default NewsCard;
