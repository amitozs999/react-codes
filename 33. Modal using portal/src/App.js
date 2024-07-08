import "./styles.css";
import { useState } from "react";
import { Modal } from "./Modal";
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div onClick={() => console.log("click")}>
      <h2>Profile</h2>
      <button onClick={handleOpenModal}>View More</button>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque natus est dolores assumenda commodi aspernatur debitis amet officiis consectetur architecto eos asperiores sed illum obcaecati explicabo, dolorem quasi nisi aliquam.</p>


      {isModalOpen && (
        <Modal>
          <div>
            <h2>More Information</h2>
            <input type="number" />
          </div>
          <div>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
