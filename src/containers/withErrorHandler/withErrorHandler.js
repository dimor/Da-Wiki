import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import httpErrorHandler from '../../hooks/http-error-handler';


const withErrorHandler = (WrappedComponent, axios) => props => {



    const [error, clearError] = httpErrorHandler(axios);



    return (
        <React.Fragment>
            <Modal
                show={error}
                close={clearError}>
                {error ? <p style={{ textAlign: 'center', fontSize: '2rem' }}>{error.message}</p> : null}
            </Modal>
            <WrappedComponent {...props} />

        </React.Fragment>
    )
}

export default withErrorHandler;