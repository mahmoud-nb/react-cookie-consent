# Cookie Consent Library

This library provides a simple and customizable cookie consent component for both React and non-React applications. It allows you to easily add a cookie consent banner to your website, giving users the option to accept or decline the use of cookies.

## Features

- Easy to integrate with React applications
- Can be used in non-React applications
- Customizable appearance
- Remembers user's choice using localStorage

## Installation

You can install the library using npm:

```bash
npm install cookie-consent-library
```

Or using yarn:

```bash
yarn add cookie-consent-library
```

## Usage

### In React Applications

1. Import the `CookieConsent` component:

```jsx
import { CookieConsent } from 'cookie-consent-library';
```

2. Use the component in your app:

```jsx
function App() {
  const handleAccept = () => {
    console.log('Cookies accepted');
    // Add your logic for accepted cookies
  };

  const handleDecline = () => {
    console.log('Cookies declined');
    // Add your logic for declined cookies
  };

  return (
    <div>
      {/* Your app content */}
      <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
    </div>
  );
}
```

### In Non-React Applications

1. Import the `injectCookieConsent` function:

```javascript
import { injectCookieConsent } from 'cookie-consent-library';
```

2. Call the function to inject the cookie consent banner:

```javascript
injectCookieConsent(
  () => console.log('Cookies accepted'),
  () => console.log('Cookies declined')
);
```

You can also use it in a script tag if you're not using a module bundler:

```html
<script type="module">
  import { injectCookieConsent } from './path/to/cookie-consent-library/dist/cookie-consent.js';

  injectCookieConsent(
    () => console.log('Cookies accepted'),
    () => console.log('Cookies declined')
  );
</script>
```

## Customization

You can customize the appearance of the cookie consent banner by modifying the CSS in `src/styles/CookieConsent.css`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
