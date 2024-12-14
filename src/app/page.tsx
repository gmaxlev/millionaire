'use client';

import MillionaireErrorBoundary from '@/millionaire/components/MillionaireErrorBoundary/MillionaireErrorBoundary';
import MillionaireGame from '@/millionaire/components/MillionaireGame/MillionaireGame';

export default function Home() {
  return (
    <MillionaireErrorBoundary>
      <MillionaireGame />
    </MillionaireErrorBoundary>
  );
}
