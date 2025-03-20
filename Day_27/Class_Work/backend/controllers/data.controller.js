import productModel from "../models/product.model.js";

// const productData = [
//     {
//         "id": 1,
//         "name": "Product 1",
//         "price": 10.99,
//     },
//     {
//         "id": 2,
//         "name": "Product 2",
//         "price": 5.99,
//     },
//     {
//         "id": 3,
//         "name": "Product 3",
//         "price": 7.99,
//     }

// ]

export const getProductData = async(req,res)=> {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const skip = (page - 1) * limit;

    try {
        const products = await productModel.find().skip(skip).limit(limit);
        const total = await productModel.countDocuments();
        const totalPages = Math.ceil(total / limit);
        res.json({ products, totalPages, page });
    }
    catch(e) {
        console.log(e);
        res.status(500).json({ message: "Error fetching products" });

    }
}

export const createProduct = async (req,res)=> {
    const {name,description,image,category,price} = req.body;

    try {
        const data = new productModel({name,description, image, category, price});
        await data.save();
        res.status(200).json({message: 'Product created successfully'});

    }catch(e) {
        res.status(500).send({message:e.message});
    }
}
