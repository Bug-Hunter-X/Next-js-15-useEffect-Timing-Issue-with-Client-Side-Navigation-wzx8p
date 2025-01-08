# Next.js 15 useEffect Timing Issue

This repository demonstrates an issue related to the timing of `useEffect` hooks when navigating between pages in a Next.js 15 application.  The `About` page fetches data using `useEffect`, resulting in a noticeable delay before the data is displayed.  The issue is specifically related to client-side routing and how `useEffect` interacts with the component's mounting and unmounting lifecycle.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Observe that the initial render of the `About` page displays 'Count: 0', followed by an update to 'Count: 1' after a 3-second delay.

## Expected Behavior

The expected behavior is for the `About` page to display the fetched data immediately after the navigation is complete, or at least more seamlessly.

## Actual Behavior

The `About` page displays the initial value ('Count: 0') before the data is fetched.  There is a noticeable 3-second delay before the page updates to the correct value.

## Solution

See the `solution` branch for a potential fix using techniques like data fetching during the page transition (using `getStaticProps` or `getServerSideProps`), or improving the handling of the loading state using a loading indicator.