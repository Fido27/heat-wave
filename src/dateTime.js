export function getCurrentDateTime() {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'long' }); // e.g., Monday
    const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // e.g., July 19, 2021
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); // e.g., 02:05:07 PM
  
    return { day, date, time };
  }