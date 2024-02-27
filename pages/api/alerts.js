import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
      // Add this inside your existing handler function
  if (req.method === 'GET') {
    const alerts = await prisma.alert.findMany();
    res.json(alerts);
  } // Place this before the POST check

  if (req.method === 'POST') {
    const { message } = req.body; // Assuming the alert sends a "message" payload
    try {
      const alert = await prisma.alert.create({
        data: {
          message,
        },
      });
      res.status(200).json(alert);
    } catch (error) {
      console.error('Error saving alert:', error);
      res.status(500).json({ error: 'Error saving alert' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
