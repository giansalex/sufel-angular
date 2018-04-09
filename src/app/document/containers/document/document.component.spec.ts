import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentComponent } from './document.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../../app-material.module';
import { AuthService, DocumentService } from '../../services';
import { ApiService, FileSaverService } from '../../../shared/services';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DocumentComponent', () => {
  let component: DocumentComponent;
  let fixture: ComponentFixture<DocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientModule,
        AppMaterialModule
      ],
      declarations: [ DocumentComponent ],
      providers: [ApiService, AuthService, DocumentService, FileSaverService]
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
