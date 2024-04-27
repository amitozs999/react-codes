//custom checkbox have itemvalues{title,checked} and onchange of container (has onchange of parent)

const Checkbox = ({ title, checked, onChange }) => {
  return (
    <div className="block mb-6">
      <label>
        <span>{title}</span>
        <input
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          hidden
        />
      </label>
    </div>
  );
};
export default Checkbox;
