const MyListGroup = () => {
  return (
    <div>
      <ul class="list-group m-3">
        <li class="list-group-item active">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>

      <ul class="list-group list-group-numbered m-3">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>

      <div className="m-3">
        <ul class="list-group">
          <li class="list-group-item list-group-item-action">
            <div class="d-flex flex-row  justify-content-between">
              <label class="form-check-label" for="firstCheckbox">
                List item 1
              </label>
              <input
                class="form-check-input me-1"
                type="checkbox"
                id="firstCheckbox"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action">
            <div class="d-flex flex-row justify-content-between">
              <label class="form-check-label d-block" for="secondCheckbox">
                List item 2
              </label>
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="secondCheckbox"
              />
            </div>
          </li>
          <li class="list-group-item list-group-item-action">
            <div class="d-flex flex-row-reverse justify-content-between">
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                id="thirdCheckbox"
              />
              <label class="form-check-label d-block" for="thirdCheckbox">
                List item 3
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyListGroup;
