import style from "../src/App.css";
import { Routes, Route, } from "react-router-dom";
import { TodoPages } from "./pages/todoPages";
import { LoginPages } from "./pages/loginPages";
import { ForgotPassPage } from "./pages/forgotPass";

function App() {



	return (
		<div className={style["App"]}>
			<Routes>
				<Route index path="/" element={<LoginPages />} />
				<Route path="/todo" element={<TodoPages />} />
				<Route path="/test" element={<ForgotPassPage/>}/>
			</Routes>
		</div>
	);
}


export default App;
