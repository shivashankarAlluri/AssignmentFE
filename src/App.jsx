
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Password from "./Components/Password";
import Feed from "./Components/Feed";
import SidebarLayout from "./Components/SidebarLayout";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Jobs from "./Components/jobs";
import JobPostings from "./Components/Jobpostings";
import PublicRoute from "./Components/PublicRoute";


function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/password" element={<PublicRoute><Password /></PublicRoute>} />
          <Route path="/feed" element={<Feed />} />

          <Route element={<SidebarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobposting" element={<JobPostings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
