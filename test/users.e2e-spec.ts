import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UsersController E2E Test', () =>{
    let app:INestApplication

    beforeEach(async() => {
        const moduleFixture: TestingModule = await Test.
        createTestingModule({
            imports:[AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('should create a new user', () => {
        return request(app.getHttpServer()).post('/auth/signup').send({
            email: "bercanda@gmail.com",
            username: "bercanda",
            password: "bercanda",
        })
        .expect(201)
    })


    it('should logged in', async () => {
        const res = await request(app.getHttpServer()).post('/auth/signin').send({
            username: "bercanda",
            password: "bercanda",
        })
        .expect(201)

        const token = res.get('Set-Cookie')
        expect(token).toBeDefined()
    })

    it('should logged out', async () => {
        return request(app.getHttpServer()).get('/auth/signout')
        .expect(200);
    })
})