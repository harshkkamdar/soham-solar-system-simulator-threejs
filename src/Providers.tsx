import { ReactNode } from 'react';
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext';
import { SpeedControlProvider } from './contexts/SpeedControlContext';
import { PlanetPositionsProvider } from './contexts/PlanetPositionsContext';
import { CameraProvider } from './contexts/CameraContext';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from './contexts/ThemeContext';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <SelectedPlanetProvider>
          <SpeedControlProvider>
            <PlanetPositionsProvider>
              <CameraProvider>
                {children}
              </CameraProvider>
            </PlanetPositionsProvider>
          </SpeedControlProvider>
        </SelectedPlanetProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;