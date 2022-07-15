import { LoadSkia } from '@shopify/react-native-skia/lib/module/web';
import { lazy, Suspense, useMemo } from 'react';

export function AsyncSkia({ getComponent, fallback }) {
  const Inner = useMemo(() => lazy(async () => {
    await LoadSkia();
    return getComponent()
  }), [getComponent]);

  return (
    <Suspense fallback={fallback}><Inner /></Suspense>
  );
}
