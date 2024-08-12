import React from 'react';
import { Helmet } from 'react-helmet';

const BreadCrumb = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title} | POS</title>
            </Helmet>
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
                <li class="breadcrumb-item active">{props.title}</li>
            </ol>
        </>
    );
};

export default BreadCrumb;