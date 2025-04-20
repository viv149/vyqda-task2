'use client'
import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import UserCard from './ui/UserCard';
import SearchBar from './ui/SearchBar';
import BreadCrumbUI from './ui/BreadCrumbUI';

const Dashboard = ({users}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filterUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const userPerPage = 6;
    const firstIndex = (currentPage - 1) * userPerPage; // default firstIndex is 0 //
    const lastIndex = currentPage * userPerPage;  // default lastIndex is 6 //
    const currentUsers =  filterUsers.slice(firstIndex, lastIndex);  // default currentIndex is 0
    

    const totalPage = Math.ceil(filterUsers.length / userPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        
        <Container>
            <div className="p-5 min-vh-100">
                <div className="text-start mb-5 bg-light px-3 py-3">
                    <h3 className='display-4 fw-bold'>User Dashboard</h3>
                    <BreadCrumbUI pageName="User Dashboard"/>
                </div>

                <Row>
                    <Col sm={12} md={12} className='mb-3'>
                        <SearchBar query={setSearchQuery}/>
                    </Col>
                   
                </Row>
                <Row>
                <p className='lead text-muted'>Here’s a list of all users fetched from an API, neatly displayed in responsive cards.</p>
                {
                    currentUsers?.map(data => (
                        <Col key={data?.id} sm={12} md={4}>
                            <UserCard user={data}/>
                        </Col>
                    ))
                }
                    
                </Row>

                {/* Pagination */}
                <div className="d-flex justify-content-center w-100">
                    <Pagination>
                        <Pagination.Prev onClick={() => handlePageChange(1)}/>
                        {
                            [...Array(totalPage)].map((_, pageIndex) => (
                                <Pagination.Item key={pageIndex} active={pageIndex + 1 === currentPage} onClick={() => handlePageChange(pageIndex + 1)}>{pageIndex + 1}</Pagination.Item>
                            ))
                        }
                        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)}/>
                    </Pagination>
                </div>
            </div>
        </Container>
    );
}

export default Dashboard;
