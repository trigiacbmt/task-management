import {AuthService} from "./auth.service"
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { User } from "@trigiacbmt/util";
import { provideHttpClient } from "@angular/common/http";
describe('AuthService', () => {
    let service: AuthService
    let httpMock: HttpTestingController

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [provideHttpClientTesting(), AuthService, provideHttpClient()]
        })
        service = TestBed.inject(AuthService)
        httpMock = TestBed.inject(HttpTestingController)
    })
    
    it('should be created', () => {
    
    expect(service).toBeTruthy();
    });

    it('should return a user on login', () => {

    const mockUser: Partial<User> = {
        id: "d65047e5-f4cf-4caa-9a38-6073dcbab7d1",
        name: "Trung Vo",
        avatarUrl: "https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1593253478/trung-vo_bioxmc.png",
        createdAt: "2020-06-16T16:00:00.000Z",
        updatedAt: "2020-06-16T16:00:00.000Z"
        }

    service.login().subscribe(user => {
        expect(user).toEqual(mockUser);
    });

    // const req = httpMock.expectOne('assets/data/auth.json');
    // expect(req.request.method).toBe('GET');
    // req.flush(mockUser); // Respond with mock data
    });
})