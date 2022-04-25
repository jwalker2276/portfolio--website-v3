import React, { useEffect } from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledCanvas = styled.canvas``;

const GodPixel = (): JSX.Element => {
  // Ref to canvas element

  let screenWidth: number;
  let screenHeight: number;

  let btn: HTMLElement | null;
  let btnObj;

  const circleFillColor = "#e3f8ff";
  const circleStrokeColor = "#1992d4";
  const lineColor = "rgba(229, 32, 32, .3)";

  let pixelsArray: Pixel[] = [];

  const godPixel = {
    x: 0,
    y: 0,
    radius: 5,
  };

  let ctx: CanvasRenderingContext2D | null | undefined;

  // Class
  class Pixel {
    x = 0;
    y = 0;
    dx = 0;
    dy = 0;
    radius = 0;

    constructor(x: number, y: number, dx: number, dy: number, radius: number) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
    }

    draw(): void {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circleFillColor;
        ctx.fill();
        ctx.strokeStyle = circleStrokeColor;
        ctx.stroke();
      }
    }

    update(): void {
      //Check x for edges of screen
      if (
        this.x + this.radius > window.innerWidth ||
        this.x - this.radius < 0
      ) {
        this.dx = -this.dx;
      }

      //Check y for edges of screen
      if (
        this.y + this.radius > window.innerHeight ||
        this.y - this.radius < 0
      ) {
        this.dy = -this.dy;
      }

      //Change velocity
      this.x += this.dx;
      this.y += this.dy;

      //Redraw
      this.draw();
    }

    line(): void {
      const connectionRadius = 200;

      for (let i = 0; i < pixelsArray.length; i++) {
        const pX = pixelsArray[i].x;
        const pY = pixelsArray[i].y;

        //Check for connections
        if (
          godPixel.x - pX < connectionRadius &&
          godPixel.x - pX > -connectionRadius
        ) {
          if (
            godPixel.y - pY < connectionRadius &&
            godPixel.y - pY > -connectionRadius &&
            ctx
          ) {
            ctx.beginPath();
            ctx.moveTo(godPixel.x, godPixel.y);
            ctx.lineTo(pX, pY);
            ctx.strokeStyle = lineColor;
            ctx.stroke();
          }
        }
      }
    }
  }

  let canvas: HTMLCanvasElement | null = document.querySelector("canvas");

  // Setup
  const init = (): void => {
    if (!canvas) return;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    // Get btn positions
    if (btn) {
      btnObj = btn.getBoundingClientRect();
      godPixel.x = btnObj.x - btnObj.width / 2 + 50;
      godPixel.y = btnObj.y - btnObj.height / 2 + 50;
    }

    // Clear pixelArray
    pixelsArray = [];

    // Total pixel circle on screen
    let totalPixels = 0;

    // Check width of canvas
    if (screenWidth > 1000) {
      // High performance canvas
      totalPixels = 100;
    } else {
      // Low performance canvas
      totalPixels = 5;
    }

    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;
    let radius = 0;
    const velocity = 2;

    //Get init values
    for (let i = 0; i < totalPixels; i++) {
      radius = Math.random() * 6;
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      dx = Math.random() * velocity;
      dy = Math.random() * velocity;
      //Create pixels
      pixelsArray.push(new Pixel(x, y, dx, dy, radius));
    }
  };

  const createGodPixel = (): void => {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(godPixel.x, godPixel.y, godPixel.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = circleStrokeColor;
      ctx.fill();
    }
  };

  const animate = (): void => {
    if (ctx) {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < pixelsArray.length; i++) {
        pixelsArray[i].line();
        pixelsArray[i].update();
      }
      createGodPixel();
    }
  };

  useEffect(() => {
    const updateElementSizes = (): void => {
      const screenElement = document.querySelector(
        "#canvas_container"
      ) as HTMLElement;

      if (screenElement !== null) {
        screenWidth = screenElement.offsetWidth;
        screenHeight = screenElement.offsetHeight;
      }

      init();
    };

    const startUp = (): void => {
      ctx = canvas?.getContext("2d");

      if (ctx) {
        ctx.lineWidth = 0.5;
      }

      btn = document.querySelector("#btn--back_button");
      btnObj = btn?.getBoundingClientRect();

      updateElementSizes();
    };

    window.addEventListener("resize", () => {
      startUp();
    });

    startUp();

    animate();

    return (): void => {
      window.removeEventListener("resize", () => {
        startUp();
      });
    };
  }, [canvas, ctx]);

  return (
    <StyledDivWrapper id="canvas_container">
      <StyledCanvas />
    </StyledDivWrapper>
  );
};

export default GodPixel;
