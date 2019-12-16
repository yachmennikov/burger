import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipresListComponent } from './recipres-list.component';

describe('RecipresListComponent', () => {
  let component: RecipresListComponent;
  let fixture: ComponentFixture<RecipresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
