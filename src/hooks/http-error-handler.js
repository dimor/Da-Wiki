import { useState, useEffect } from 'react';


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (httpClient,err) => {

    const [error, setError] = useState(null);


    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    }, error => {
        setError(error);
        console.log("error detected - res interseptor");
        return Promise.reject(error);
    });

    const resInterceptor = httpClient.interceptors.response.use(res => res, error => {
        setError(error);
        console.log("error detected - res interseptor");
        return Promise.reject(error);
    });


    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
        }
    }, [httpClient.interceptors.request, httpClient.interceptors.response, reqInterceptor, resInterceptor]);


    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [error, errorConfirmedHandler]
}