import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [random, setRandom] = useState(0);

    const [productData, setProductData] = useState(
        [
            {
                img: 'https://rukminim1.flixcart.com/image/312/312/kjlrb0w0/mobile/6/a/e/mi-10i-m10ix06-original-imafz53gjzqae2kr.jpeg?q=70',
                name: 'Mi 20i (Midnight Black 128GB)',
                price: 22999,
                rating: 381, reviews: 33,
                ram: '4 GB',
                storage: '64 GB'
    
            },
            {
                img: 'https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UY218_.jpg',
                name: 'OnePlus 8 (Midnight Black 128GB)',
                price: 22999,
                rating: 6783, reviews: 3324,
                ram: '8 GB',
                ssd: '128 GB'
            },
            {
                img: 'https://rukminim1.flixcart.com/image/312/312/kjlrb0w0/mobile/6/a/e/mi-10i-m10ix06-original-imafz53gjzqae2kr.jpeg?q=70',
                name: 'Mi 10i (Midnight Black 128GB)',
                price: 22999,
                rating: 381, reviews: 33,
                ram: '4 GB',
                ssd: '256 GB'
            },
        ]
    )

    return (
        <ProductContext.Provider  value={{ random, setRandom, productData, setProductData }}>
            {props.children}
        </ProductContext.Provider>
    )

}