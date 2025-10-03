class Timer {
  #timer;
  #fn;
  #timeout;

  constructor(fn, time) {
    this.#fn = fn;
    this.#timeout = time;

    this.#timer = setInterval(fn, time);
  }

  restart() {
    clearInterval(this.#timer);
    this.#timer = setInterval(this.#fn, this.#timeout);
  }
}

export { Timer };
