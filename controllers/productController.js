import Product from "../models/Product.js";

// Create new product
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, quantity, category, image } = req.body;

    // Input validation
    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ message: "Name, price, and category are required" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      quantity: quantity || 0,
      category,
      image: image || "", // image maydonini URL sifatida qabul qiladi
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// Get all products with category info
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category", "name");
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// Get single product by id
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Update product
export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { name, description, price, quantity, category, image, isActive } =
      req.body;

    // Faqat kelgan maydonlarni yangilash
    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (quantity !== undefined) product.quantity = quantity;
    if (category !== undefined) product.category = category;
    if (image !== undefined) product.image = image;
    if (isActive !== undefined) product.isActive = isActive;

    await product.save();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Delete product uchun
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Mahsulot topilmadi" });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Mahsulot muvaffaqiyatli o'chirildi" });
  } catch (error) {
    console.log(error);
  }
};

// Get products by category (using route param)
export const getProductsByCategoryId = async (req, res, next) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const products = await Product.find({ category: categoryId }).populate(
      "category",
      "name"
    );

    if (!products || products.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
