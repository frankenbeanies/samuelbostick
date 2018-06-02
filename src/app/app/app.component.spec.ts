import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let sut: AppComponent;

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.resetTestingModule();

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        sut = fixture.componentInstance;
    });

    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });

    describe('ui tests', () => {
        it('should contain a navbar', () => {
            let count: number = fixture.debugElement.queryAll(By.css('navbar')).length;
            
            expect(count).toBe(1);
        });
    });
});