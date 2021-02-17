import React from "react";
import Coins from "../Coins/Coins";

interface ICoin {
    id: string;
    [key: string]: any;
}

type CoinListProps = {
    filteredCoins: Array<ICoin>;
};

const CoinList: React.FC<CoinListProps> = ({ filteredCoins }) => {
    return (
        <div>
            {filteredCoins.map((coin) => {
                return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
};

export default CoinList;
