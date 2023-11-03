/*initialState: [
    {
        id: 1,
        imageUrl: ''
    }
] */

export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log("화면 끝", entry);
          if (this.state.photos.length < this.state.totalCount) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let $lastli = null;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList__photos"></ul>
        `;

      isInitialize = true;
    }

    const { photos } = this.state;
    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      // photo의 id 기준으로 렌더링이 되어 있는지 체크
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = "list-style:none; min-height: 500px;";
        $li.innerHTML = `<img src="${photo.imagePath}" style="width:100%;" />`;

        $photos.appendChild($li);
      }
      // 없으면 li 생성하고 $photos에 appendChild
    });
    const $nextli = $photos.querySelector("li:last-child");

    if ($nextli !== null) {
      if ($lastli !== null) {
        observer.unobserve($lastli);
      }
      $lastli = $nextli;
      observer.observe($lastli);
    }
  };

  this.render();

  window.addEventListener("scroll", () => {
    const { isLoading, totalCount, photos } = this.state;
    const isScrollEnded = window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight; // 스크롤 체크 가능
    if (isScrollEnded && !isLoading && photos.length < totalCount) {
      onScrollEnded();
    }
  });
}
