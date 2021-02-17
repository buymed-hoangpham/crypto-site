import { GetServerSideProps } from "next";
import { useState } from "react";
import CoinList from "../components/CoinList/CoinList";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ filteredCoins }) {
    const [search, setSearch] = useState<string>("");

    const allCoins = filteredCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        setSearch(e.currentTarget.value.toLowerCase());
    };

    return (
        <Layout>
            <div className="coin_app">
                <SearchBar
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                />
                <CoinList filteredCoins={allCoins} />
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    );

    const filteredCoins = await res.json();

    return {
        props: {
            filteredCoins,
        },
    };
};
