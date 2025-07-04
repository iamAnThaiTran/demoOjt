// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
// import CreatePaste from "./pages/CreatePaste";
// import ViewPaste from "./pages/ViewPaste";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import MyPastes from "./pages/MyPastes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "create",
      //   element: <CreatePaste />,
      // },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
      // {
      //   path: "my-pastes",
      //   element: <MyPastes />,
      // },
      // {
      //   path: "paste/:id",
      //   element: <ViewPaste />,
      //   loader: async ({ params }) => {
      //     if (!params.id) throw new Error("Paste ID is required");
      //     return { pasteId: params.id };
      //   },
      // },
    ],
  },
]);

export default router;
