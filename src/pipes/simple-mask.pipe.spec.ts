import { SimpleMaskPipe } from "./simple-mask.pipe";

describe('MaskPipe', () => {
    const pipe = new SimpleMaskPipe();
  
    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });
  
    it('should fit on mask', () => {
      const res = pipe.transform('12345675018', '999.999.999-99');
      expect(res).toBe('123.456.750-18');
    });
  
    it('should set patterns and fit on mask', () => {
      const res = pipe.transform(
        'ASD123',
        'III',
        { 'I': '[A-Z]' }
      );
      expect(res).toBe('ASD');
    });
  });