// 状态提示不参与布局，也不夺取触发按钮的键盘焦点。
export function Toast({ message }: { message: string }) {
  return <div className="toast-region" role="status" aria-live="polite" aria-atomic="true">
    {message && <div className="toast-message">{message}</div>}
  </div>;
}
