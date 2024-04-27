const Parent = ({ children }) => {
  //jo bhi iske child be hoga will be passed in children props
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
};

export default Parent;
