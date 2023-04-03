import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import { Suspense, lazy } from "react";
import Loader from "./Components/Shared/Loader/Loader";
import ClassSchedulePage from "./Components/ClassSchedulePage/ClassScheduleLanding/ClassSchedulePage";

const OurClasses = lazy(() =>
  import("./Components/ClassesPage/OurClasses/OurClasses")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/ourClasses"
        element={
          <Suspense fallback={<Loader />}>
            <OurClasses />
          </Suspense>
        }
      />

      <Route
        path="/classSchedule"
        element={
          <Suspense fallback={<Loader />}>
            <ClassSchedulePage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
