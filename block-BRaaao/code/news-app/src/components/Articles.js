function Article(props) {
    return (
        <article>
            <img src = {props.urlToImage} alt = {props.title} />
            <h2>{props.title}</h2>;
        </article>
    );
}

function Articles(props) {
    console.log(props.articles);
    return (
        props.articles.map(article => (
            <Article key={article.title} {...article} />
        ))
    );
}

export default Articles;