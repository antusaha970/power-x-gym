import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import { Suspense, lazy, useState } from "react";
import Loader from "./Components/Shared/Loader/Loader";
import { AdminContext, RegisteredUserContext } from "./Contexts/Contexts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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

const AdminLogin = lazy(() =>
  import("./Components/Admin/AdminLogin/AdminLogin")
);

const AdminMenu = lazy(() => import("./Components/Admin/AdminMenu/AdminMenu"));

const AllUserInfo = lazy(() =>
  import("./Components/Admin/AllUserInfo/AllUserInfo")
);

const Blog = lazy(() => import("./Components/BlogPage/Blog/Blog"));
const BlogPost = lazy(() => import("./Components/Admin/BlogPost/BlogPost"));

function App() {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  return (
    <RegisteredUserContext.Provider value={[user, setUser]}>
      <AdminContext.Provider value={[admin, setAdmin]}>
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
            path="/blogs"
            element={
              <Suspense fallback={<Loader />}>
                <Blog />
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

          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loader />}>
                <AdminLogin />
              </Suspense>
            }
          />

          <Route
            path="/admin/dashboard/menu"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute isSignedIn={admin}>
                  <AdminMenu />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/admin/dashboard/userInfo"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute isSignedIn={admin}>
                  <AllUserInfo />
                </PrivateRoute>
              </Suspense>
            }
          />

          <Route
            path="/admin/dashboard/makeBlog"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute isSignedIn={admin}>
                  <BlogPost />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </AdminContext.Provider>
    </RegisteredUserContext.Provider>
  );
}

export default App;
