import style from "../src/App.css";
import { Routes, Route, Link, } from "react-router-dom";
import { TodoPages } from "./pages/todoPages";
import { LoginPages } from "./pages/loginPages";
import TestPage from "./pages/testPage";
import { Fragment } from "react";

function App() {



	return (
		<div className={style["App"]}>
			<Routes>
				<Route index path="/" element={<LoginPages />} />
				<Route path="/todo" element={<TodoPages />} />
				<Route path="/test" element={<TestPage />} />
				<Route path="*" element={
					<Fragment>
						<h1 style={{ textAlign: 'center' }}>404 ничего не найдено</h1>
						<br></br>
						<Link to="/">вернуться на главную</Link>
					</Fragment>
				} />
			</Routes>
		</div>
	);
}


export default App;
