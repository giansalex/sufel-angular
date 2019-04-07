import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbCardModule,
  NbMenuModule,
  NbActionsModule,
} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppMaterialModule } from '../../../app-material.module';
import { SharedModule } from '../../../shared/shared.module';
import { DocumentService, AuthService } from '../../../document/services';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        NbMenuModule,
        NbActionsModule,
        Ng2SmartTableModule,

        AppMaterialModule,
        SharedModule,
      ],
      declarations: [ DashboardComponent ],
      providers: [
        NbSidebarService,
        ...NbSidebarModule.forRoot().providers,
        ...NbMenuModule.forRoot().providers,

        AuthService,
        DocumentService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
