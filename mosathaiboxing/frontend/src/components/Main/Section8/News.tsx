import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsData {
  id: number;
  title: string;
  date_created: string;
  text: string;
  photo1: string;

}

const News: React.FC = () => {
  const [latestNews, setLatestNews] = useState<NewsData | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/posts/')
      .then(response => {
        // Предполагая, что сервер возвращает список новостей, выбираем первую новость как последнюю
        const latestNewsData = response.data[0];
        setLatestNews(latestNewsData);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!latestNews) {
    return <div>Loading...</div>;
  }

  const { title, date_created, text, photo1 } = latestNews;
  const truncatedText = truncateText(text, 500);

  return (
    <div className="news-container">
        <img src={photo1} alt={title} className="news-image" />
        <div className="news-wrapper">
            <p className="news-date">{formatDate(date_created)}</p>
            <h2 className="news-title">{title}</h2>
            <p className="news-text">{truncatedText}</p>
            <button className="news-button">Read more</button>
        </div>



    </div>
  );
};

export default News;
