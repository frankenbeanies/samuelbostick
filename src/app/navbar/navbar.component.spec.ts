import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent, Pages } from './navbar.component';

let fixture: ComponentFixture<NavbarComponent>;
let sut: NavbarComponent;

describe('NavbarComponent', () => {
    beforeEach(async(() => {
        TestBed.resetTestingModule();

        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        sut = fixture.componentInstance;
    });

    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });

    describe('ui tests', () => {
        describe('on home page', () => {
            beforeEach(() => {
                sut.page = Pages.HOME;
                fixture.detectChanges();
            });

            describe('login link', () => {
                it('should not be active', () => {
                    let classList: string = fixture.debugElement.query(By.css('#login_link')).nativeElement.classList;

                    expect(classList).not.toContain('active');
                });
            });
        });

        describe('on login page', () => {
            beforeEach(() => {
                sut.page = Pages.ADMIN_LOGIN;
                fixture.detectChanges();
            });

            describe('login link', () => {
                it('should not be active', () => {
                    let classList: string = fixture.debugElement.query(By.css('#login_link')).nativeElement.classList;

                    expect(classList).toContain('active');
                });
            });
        });
    });
});