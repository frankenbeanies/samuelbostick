import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let sut: AppComponent;

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.resetTestingModule();

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        sut = fixture.componentInstance;
    });
});