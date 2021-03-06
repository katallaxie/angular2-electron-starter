import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';

describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo',
            }),
          },
        },
      },
      AboutComponent,
    ],
  }));

  it('should log ngOnInit', inject([AboutComponent], (about: AboutComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
