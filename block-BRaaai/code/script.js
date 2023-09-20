let cardInfo = {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
      'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
      'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
};

let root = document.querySelector(".root");

function createUI() {
    let UI = <article>
        <figure>
            <img src = {cardInfo.imageURL} alt = "Desert Sand" />
            <div className = "circle">{cardInfo.date.getDate()} {cardInfo.date.toLocaleDateString('en-US', { month: 'long' }).substring()}</div>
            <div className = "rec">{cardInfo.category}</div>
        </figure>
        <div>
            <h1>{cardInfo.title}</h1>
            <h2>{cardInfo.subTitle}</h2>
            <p>{cardInfo.description}</p>
            <span>✍ 6 mins ago</span>
            <span>✉ {cardInfo.comments} comments</span>
        </div>
    </article>;

    ReactDOM.render(UI, root);
}

createUI();