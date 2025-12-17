const request = require('supertest');
const express = require('express');

// Mock Express app for testing
const app = express();
app.use(express.json());

// Simple health check endpoint for testing
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Mock university endpoint
app.get('/api/universities', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: '1', title: 'Test University', city: 'Lahore' }
    ]
  });
});

// Mock login endpoint
app.post('/login', (req, res) => {
  const { student_email, password } = req.body;
  if (student_email && password) {
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'mock-jwt-token'
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password required'
    });
  }
});

describe('Backend API Tests', () => {
  
  // Test 1: Health Check
  test('GET /health - should return server status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  // Test 2: Get Universities
  test('GET /api/universities - should return universities list', async () => {
    const response = await request(app).get('/api/universities');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  // Test 3: Login with valid credentials
  test('POST /login - should login with valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        student_email: 'test@example.com',
        password: 'password123'
      });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();
  });

  // Test 4: Login without credentials
  test('POST /login - should fail without credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({});
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });

  // Test 5: API response structure
  test('API responses should have correct structure', async () => {
    const response = await request(app).get('/api/universities');
    expect(response.body).toHaveProperty('success');
    expect(response.body).toHaveProperty('data');
  });
});
