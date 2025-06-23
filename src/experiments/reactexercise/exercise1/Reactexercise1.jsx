// Import necessary librariesAdd commentMore actions

// Setting default props for the above component
GreetingWithProps.defaultProps = {
  name: "Guest", // Fallback value if no name is passed
};

// =================================
// Class Component Example
// =================================
class WelcomeClass extends React.Component {
  // Class components use the 'render' method to return JSX
  render() {
    return <h3>Welcome from Class Component!</h3>;
  }
}

// =======================================
// Main App Component - Combines All Above
// =======================================
const ReactExercise1 = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Functional component example */}
      <BasicGreeting />

      {/* Passing data using props */}
      <GreetingWithProps name="Alice" />

      {/* Using default prop (no name passed) */}
      <GreetingWithProps />

      {/* Class component example */}
      <WelcomeClass />
    </div>
  );
};

// Export the main App component
export default ReactExercise1;
