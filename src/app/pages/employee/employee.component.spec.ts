import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/router/app.routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EmployeeComponent } from '../employee/employee.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent, SignInComponent, MenuComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show/hide create employee form", () => {
    component.showCreateEmployee();
    expect(component.showCreateEmployeeForm).toBe(true, "true after first click");
    component.showCreateEmployee();
    expect(component.showCreateEmployeeForm).toBe(false, 'false after second click');
  })
});
