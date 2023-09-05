import {React, useState, useEffect} from 'react'
import Index from './views/Index'
import './assets/styles/loader-page.css'
import Loader from './components/Loader'
import Home from './components/Home'


export default function App() {
    const [loading, setLoading] = useState(true)// Declare a 'loading' state variable using the useState hook, initialized to true
  // Function to run on page load
  const onPageLoad = () => {
    console.log('Page loaded'); // Output a message to the console when the page loads
    // You can perform additional tasks here
  };
  useEffect(() => {
    // Use the useEffect hook to perform side effects (e.g., data fetching, subscriptions) in functional components
    setTimeout(() => {
      setLoading(false); // After a delay of 5000 milliseconds (5 seconds), set the 'loading' state to false
      onPageLoad(); // Call the 'onPageLoad' function when the page load effect occurs
    }, 500); // Set the delay to 5000 milliseconds (5 seconds)
  }, []); // The empty dependency array [] means the effect runs only once, after the initial render

  return (
    <div className="App">
      {loading ? ( // If 'loading' is true, render a loading spinner (CSS class 'shapes')
        <Loader />
      ) : (
        <Index />
      )}
    </div>
  )
}