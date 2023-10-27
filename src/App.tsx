import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IndexPage from "./pages/IndexPage";

import "./assets/styles/global.css"
import "./assets/styles/normalize.css"
import "./assets/styles/nullstyles.css"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<IndexPage />}/>
            </Routes>
        </Router>
    )
}
 
export default App;