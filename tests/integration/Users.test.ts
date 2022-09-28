/* global beforeAll afterAll describe test expect */
import request from 'supertest';
import app from '../../src/App';
import prisma from '../helpers/Index';

const API_USERS = '/users';

beforeAll(async () => {
  const removeUsers = prisma.user.deleteMany();
  await prisma.$transaction([removeUsers]);
});

afterAll(async () => {
  const removeUsers = prisma.user.deleteMany();
  await prisma.$transaction([removeUsers]);
  await prisma.$disconnect();
});

describe('Test the users path', () => {
  test('It should add new user', async () => {
    const newUser = {
      name: 'User 1',
      email: 'user1@email.com',
    };
    const response = await request(app).post(API_USERS).send(newUser);
    expect(response.statusCode).toBe(201);
  });

  test('It should get all users', async () => {
    const response = await request(app).get(API_USERS);
    const users = response.body;
    console.log('users: ', users);
    expect(response.statusCode).toBe(200);
    expect(users.length).toBe(1);
  });
});
