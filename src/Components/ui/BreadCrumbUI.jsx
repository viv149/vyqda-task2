import Link from 'next/link';
import React from 'react';

const BreadCrumbUI = ({pageName}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ms-4">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
            </ol>
        </nav>
    );
}

export default BreadCrumbUI;
