export const wrapAround = (value: number, size: number): number => {
    return ((value % size) + size) % size;
  };