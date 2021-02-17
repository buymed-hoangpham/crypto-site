import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
    type: string;
    placeholder: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ ...rest }) => {
    return (
        <div className={styles.coin_search}>
            <input
                className={styles.coin_input}
                // type={type}
                // placeholder={placeholder}
                // onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default SearchBar;
