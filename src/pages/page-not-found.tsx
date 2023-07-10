import { FunctionComponent } from 'react';
import { useRouteError } from "react-router-dom";

interface IError {
 error?: {
  statusText?: any;
  message?: any;
 };
 data?: any;
 status?: number;
}

const PageNotFound: FunctionComponent = () => {
 const error: IError = useRouteError() as IError;
 console.log(error)

 return <div>
  <h3>Mon erreur !</h3>
  <p>
   <i>code : {error?.status}</i>
   <br />
   <span>data : {error?.data}</span>
   <br />
   <span>message : {error?.error?.message}</span>
  </p>
 </div>
}

export { PageNotFound }
