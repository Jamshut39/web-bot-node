import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Mahsulot kategoriyalari bilan ishlash
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Barcha kategoriyalarni olish
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Kategoriyalar ro‘yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "66ffb0ab45c8d56c14b78e91"
 *                   name:
 *                     type: string
 *                     example: "Yem mahsulotlari"
 */
router.get("/", getCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Yangi category yaratish
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Qurilish materiallari"
 *     responses:
 *       201:
 *         description: Yangi kategoriya yaratildi
 */
router.post("/", createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Kategoriyani tahrirlash
 *     tags: [Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Kategoriyaning unikal ID si
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
 *                 example: "Yangi kategoriya nomi"
 *     responses:
 *       200:
 *         description: Kategoriya muvaffaqiyatli yangilandi
 */
router.put("/:id", updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Kategoriyani o‘chirish
 *     tags: [Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: O‘chiriladigan kategoriyaning ID si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Kategoriya o‘chirildi
 */
router.delete("/:id", deleteCategory);

export default router;
