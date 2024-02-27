import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    try {
      const { message } = req.body;
      const alert = await prisma.alert.create({ data: { message } });
      return res.status(200).json(alert); // Exit after sending response
    } catch (error) {
      console.error('Error saving alert:', error);
      return res.status(500).json({ error: 'Error saving alert' }); // Exit after sending response
    }
  } else if (req.method === 'GET') {
    // Handle GET request
    const alerts = await prisma.alert.findMany();
    return res.status(200).json(alerts); // Exit after sending response
  }

  // If the request method is neither GET nor POST
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`); // Exit after sending response
}
