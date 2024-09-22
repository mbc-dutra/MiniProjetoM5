import React, { useState } from 'react';
import Header from '../components/header/header'; 
import Job from '../components/main/job';
import Footer from '../components/footer/footer';

const Home = () => {
    const [filterInput, setFilterInput] = useState("");

    return (
        <div>
            <Header setFilterInput={setFilterInput} />
            <Job filterInput={filterInput} />
            <Footer />
        </div>
    );
};

export default Home;
