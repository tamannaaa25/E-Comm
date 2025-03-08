import ck01 from './ck01.jpg'
import ck01_m from './ck01_m.jpg'
import ck02_1 from './ck02_1.jpg'
import ck02_2 from './ck02_2.jpg'
import ck03_1 from './ck03_1.jpg'
import ck03_2 from './ck03_2.jpg'
import ck04 from './ck04.jpg'
import ck05 from './ck05.jpg'

import logo from './logo.png';

export const assets = {
    logo
};

export const products = [
    {
    _id: "ck01",
    name: "Beigee",
    description: "Men's Classic Beige Suit",
    price: 1000,
    colour: "Brown",
    image: [ck01_m , ck01],
    category: "Men",
    subCategory: "Fullpiece",
    sizes: ["S","M","L"],
    bestseller: true,
    },

    {
        _id: "ck02",
        name: "Blueey",
        description: "Blulluluy",
        price: 1150,
        colour: "Blue",
        image: [ck02_1,ck02_2],
        category: "Men",
        subCategory: "Fullpiece",
        sizes: ["S","M","L"],
        bestseller: true,
    },
    
    {
        _id: "ck03",
        name: "Bleeeeey",
        description: "Bluluey",
        price: 1200,
        colour: "Blue",
        image: [ck03_1,ck03_2],
        category: "Men",
        subCategory: "Fullpiece",
        sizes: ["S","M","L"],
        bestseller: true,
    },

    {
        _id: "ck04",
        name: "Reddyy",
        description: "Redd",
        price: 900,
        colour: "Red",
        image: [ck04],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S","M","L"],
        bestseller: false,
        },

        {
            _id: "ck05",
            name: "Darkkky",
            description: "Dbluee",
            price: 1100,
            colour: "Blue",
            image: [ck05],
            category: "Men",
            subCategory: "Fullpiece",
            sizes: ["S","M","L"],
            bestseller: false,
            }
];