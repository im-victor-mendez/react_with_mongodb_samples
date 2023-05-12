function Home() {
    const repositoryUrl = "https://github.com/im-victor-mendez/react_with_mongodb_samples"

    return (
        <article id="home">
            <h1>Welcome to my project :D</h1>

            <div id="introduction">
                <p>This is my biggest <b>M</b>ongodb <b>E</b>xpress <b>R</b>eactjs <b>N</b>odejs project! 🦆</p>
            </div>

            <p>This is a page that fetch data from collections samples of MongoDB and collections it in pages.</p>

            <p>To use it, navigate with top navbar to view paged data of database you want and its collections in case that it has.</p>

            <p>You can view full project on my GitHub profile: <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">im-victor-mendez</a> 🦆💕</p>
        </article>
    )
}
export default Home