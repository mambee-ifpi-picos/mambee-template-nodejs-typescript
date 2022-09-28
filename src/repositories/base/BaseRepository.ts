import { PrismaClient } from '@prisma/client';

export default abstract class BaseRepository {
    private prisma = new PrismaClient();
    
    public getPrisma() : PrismaClient {
        return this.prisma;
    }
}