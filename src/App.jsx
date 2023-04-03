import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import { Suspense, lazy } from "react";
import Loader from "./Components/Shared/Loader/Loader";

const OurClasses = lazy(() =>
  import("./Components/ClassesPage/OurClasses/OurClasses")
);

const ClassSchedulePage = lazy(() =>
  import(
    "./Components/ClassSchedulePage/ClassScheduleLanding/ClassSchedulePage"
  )
);
const Pricing = lazy(() => import("./Components/PricingPage/Pricing/Pricing"));

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

      <Route
        path="/pricing"
        element={
          <Suspense fallback={<Loader />}>
            <Pricing />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
