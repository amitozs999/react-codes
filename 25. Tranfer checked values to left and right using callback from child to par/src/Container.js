import Checkbox from "./CheckBox";

const Container = ({ items, onChange }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <Checkbox
          {...item}
          //passing checkbox ka onchange conatiner ka onchange to checkbox taki vo ise call kare
          onChange={(checked) => onChange(item.id, checked)}   
           //(checked) recieve checked value of this checkbox when clicked
           // onChange(item.id, checked) passing value to on change of parent, vha ka on change will send to onchange custom
        />
      ))}
    </div>
  );
};

export default Container;
