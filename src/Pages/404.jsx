import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center min-h-screen items-center ">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry Bro, u sucks</p>
            <p className="text-xl">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;