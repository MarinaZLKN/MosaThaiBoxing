import React, { useState, useEffect } from 'react';
import NewsClosed from './NewsClosed';
import '../../../styles/NewsFeed.scss'
import trainreg from '@images/img.png';

const NewsFeed: React.FC = () => {
  const [newsList, setNewsList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/posts/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        return response.json();
      })
      .then(data => {
        setNewsList(data);
        setLoading(false);
        console.log('POSTS: ', data)
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (newsList.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div className="container newsfeed-container">
       <div className="train-pic">
        <img src={trainreg} className="train_reg-img"/>
      </div>
        <div className="newsfeed-list">
            {newsList.map((news, index) => (
                <NewsClosed key={index} news={news} />
            ))}
        </div>

    </div>
  );
};

export default NewsFeed;
