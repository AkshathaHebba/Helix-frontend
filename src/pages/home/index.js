import React from 'react';
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import Column from "../../components/Column";
import AskedQuestionList from "../../components/AskedQuestionsList";
import About from "../../components/AboutSection";
import TopExpertsSection from "../../components/TopExpertsSection";
import Header from "../../components/Header";
import AppLayout from "../../components/AppLayout";

import styles from './Home.module.css';

const Home = () => {
    return (
        <AppLayout header={<Header />}>
            <Banner />
            <Row className={styles.Home__ColumnContainer}>
                <Column className={styles.Home__Column} size={2}>
                    <AskedQuestionList />
                </Column>
                <Column className={styles.Home__Column} size={1}>
                    <About className={styles.Home__ColumnItem} />
                    <TopExpertsSection />
                </Column>
            </Row>
        </AppLayout>
    );
};

export default Home;