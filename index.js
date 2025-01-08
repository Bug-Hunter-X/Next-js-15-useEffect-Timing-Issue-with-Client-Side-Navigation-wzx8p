```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    console.log('About page mounted');
    const timeoutId = setTimeout(() => {
      setCount(1);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count !== null ? count : 'Loading...'}</p>
    </div>
  );
}
```

This improved version adds a loading state.  While it doesn't eliminate the delay, it provides feedback to the user during the asynchronous operation.  For a more robust solution, consider using `getStaticProps` or `getServerSideProps` to fetch data at build time or during request time respectively.