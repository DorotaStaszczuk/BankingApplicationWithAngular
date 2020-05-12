import { TestBed } from '@angular/core/testing';

import { ModalVisibilityService } from './modal-visibility.service';

describe('ModalVisibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalVisibilityService = TestBed.get(ModalVisibilityService);
    expect(service).toBeTruthy();
  });
});
