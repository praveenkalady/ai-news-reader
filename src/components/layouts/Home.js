import React from 'react'
import { FcReading } from 'react-icons/fc';
import { motion } from 'framer-motion';


function Home() {
    return (
        <div className="home px-3">
            <div className="home__header">
                <motion.h1 initial={{x:'-100vw'}} animate={{x:0,transition:{stiffness:120,type:'spring'}}} an className="is-size-3 has-text-centered my-3 has-text-white"><i>
                Grab a seat and read your articles !</i><br/><span><FcReading size={60} /></span></motion.h1>
                <h3 className="is-size-5 has-text-centered has-text-white">Just Try Out The Commands Below !</h3>
            </div>
            <div  className="home__info">
            <div className="columns is-multiline">
            <motion.div whileHover={{scale:1.2,zIndex:1}} className="column is-3-desktop is-6-tablet">
            <div className="card home__card has-shadow card-1">
            <div className="card-content has-text-centered home__cardContent">
                <h3 className="is-size-3 mb-3">Latest News</h3>
                <div>
                <p className="is-size-5">Try Saying: <br/>Give me the latest news !</p>
                </div>
            </div>
            </div>
            </motion.div>
            <motion.div whileHover={{scale:1.2,zIndex:1}} className="column is-3-desktop is-6-tablet">
            <div className="card home__card has-shadow card-2">
            <div className="card-content has-text-centered home__cardContent">
                <h3 className="is-size-3 mb-3">News by Categories :</h3>
                    <p className="mb-3">Business, Entertainment, General, Health, Science, Sports, Technology</p>
                <div>
                <p className="is-size-5">Try Saying: <br/>Give me the latest Technology news</p>
                </div>
            </div>
            </div>
            </motion.div>
            <motion.div whileHover={{scale:1.2,zIndex:1}} className="column is-3-desktop is-6-tablet">
            <div className="card home__card has-shadow card-3">
            <div className="card-content has-text-centered home__cardContent">
                <h3 className="is-size-3 mb-3">News by Terms:</h3>
                <p className="mb-3">Donald Trump, BitCoin, PlayStation 5, Smartphones...</p>
                <div>
                <p className="is-size-5">Try Saying: <br/>What's up with PlayStation 5</p>
                </div>
            </div>
            </div>
            </motion.div>
            <motion.div whileHover={{scale:1.2,zIndex:1}} className="card-4 is-mb-mobile-2 column is-3-desktop is-6-tablet">
            <div className="card home__card has-shadow card-1">
            <div className="card-content has-text-centered home__cardContent">
                <h3 className="is-size-3 mb-3">News by Sources:</h3>
                <p className="mb-3">ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN...</p>
                <p className="is-size-5">Try Saying: <br/>Give me the news from CNN</p>
            </div>
            </div>
            </motion.div>
            </div>
          </div>
        </div>
    )
}

export default Home;

