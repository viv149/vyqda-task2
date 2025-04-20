import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({user}) => {
    return (
        <Card className='mb-3 shadow-sm'>
            <Card.Body>
                <Card.Title><i className="bi bi-person-fill"></i> {user?.name}</Card.Title>
                <Card.Text>
                    {user?.email}
                    <br />
                    {user?.phone}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;
