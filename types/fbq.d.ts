// Global Meta Pixel (fbq) type declaration
// This extends the Window interface so TypeScript recognizes window.fbq

type FbqEventName =
  | 'PageView'
  | 'Lead'
  | 'Purchase'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'CompleteRegistration'
  | 'Contact'
  | 'Search'
  | string;

interface Window {
  fbq: (
    action: 'track' | 'init' | 'trackCustom',
    eventName: FbqEventName,
    params?: Record<string, unknown>
  ) => void;
  _fbq?: unknown;
}
