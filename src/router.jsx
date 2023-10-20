import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",

    children: [
        { index: true, },
        {
            path: "items",
            
            children: [
                { index: true, },
                { path: "new", },
                { path: ":id", },
                { path: ":id/update", },
            ]
        }
    ]
}])

export default router