import React, { useEffect, useState } from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";
import Section from "../layouts/container/Section/Section";
import SectionHeader from "../components/SectionInfo/Title/SectionHeader";
import CardCategories from "../layouts/container/CardCategories/CardCategories";
import CollectionWrapper from "../layouts/container/CollectionWrapper/CollectionWrapper";
import { apisFunctions } from "../services/apis/ApisFunctions";
import { getRandomInt } from "../services/Helpers/helpers";
import { getSingleCollection } from "../services/apis/nftImages";

const Home = () => {
    const [collections, setCollections] = useState( [] );
    const [singleCollection, setSingleCollection] = useState( [] );

    const [nftImages0, setNftImages0] = useState( null );
    const [nftImages1, setNftImages1] = useState( null );

    useEffect( () => {
        const loadData = async () => {
            const openseaCollections = await apisFunctions( 50 );
            const collections = openseaCollections.filter( collection => {
                if ( collection.banner_image_url !== null ) {
                    return collection.banner_image_url;
                }
            } );

            setCollections( collections );
            setSingleCollection( collections[getRandomInt( collections.length )] );
        };
        loadData();

        const per_page = 2;

        const getNftImages = async term => {
            const images0 = await getSingleCollection( term[0], per_page );
            const images1 = await getSingleCollection( term[1], per_page );
            const nftImages0 = images0.data.results;
            const nftImages1 = images1.data.results;
            setNftImages0( nftImages0 );
            setNftImages1( nftImages1 );
        }

        getNftImages( ["Arts", "Sports"] );

    }, [] );

    if (!nftImages0) return null;
    if (!nftImages1) return null;

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Slider collections={ collections }/>
                    <Section>
                        <SectionHeader title="Browse by Category" icon="#collection"/>
                    </Section>
                    <CardCategories/>
                    <Section class="picked-collections">
                        <div className="picked-collections--title">
                            <SectionHeader title="Hand Picked Collections " icon="#collection"/>
                        </div>
                        <div className="picked-collections--link">
                            <a href="/#">
                                <SectionHeader title="Trending Collections" icon="#chevron"/>
                            </a>
                        </div>
                    </Section>
                    <CollectionWrapper nft={nftImages0}  singleCollection={ singleCollection }/>
                </Container>
            </main>
        </>
    );
};

export default Home;
