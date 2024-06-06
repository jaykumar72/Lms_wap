import publicRoutes from "../routers/PublicRoutes";

import { createBrowserRouter} from "react-router-dom";

const routers = createBrowserRouter([
	...publicRoutes,
	// ...AdminRoutes
]);

export default routers;	 