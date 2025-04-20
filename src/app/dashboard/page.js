import Dashboard from '@/Components/Dashboard';
import React from 'react';

export const metadata = {
    title: "Vivek Task 2 | Dashboard",
    description: "Dashboard | here all user's card list",
};

const Page = async () => {
    let userData = null;
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});
        userData = await response.json();
    }catch(error){
        console.error("Error", error);
    }
    return (
        <Dashboard users={userData} />
    );
}

export default Page;
