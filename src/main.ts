import './polyfills';
import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import './test.ts';
import './app/radio-harness-example.spec';

(function bootstrap() {
  if ((window as any).jasmineRef) {
    location.reload();

    return;
  }

  window.onload!(new Event("anything"));
  (window as any).jasmineRef = jasmine.getEnv();
})();


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */