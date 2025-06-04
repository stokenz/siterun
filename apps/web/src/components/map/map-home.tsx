import { MapInstance, useControl } from "react-map-gl";

class HomeButton {
  _container: HTMLDivElement;

  constructor() {
    this._container = document.createElement("div");
  }

  onAdd(map: MapInstance) {
    this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
    this._container.innerHTML = `<button>
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 20px;"><title>Reset map</title><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
          </button>`;
    this._container.addEventListener("contextmenu", (e) => e.preventDefault());
    this._container.addEventListener("click", () =>
      map.fitBounds([
        [165.954319, -47.436123],
        [179.229264, -33.217074],
      ]),
    );

    return this._container;
  }

  onRemove() {
    this._container.remove();
  }
}

export default function HomeControl(props: { position: "top-right" }) {
  useControl(() => new HomeButton(), {
    position: props.position,
  });

  return null;
}
