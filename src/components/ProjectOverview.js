import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './data/articles.json';
import './styles/ProjectOverview.scss';
const ProjectOverview = () => {
    const { id } = useParams();

    const article = articles.articles.find(article => article.id === +id);

    return (
        <div className='ProjectOverview'>
            <h1>{article.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: article.text }}></p>
        </div>
    );
};

export default ProjectOverview;
