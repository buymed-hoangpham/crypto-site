import Link from "next/link";
import React from "react";
import styles from "./Coins.module.css";

type CoinsProps = {
    key: string;
    name: string;
    id: string;
    price: string;
    symbol: string;
    marketcap: number;
    volume: number;
    image: string;
    priceChange: number;
};

const Coins: React.FC<CoinsProps> = ({
    name,
    id,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
}) => {
    return (
        <Link href="/coin/[id]" as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <div className={styles.coin}>
                            <img
                                src={image}
                                alt={name}
                                className={styles.coin_img}
                            />
                            <h1 className={styles.coin_h1}>{name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>{price}</p>
                            <p className={styles.coin_volume}>
                                {volume.toLocaleString()}
                            </p>

                            {priceChange < 0 ? (
                                <p className={(styles.percent, styles.red)}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className={(styles.percent, styles.green)}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                            <p
                                className={styles.marketcap}
                            >{`Mkt Cap: ${marketcap.toLocaleString()}`}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Coins;
