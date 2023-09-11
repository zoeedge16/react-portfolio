import { useRouteError } from "react-router";

export default function Error() {
    const error = useRouteError();
    console.error(error)
    
    return (
         <div>
            <h1>Oops!</h1>
            <p>There has been an unexpected error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
         </div>
    );
}