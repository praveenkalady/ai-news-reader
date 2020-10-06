import React,{ useEffect,useState } from 'react'
import Header from './components/layouts/Header';
import Home from './components/layouts/Home';
import alanBtn from "@alan-ai/alan-sdk-web";
import Footer from './components/layouts/Footer';
import NewsCards from './components/newscards/NewsCards';
import wordsToNumbers from 'words-to-numbers';

function App() {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        alanBtn({
            key:'4cf065641e6ae6e686e44a7176c2ff8e2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand:({ command,articles,number }) => {
                if(command==='newsFromSource'){
                    setArticles(articles);
                } else if(command==='goback'){
                    setArticles([]);
                } else if (command==='open'){
                    const parsedNumber =  number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber -1];
                        if(parsedNumber > 20){
                            alanBtn().playText('Please try again later...')
                        }
                     else if(article){
                        window.open(article.url,'_blank');
                        alanBtn().playText('Opening...');
                    }
    
                }
            }
        })
    },[])
    return (
        <div>
           <Header />
           <div className="container">
           
           {articles.length ===0 ? <Home /> : <NewsCards articles={articles} />  }
           </div>
           <Footer />
        </div>
    )
}

export default App;
