import React from 'react'
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';


function NewsCards({ articles }) {
    return (
        <>
        <h3 className="is-size-5  has-text-white has-text-centered">To open articles say:<br/>Open article number & number of the article on the card...</h3>
        <div className="columns is-multiline">
            {articles.map((article,i)=>(
                <motion.div whileHover={{scale:1.1}} className="column is-flex is-4-desktop is-6-tablet news__card">
                    <NewsCard article={article} i={i} key={i} />
                </motion.div>
            ))}
        </div>
        </>
    )
}

export default NewsCards;

  
