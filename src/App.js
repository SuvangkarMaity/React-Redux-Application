//import Incrementor from "./Incrementor";
//import { Counter } from "./ReduxState";
import { FetchData } from "./ThunkMiddleware";

function App() {
  return (
    <div className="App">
       <h1>This is Redux App</h1>
       <ul>
         <ol>Fundamentals of Redux:
            <li>Redux theoritically</li>
            <ol>Redux setup and installation
               <li>npm install redux</li>
               <li>npm install react-redux</li>
               <li>npm install @reduxjs/toolkit</li>
            </ol>
            <li>Redux Syntex</li>
            <li>Redux stages in details - action, store, reducers</li>
         </ol>
         <ol>Advanced Concepts of Redux:
            <li>Redux dev tools implementation</li>
            <li>Redux middleware - saga/thunk</li>
            <li>Redux revision and practice</li>
         </ol>
         <ol>Types of hooks in redux:
            <li>useSelector</li>
            <li>useDispatch</li>
         </ol>
       </ul>
      {/*   <Counter/>  */}
      {/*  <Incrementor/> */}
       <FetchData/>
      
    </div>
  );
}

export default App;
