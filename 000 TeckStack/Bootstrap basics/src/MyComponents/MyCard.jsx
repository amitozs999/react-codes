const MyCard = () => {
  return (
    <>
      <div class="card m-3">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" class="btn btn-primary">
            Learn More
          </button>
        </div>
      </div>
      <div class="card m-3">
        <img
          height="250px"
          src="images/1.jpg"
          class="card-img-top"
          alt="green iguana"
        />
        <div class="card-body">
          <h4>Lizard</h4>
          <p class="card-text">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </p>
          <div>
            <button class="btn btn-primary" type="button">
              Share
            </button>
            <button class="btn btn-link" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div class="card m-3">
        <div class="card-header d-flex align-items-center">
          <span class="avatar text-bg-primary avatar-lg fs-5">R</span>
          <div class="ms-3">
            <h6 class="mb-0 fs-sm">Shrimp and Chorizo Paella</h6>
            <span class="text-muted fs-sm">September 14, 2022</span>
          </div>
          <div class="dropstart ms-auto">
            <button
              class="btn text-muted"
              type="btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src="/images/1.jpg" class="card-img-top" alt="green iguana" />
        <div class="card-body">
          <p class="card-text">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </p>
        </div>
        <div class="card-footer d-flex">
          <button class="btn btn-link p-0 me-auto fw-bold" href="#">
            Action
          </button>
          <button class="btn btn-subtle" type="button"></button>
          <button class="btn btn-subtle" type="button"></button>
        </div>
      </div>
    </>
  );
};

export default MyCard;
