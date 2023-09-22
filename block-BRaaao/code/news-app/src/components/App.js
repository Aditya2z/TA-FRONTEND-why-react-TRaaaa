import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";

function App(props) {
    return (
        <>
        <Header />
        <Hero />
        <Articles {...props} />
        {/* <Footer /> */}
    </>
    );
}

export default App;