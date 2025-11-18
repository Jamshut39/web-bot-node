import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductsByCategoryId,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Mahsulotlar bilan ishlash
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Barcha mahsulotlarni olish
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Mahsulotlar ro‘yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "671016aa5ff53f54b2393b3c"
 *                   name:
 *                     type: string
 *                     example: "Yem aralashmasi"
 *                   description:
 *                     type: string
 *                     example: "Sut hayvonlari uchun aralash yem"
 *                   image:
 *                     type: string
 *                     example: "https://example.com/image.jpg"
 *                   category:
 *                     type: string
 *                     example: "Yem mahsulotlari"
 *                   price:
 *                     type: number
 *                     example: 25000
 *                   quantity:
 *                     type: number
 *                     example: 100
 *                   isActive:
 *                     type: boolean
 *                     example: true
 */
router.get("/", getProducts);

/**
 * @swagger
 * /products/category/{categoryId}:
 *   get:
 *     summary: Category bo‘yicha mahsulotlarni olish
 *     tags: [Product]
 *     parameters:
 *       - name: categoryId
 *         in: path
 *         required: true
 *         description: Category ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shu category ga tegishli mahsulotlar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   image:
 *                     type: string
 *                   category:
 *                     type: string
 *                   price:
 *                     type: number
 *                   quantity:
 *                     type: number
 *                   isActive:
 *                     type: boolean
 *       404:
 *         description: Shu category ga tegishli mahsulot topilmadi
 */
router.get("/category/:categoryId", getProductsByCategoryId);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Bitta mahsulotni ID orqali olish
 *     tags: [Product]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Mahsulotning unikal ID si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan mahsulot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 image:
 *                   type: string
 *                 category:
 *                   type: string
 *                 price:
 *                   type: number
 *                 quantity:
 *                   type: number
 *                 isActive:
 *                   type: boolean
 *       404:
 *         description: Mahsulot topilmadi
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Yangi mahsulot yaratish
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Quruq yem"
 *               description:
 *                 type: string
 *                 example: "Sut hayvonlari uchun yuqori sifatli yem"
 *               image:
 *                 type: string
 *                 example: "https://example.com/product.jpg"
 *               category:
 *                 type: string
 *                 example: "671012ab3d6d2f54b1234c9f"
 *               price:
 *                 type: number
 *                 example: 18000
 *               quantity:
 *                 type: number
 *                 example: 40
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Yangi mahsulot yaratildi
 */

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Mahsulotni tahrirlash
 *     tags: [Product]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Mahsulotning ID si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi yem"
 *               description:
 *                 type: string
 *                 example: "Sut hayvonlari uchun maxsus aralashma"
 *               image:
 *                 type: string
 *                 example: "https://example.com/new-product.jpg"
 *               price:
 *                 type: number
 *                 example: 21000
 *               quantity:
 *                 type: number
 *                 example: 75
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Mahsulot muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Mahsulotni o‘chirish
 *     tags: [Product]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Mahsulotning ID si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mahsulot o‘chirildi
 */

router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
