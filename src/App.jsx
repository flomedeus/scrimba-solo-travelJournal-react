import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import data from "./data.js";

function App() {
    const contentArr = data.map( item => {
        return (
            <Content
                {...item}
            />
        )
    })
    return(
        <>
            <Header />
            <div className="wrapper">
            {contentArr}
            </div>
        </>
    )
}

export default App
