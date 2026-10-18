import { useCallback, useEffect, useRef, useState } from 'react';

// 新提示覆盖旧提示并重置计时；卸载时清理，避免严格模式下遗留定时器。
export function useToast() {
  const [message, setMessage] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const notify = useCallback((nextMessage: string) => {
    clearTimeout(timer.current);
    setMessage(nextMessage);
    timer.current = setTimeout(() => setMessage(''), 2500);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);
  return { message, notify };
}
