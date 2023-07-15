import React from 'react';

interface BackgroundWrapperProps {
  backgroundImage: string;
  opacity: number;
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  backgroundImage,
  opacity,
  children,
}) => {
  const wrapperStyle = {
    backgroundImage: `url(${backgroundImage})`,
    opacity: opacity,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
  };

  return (
    <div className="background-wrapper" style={wrapperStyle}>
      <div className="block-bg-overlay style-color-jevc-bg" style={{ opacity: opacity }}></div>
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
