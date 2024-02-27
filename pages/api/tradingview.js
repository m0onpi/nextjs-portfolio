import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body; // Assume the alert sends a "message" field
    try {
      // Store the alert message in the database
      const alert = await prisma.alert.create({
        data: {
          message,
        },
      });
      res.status(200).json(alert);
    } catch (error) {
      console.error("Failed to save alert", error);
      res.status(500).json({ error: "Failed to save alert" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
