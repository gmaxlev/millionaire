import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { PropsWithChildren } from 'react';
import MillionaireFullScreen from '../MillionaireFullScreen/MillionaireFullScreen';

export default function MillionaireErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={(
      <MillionaireFullScreen>
        <div>
          <p>
            Something went wrong
            {' '}
            <br />
            Please try again later
          </p>
        </div>
      </MillionaireFullScreen>
  )}
    >
      {children}
    </ErrorBoundary>
  );
}
