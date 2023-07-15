export const generateImageURL = (): string => {
    const imageId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/200/200?random=${imageId}`;
  };
  