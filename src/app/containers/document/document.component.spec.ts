import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentComponent } from './document.component';
import { AppMaterialModule } from '../../app-material.module';
import { ApiService, AuthService } from '../../services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DocumentComponent', () => {
  let component: DocumentComponent;
  let fixture: ComponentFixture<DocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AppMaterialModule
      ],
      declarations: [ DocumentComponent ],
      providers: [ApiService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
