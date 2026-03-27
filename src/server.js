require('dotenv').config();
console.log('DATABASE_URL:', process.env.DATABASE_URL ? process.env.DATABASE_URL.replace(/\/\/.*:.*@/, "//USER:PASS@") : "NOT SET");
console.log('PORT:', process.env.PORT || "NOT SET");

const express = require('express');
const cors = require('cors');

const regionRouter = require('./routes/regionRoutes');
const provinceRouter = require('./routes/provinceRoutes');
const municipalityRouter = require('./routes/municipalityRoutes');
const attractionRouter = require('./routes/attractionRoutes');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function checkDB() {
  try {
    const nRegions = await prisma.region.count();
    console.log('Success: DB connection! Region count:', nRegions);
  } catch (err) {
    console.error('Fail: DB not connected!', err);
    process.exit(1); // Stop server if connection fails
  }
}
checkDB();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// DB connectivity check
app.get('/api/db-test', async (req, res) => {
  try {
    const regions = await prisma.region.findMany({ take: 1 });
    res.json({ status: 'ok', db: 'connected', regionSample: regions[0] || null });
  } catch {
    res.status(500).json({ status: 'fail', db: 'connection error' });
  }
});

// API routers
app.use('/api/regions', regionRouter);
app.use('/api/provinces', provinceRouter);
app.use('/api/municipalities', municipalityRouter);
app.use('/api/attractions', attractionRouter);

// Not found fallback
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});