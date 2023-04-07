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

const Checkout = lazy(() =>
  import("./Components/CheckoutForm/Checkout/Checkout")
);

const CheckoutStep2 = lazy(() =>
  import("./Components/CheckoutForm/CheckoutStep2/CheckoutStep2")
);

const CheckoutStep3 = lazy(() =>
  import("./Components/CheckoutForm/CheckoutStep3/CheckoutStep3")
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

      <Route
        path="/pricing"
        element={
          <Suspense fallback={<Loader />}>
            <Pricing />
          </Suspense>
        }
      />

      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        }
      />

      <Route
        path="/checkout/step2"
        element={
          <Suspense fallback={<Loader />}>
            <CheckoutStep2 />
          </Suspense>
        }
      />

      <Route
        path="/checkout/step3"
        element={
          <Suspense fallback={<Loader />}>
            <CheckoutStep3 />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
