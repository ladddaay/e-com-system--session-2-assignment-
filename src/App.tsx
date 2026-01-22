import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { store } from "./store";
import { Provider } from "react-redux";
import router from "./config/router";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
