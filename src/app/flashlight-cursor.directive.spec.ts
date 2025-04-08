import { FlashlightCursorDirective } from './flashlight-cursor.directive';

describe('FlashlightCursorDirective', () => {
  it('should create an instance', () => {
    const mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
    const directive = new FlashlightCursorDirective(mockRenderer);
    expect(directive).toBeTruthy();
  });
});
