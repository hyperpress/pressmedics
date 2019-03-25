import { HP_HOST } from "./config";

import { html, css, unsafeCSS } from "lit-element";
import { PageViewElement } from "./page-view-element.js";
import { updateMetadata } from "pwa-helpers/metadata.js";

import { TsLayoutStyle } from "./ts-style-layout";
import { TsButtonStyle } from "./ts-style-button";
import { TsGridStyle } from "./ts-style-grid";
import { TsTypographyStyle } from "./ts-style-typography";
import { TsCard } from "./ts-style-card";
import { SharedStyles } from "./ts-style-shared";
import { TsHomePageStyle } from "./ts-style-homepage";

const displayType = css`block`;

class TSHome extends PageViewElement {
  static get styles() {
    return [
      TsButtonStyle,
      TsGridStyle,
      TsTypographyStyle,
      TsLayoutStyle,
      TsCard,
      SharedStyles,
      TsHomePageStyle,
      css`
      :host {
        display: ${displayType};
        padding: 0px;
      }
      /* Smaller than 460 */

      .wordpress-animated-bg {
        display: none;
      }

      path {
        stroke-width: 2;
      }

      .purple-line {
        stroke-dasharray: 1200 30;
        stroke-dashoffset: 2700;
        animation: draw 6s linear infinite;
      }

      .green-line {
        stroke-dasharray: 1200 30;
        stroke-dashoffset: 2700;
        animation: draw 7s linear infinite;
      }

      .blue-line {
        stroke-dasharray: 1200 30;
        stroke-dashoffset: 2700;
        animation: draw 5s linear infinite;
      }

      .yellow-line {
        stroke-dasharray: 1200 30;
        stroke-dashoffset: 2700;
        animation: draw 5s linear infinite;
      }

      @keyframes draw {
        from {
          stroke-dashoffset: 0
        }
      }

      @keyframes FadeIn { 
        0% {
          opacity: 0;
          transform: scale(.1);
        }

        85% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      @media (min-width: 460px) {

        section.ts-copy {
          margin: 0;
        }

        .ts-grid-row-start {
          grid-row-start: 1;
        }

        .ts-content-grid-image {
          padding: 44px 0 24px 0;
        }

      }

      @media only screen and (min-width: 1024px) {
        .wordpress-animated-bg {
          display: inline-block;
          position: relative;
          top: 16px;
          right: -40px;
          min-width: auto;
          min-height: 500px;
        }

        .ts-hero::before {
          height: 454px;
          width: 680px;
          content: " ";
          background: url('/images/header/homepage-bg-left.svg') no-repeat;
          position: absolute;
          left: -112px;
          top: 54px;
          z-index: 0;
        }

      }

    `
    ];
  }

  render() {
    updateMetadata({
      title: "Home - HyperPress",
      description: "Home page"
    });

    return html`
    <div class="hypersite-main-content clearfix">
      <article id="ts-site" class="ts-home">
        <header class="ts-hero hero">
          <div class="ts-grid">
            <div class="ts-grid__column is-7 is-6__large is-1__large--offset">
              <header class="ts-grid__column is-7 is-6__large is-1__large--offset">
                <div class="fade-in content-set">
                  <h1 class="ts-section-header__eyebrow ts-eyebrow">HyperPress Publishing System</h1>
                  <h2 class="ts-display3">From design to delivery: WordPress for writers.</h2>
                  <p class="ts-headline4 ts-why-google__intro-text">Designed for professional online publishers. Create great content, grow your audience, monitize your work.</p>
                </div>
              </header>
            </div>
            <div class="cloud-grid__col is-5">
              <svg viewBox="0 0 740 740" class="wordpress-animated-bg">
                <defs>
                  <path d="M516.98 160.73l8.87.9 8.77 1.25 8.65 1.59 8.53 1.92 8.4 2.26 8.27 2.57 8.12 2.88 7.97 3.19 7.82 3.49 7.65 3.78 7.48 4.06 7.31 4.35 7.11 4.61 6.93 4.87 6.73 5.13 6.51 5.38 6.31 5.63 6.09 5.85 5.85 6.09 5.62 6.3 5.38 6.52 5.14 6.73 4.87 6.92 4.61 7.12 4.34 7.3 4.07 7.49 3.78 7.65 3.49 7.81 3.19 7.98 2.88 8.12 2.57 8.27 2.25 8.4 1.93 8.53 1.59 8.65 1.25 8.77.9 8.87.54 8.97.19 9.07-.19 9.07-.54 8.98-.9 8.87-1.25 8.77-1.59 8.65-1.93 8.53-2.25 8.41-2.57 8.26-2.88 8.13-3.19 7.97-3.49 7.82-3.78 7.65-4.07 7.48-4.34 7.3-4.61 7.12-4.87 6.92-5.13 6.73-5.38 6.52-5.63 6.3-5.85 6.09-6.09 5.86-6.3 5.62-6.52 5.38-6.73 5.13-6.92 4.87-7.12 4.61-7.3 4.34-7.49 4.07-7.65 3.78-7.81 3.48-7.98 3.19-8.12 2.89-8.27 2.57-8.4 2.25-8.53 1.92-8.65 1.59-8.77 1.25-8.87.9-8.97.55-9.07.18-9.07-.18-8.98-.55-8.87-.9-8.77-1.25-8.65-1.59-8.53-1.92-8.41-2.25-8.26-2.57-8.13-2.89-7.97-3.19-7.82-3.48-7.65-3.78-7.48-4.07-7.3-4.34-7.12-4.61-6.93-4.87-6.72-5.13-6.52-5.38-6.31-5.63-6.08-5.85-5.86-6.09-5.62-6.3-5.38-6.52-5.13-6.73-4.87-6.92-4.61-7.12-4.34-7.3-4.07-7.48-3.78-7.65-3.48-7.82-3.19-7.97-2.89-8.13-2.57-8.26-2.25-8.41-1.92-8.53-1.59-8.65-1.25-8.77-.9-8.87-.55-8.98-.18-9.07.18-9.07.55-8.97.9-8.87 1.25-8.77 1.59-8.65 1.92-8.53 2.25-8.4 2.57-8.27 2.89-8.12 3.19-7.98 3.48-7.81 3.78-7.65 4.07-7.49 4.34-7.3 4.61-7.12 4.87-6.92 5.13-6.73 5.38-6.52 5.62-6.3 5.86-6.09 6.08-5.85 6.31-5.63 6.52-5.38 6.72-5.13 6.93-4.87 7.12-4.61 7.3-4.35 7.48-4.06 7.65-3.78 7.82-3.49 7.97-3.19 8.13-2.88 8.26-2.57 8.41-2.26 8.53-1.92 8.65-1.59 8.77-1.25 8.87-.9 8.98-.55 9.07-.18 9.07.18 8.97.55zm-74.04 414.46l1.37.39 1.37.38 1.38.37 1.38.35 1.39.35 1.39.34 1.39.34 1.4.32 1.4.31 1.4.3 1.41.29 1.41.29 1.41.27 1.42.26 1.42.26 1.43.24 1.43.23 1.43.23 1.43.21 1.44.21 1.44.19 1.45.18 1.44.18 1.45.16 1.46.16 1.46.14 1.46.13 1.46.12 1.47.12 1.46.1 1.48.09 1.47.08 1.48.07 1.48.06 1.48.05 1.49.03 1.48.03 1.49.02h1.5l1.77-.01 1.77-.02 1.76-.04 1.76-.05 1.75-.07 1.76-.08 1.74-.1 1.75-.11 1.74-.13 1.73-.14 1.74-.16 1.72-.17 1.73-.18 1.72-.2 1.71-.22 1.71-.23 1.71-.24 1.7-.26 1.7-.27 1.69-.28 1.69-.3 1.68-.32 1.68-.32 1.67-.34 1.67-.36 1.66-.37 1.66-.38 1.65-.39 1.64-.41 1.65-.42 1.63-.44 1.63-.45 1.63-.46 1.62-.48 1.61-.48 1.61-.51 1.6-.51 1.6-.53 1.59-.54 1.58-.55-.04-.06-.04-.07-.04-.06-.04-.07-.03-.06-.04-.07-.04-.06-.04-.07-.04-.06-.04-.07-.04-.07-.03-.06-.04-.07-.04-.07-.04-.06-.03-.07-.04-.07-.04-.07-.03-.07-.04-.06-.04-.07-.03-.07-.04-.07-.03-.07-.04-.07-.03-.07-.04-.07-.03-.07-.04-.07-.03-.07-.03-.08-.04-.07-.03-.07-.03-.08-.03-.07-.04-.07-.03-.08-.03-.07-.03-.08-.03-.07-62.41-170.97-60.94 177.01 1.37.39zM311.83 301.17l-.8 1.92-.78 1.93-.76 1.94-.74 1.95-.72 1.96-.7 1.96-.68 1.98-.67 1.99-.64 1.99-.62 2-.61 2.01-.58 2.02-.56 2.03-.54 2.04-.52 2.04-.5 2.06-.49 2.06-.45 2.07-.44 2.08-.42 2.08-.39 2.09-.38 2.1-.35 2.11-.33 2.11-.31 2.13-.29 2.12-.26 2.14-.24 2.14-.22 2.15-.2 2.16-.17 2.16-.16 2.17-.12 2.17-.11 2.19-.08 2.18-.06 2.2-.04 2.2-.01 2.2.09 6.01.26 5.96.43 5.92.6 5.87.76 5.82.93 5.76 1.09 5.71 1.24 5.66 1.4 5.59 1.56 5.53 1.71 5.47 1.85 5.39 2 5.33 2.15 5.26 2.28 5.18 2.43 5.11 2.56 5.02 2.7 4.95 2.83 4.86 2.96 4.77 3.08 4.68 3.21 4.6 3.33 4.49 3.45 4.41 3.57 4.3 3.68 4.2 3.8 4.1 3.91 3.99 4.01 3.89 4.12 3.77 4.22 3.66 4.32 3.55 4.42 3.43 4.52 3.3 4.61 3.19 4.7 3.06 4.79 2.93 4.87 2.8 4.96 2.67 5.04 2.53-96.85-265.36-.84 1.9-.81 1.91zm365.39-17.61l.06.49.06.49.07.5.05.49.06.5.06.5.05.5.06.5.05.5.05.51.05.51.04.51.05.51.04.51.04.52.04.52.04.51.04.53.03.52.03.52.04.53.03.53.02.53.03.53.02.53.03.54.02.54.02.54.01.54.02.54.01.55.02.55.01.55v.55l.01.55.01.56v1.12l-.01 1.04-.03 1.09-.05 1.13-.07 1.17-.08 1.21-.11 1.24-.12 1.29-.15 1.32-.16 1.37-.19 1.4-.2 1.45-.22 1.48-.24 1.52-.26 1.56-.28 1.6-.3 1.64-.32 1.68-.34 1.72-.36 1.76-.38 1.8-.39 1.84-.42 1.88-.43 1.91-.46 1.96-.47 1.99-.49 2.04-.51 2.07-.54 2.12-.55 2.15-.57 2.19-.59 2.23-.6 2.27-.63 2.31-.65 2.35-.67 2.39-.68 2.43-.71 2.47-.72 2.51-.75 2.55-.76 2.58-62.01 179.29 4.49-2.69 4.41-2.81 4.34-2.91 4.25-3.02 4.18-3.13 4.08-3.23 4.01-3.34 3.91-3.43 3.83-3.53 3.73-3.63 3.64-3.72 3.55-3.81 3.44-3.91 3.35-3.99 3.25-4.07 3.14-4.16 3.04-4.25 2.93-4.32 2.82-4.4 2.71-4.48 2.59-4.56 2.48-4.62 2.37-4.7 2.24-4.76 2.13-4.83 2-4.9 1.88-4.96 1.75-5.02 1.62-5.08 1.49-5.14 1.36-5.19 1.22-5.24 1.08-5.3.95-5.35.81-5.39.66-5.44.53-5.48.37-5.52.23-5.56.07-5.6-.02-2.65-.05-2.64-.08-2.62-.12-2.62-.15-2.61-.18-2.6-.22-2.6-.24-2.58-.28-2.57-.31-2.57-.35-2.55-.37-2.54-.41-2.53-.44-2.53-.47-2.51-.5-2.5-.53-2.49-.56-2.48-.59-2.46-.62-2.46-.65-2.44-.68-2.43-.71-2.42-.73-2.4-.77-2.4-.8-2.38-.82-2.36-.85-2.36-.88-2.34-.91-2.32-.94-2.31-.96-2.3-.99-2.29-1.02-2.26-1.04-2.26-1.08-2.24-1.09-2.22-1.13-2.21-1.15-2.2-1.17-2.17.06.48.07.49zM488.37 177.23l-5.24.33-5.19.47-5.16.6-5.12.73-5.08.85-5.03.98-4.99 1.1-4.94 1.22-4.89 1.34-4.84 1.46-4.8 1.58-4.73 1.69-4.69 1.8-4.62 1.92-4.57 2.03-4.51 2.13-4.44 2.25-4.39 2.34-4.32 2.45-4.25 2.55-4.18 2.66-4.11 2.75-4.05 2.84-3.97 2.95-3.89 3.03-3.82 3.13-3.74 3.22-3.66 3.3-3.58 3.39-3.49 3.48-3.41 3.56-3.33 3.65-3.23 3.72-3.15 3.8-3.06 3.88-2.96 3.95-2.87 4.03-2.77 4.1.36.01.35.01.36.01.35.01.35.01.35.01.35.01.35.01h.35l.34.01.35.01.34.01.34.01.34.01h.34l.34.01.33.01h.33l.34.01.33.01h.32l.33.01.32.01h.32l.32.01h.32l.32.01h.62l.31.01h.62l.3.01h3.67l1.66-.01 1.69-.03 1.72-.03 1.75-.04 1.77-.04 1.79-.06 1.8-.06 1.81-.06 1.82-.07 1.82-.08 1.82-.08 1.82-.08 1.8-.09 1.79-.09 1.76-.09 1.75-.09 1.72-.1 1.68-.1 1.65-.09 1.61-.1 1.57-.1 1.52-.09 1.47-.1 1.4-.09 1.35-.09 1.29-.09 1.21-.08 1.14-.08 1.07-.08.98-.07.9-.06.81-.06.71-.05.61-.05.52-.04.4-.03.3-.02.18-.02h.06l.8-.02.76.05.73.1.69.16.65.2.62.25.58.3.54.34.51.38.46.42.43.45.39.47.35.51.31.53.27.55.23.57.19.58.16.6.11.61.07.61.02.62-.01.61-.05.62-.1.61-.13.6-.18.59-.23.57-.26.56-.31.54-.35.52-.4.49-.43.46-.49.43-.52.39-.58.36-.61.31-.66.28-.71.22-.75.18-.8.13h-.08l-.1.02-.14.01-.18.02-.21.03-.25.02-.28.03-.32.04-.35.03-.39.05-.41.04-.45.04-.47.05-.5.05-.53.06-.56.05-.58.06-.61.06-.63.06-.65.06-.68.06-.69.06-.72.06-.74.07-.75.06-.78.07-.78.06-.81.07-.82.06-.83.06-.85.07-.86.06-.86.06-.88.06-.89.06-.9.05-.9.06-.91.05-.92.05 73.96 219.91 44.42-133.23-31.61-86.68-.82-.05-.81-.05-.82-.06-.8-.05-.81-.06-.79-.06-.79-.06-.78-.06-.77-.07-.76-.06-.74-.06-.74-.07-.72-.06-.71-.07-.69-.06-.68-.07-.66-.06-.64-.06-.63-.06-.6-.06-.59-.06-.56-.06-.54-.06-.52-.05-.49-.06-.47-.05-.44-.05-.41-.04-.39-.04-.36-.05-.33-.03-.29-.04-.27-.03-.23-.02-.2-.03-.17-.02-.13-.01-.09-.02h-.08l-.8-.08-.75-.14-.7-.18-.66-.24-.62-.29-.57-.33-.53-.38-.48-.41-.44-.44-.39-.48-.35-.51-.31-.54-.27-.55-.22-.58-.18-.59-.14-.61-.1-.61-.05-.63-.02-.62.03-.63.07-.63.11-.62.15-.61.19-.6.23-.59.27-.56.31-.55.35-.52.39-.49.42-.47.47-.43.5-.39.54-.36.59-.31.61-.26.66-.22.69-.16.73-.11.77-.05.8.02h.06l.19.02.3.02.41.03.52.04.62.05.73.05.81.06.91.06 1 .07 1.07.08 1.16.08 1.22.08 1.3.09 1.35.09 1.42.09 1.47.1 1.53.09 1.57.1 1.61.1 1.65.09 1.68.1 1.71.1 1.73.09 1.76.09 1.77.09 1.78.09 1.79.08 1.78.08 1.79.08 1.78.07 1.77.06 1.75.06 1.74.06 1.71.04 1.68.04 1.65.03 1.61.03 1.56.01h3.14l1.65-.01 1.69-.03 1.72-.03 1.75-.04 1.76-.04 1.79-.06 1.81-.06 1.81-.06 1.82-.07 1.82-.08 1.82-.08 1.81-.08 1.8-.09 1.79-.09 1.77-.09 1.74-.09 1.72-.1 1.69-.1 1.65-.09 1.61-.1 1.57-.1 1.52-.09 1.46-.1 1.41-.09 1.35-.09 1.29-.09 1.21-.08 1.15-.08 1.06-.08.98-.07.9-.06.81-.06.71-.05.62-.05.51-.04.41-.03.29-.02.18-.02h.06l.8-.02.77.05.72.1.7.16.65.2.62.25.57.3.55.34.5.38.46.42.43.45.39.47.35.51.31.53.27.55.23.57.19.58.15.6.11.61.07.61.02.62-.01.61-.06.62-.09.61-.14.6-.18.59-.22.57-.27.56-.31.54-.35.52-.4.49-.44.46-.48.43-.53.39-.57.36-.61.31-.67.28-.7.22-.75.18-.8.13h-.08l-.1.02-.14.01-.18.02-.21.03-.25.02-.28.03-.32.04-.35.03-.38.05-.41.04-.45.04-.47.05-.5.05-.53.06-.56.05-.58.06-.6.06-.63.06-.66.06-.67.06-.7.06-.71.06-.74.07-.75.06-.77.07-.79.06-.81.07-.82.06-.83.06-.84.07-.86.06-.87.06-.88.06-.89.06-.89.05-.91.06-.91.05-.91.05 73.38 218.23 20.26-67.64.76-1.97.74-1.95.73-1.94.7-1.92.69-1.91.66-1.88.65-1.87.63-1.86.6-1.83.59-1.82.57-1.8.55-1.79.53-1.76.52-1.75.49-1.74.47-1.71.46-1.7.43-1.69.42-1.66.39-1.65.38-1.64.36-1.61.34-1.6.32-1.58.29-1.57.29-1.54.26-1.53.24-1.52.22-1.5.2-1.48.19-1.46.16-1.45.15-1.43.12-1.41.11-1.4.09-1.38.07-1.36.04-1.35.03-1.33.01-1.31-.01-1.87-.05-1.84-.08-1.81-.12-1.78-.14-1.76-.17-1.73-.2-1.7-.23-1.67-.25-1.65-.28-1.63-.3-1.6-.33-1.57-.35-1.55-.37-1.52-.39-1.5-.4-1.48-.43-1.46-.45-1.43-.46-1.41-.47-1.38-.49-1.37-.51-1.34-.52-1.32-.52-1.31-.54-1.28-.55-1.26-.56-1.24-.56-1.23-.57-1.2-.58-1.19-.58-1.16-.59-1.15-.59-1.14-.59-1.11-.59-1.1-.59-1.08-.59-1.07-.59-1.05-.58-1.04-.58-1.02-.77-1.25-.77-1.24-.76-1.23-.76-1.22-.75-1.22-.74-1.2-.74-1.21-.73-1.19-.72-1.19-.71-1.18-.7-1.18-.69-1.18-.67-1.17-.66-1.17-.65-1.16-.63-1.17-.62-1.16-.6-1.16-.58-1.16-.57-1.15-.54-1.16-.53-1.16-.5-1.16-.48-1.16-.46-1.17-.44-1.16-.41-1.17-.38-1.17-.36-1.18-.34-1.18-.3-1.19-.28-1.19-.25-1.19-.21-1.21-.19-1.21-.16-1.22-.12-1.22-.08-1.23-.06-1.25-.02-1.25.03-1.39.08-1.39.13-1.39.18-1.37.23-1.36.28-1.35.33-1.34.37-1.32.42-1.3.47-1.29.52-1.26.55-1.24.6-1.23.65-1.19.68-1.17.73-1.15.77-1.11.81-1.08.85-1.05.88-1.02.92-.99.96-.94 1-.91 1.03-.87 1.06-.83 1.1-.78 1.14-.75 1.16-.69 1.19-.65 1.23-.6 1.25-.55 1.29-.5 1.31-.45 1.34-.39 1.37-.33 1.39-.28 1.42-.22 1.44-.16 1.46-.09 1.49-.04h.07l.06.01h.33l.06.01h.13l.07.01h.13l.06.01h.07l.06.01h.13l.07.01h.07l.06.01.07.01h.06l.07.01h.06l.07.01h.06l.07.01.06.01.13.01h.07l.06.01h.07l.06.01.07.01h.06l.07.01h.06l.07.01-2.73-2.46-2.78-2.41-2.82-2.36-2.86-2.31-2.9-2.26-2.95-2.21-2.98-2.15-3.03-2.1-3.07-2.05-3.1-1.99-3.15-1.94-3.18-1.88-3.22-1.83-3.25-1.77-3.29-1.71-3.33-1.65-3.35-1.59-3.4-1.53-3.42-1.47-3.46-1.41-3.49-1.35-3.52-1.29-3.55-1.22-3.58-1.16-3.6-1.09-3.64-1.03-3.66-.96-3.69-.89-3.72-.83-3.74-.76-3.76-.68-3.79-.62-3.81-.55-3.84-.48-3.85-.41-3.88-.33-3.9-.26-3.92-.19-3.94-.11-3.95-.04-5.3.07-5.27.2z" id="a"/>
                  <path d="M239.06 63c20.27 0 36.71 18.01 36.71 40.22 0 .84-.02 1.67-.07 2.49 14.64 3.38 25.41 14.69 25.41 28.13 0 16.1-15.46 29.16-34.53 29.16h-86.61c-19.07 0-34.53-13.06-34.53-29.16 0-14.04 11.75-25.76 27.39-28.53 1.41-15.22 13.13-27.1 27.4-27.1 3.13 0 6.14.57 8.95 1.63C215.84 69.64 226.74 63 239.06 63z" id="b"/>
                  <path d="M301.44 270.38c0 2.75-2.24 5-5 5s-5-2.25-5-5c0-2.76 2.24-5 5-5s5 2.24 5 5z" id="c"/>
                  <path d="M294.44 270.38h-67V121" id="d"/>
                  <path d="M232.44 121c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="e"/>
                  <path d="M519.25 22.38v-.13l.01-.13.01-.13.02-.12.03-.12.03-.13.03-.11.04-.12.05-.12.05-.11.05-.11.06-.11.06-.11.07-.1.07-.1.07-.1.08-.1.09-.09.08-.09.09-.08.1-.09.09-.08.1-.07.11-.08.1-.07.11-.06.11-.06.12-.06.12-.05.12-.05.12-.05.13-.04.12-.04.13-.03.13-.03.14-.02.13-.02.14-.01.14-.01h13.82l.13.01.14.01.14.02.13.02.13.03.13.03.13.04.12.04.12.05.12.05.12.05.12.06.11.06.11.06.11.07.1.08.1.07.1.08.09.09.09.08.09.09.08.09.08.1.07.1.07.1.07.1.06.11.06.11.06.11.04.11.05.12.04.12.03.11.03.13.03.12.02.12.01.13.01.13V55.19l13.54 14.06h-13.54V113h-30.14V82.36l-.01-.13-.01-.14-.02-.14-.03-.13-.03-.13-.04-.13-.04-.12-.04-.13-.05-.12-.06-.12-.06-.12-.06-.11-.07-.11-.08-.11-.07-.11-.08-.1-.09-.1-.09-.1-.09-.09-.1-.09-.1-.09-.1-.08-.11-.08-.11-.07-.11-.08-.12-.06-.12-.06-.12-.06-.12-.06-.13-.04-.13-.05-.13-.04-.13-.03-.14-.03-.14-.03-.14-.02-.14-.01-.14-.01H491.81l-.15.01-.14.01-.14.02-.13.03-.14.03-.13.03-.14.04-.12.05-.13.04-.12.06-.13.06-.12.06-.11.06-.11.08-.11.07-.11.08-.1.08-.1.09-.1.09-.09.09-.09.1-.09.1-.08.1-.08.11-.07.11-.07.11-.07.11-.06.12-.05.12-.05.12-.05.13-.04.12-.03.13-.03.13-.03.13-.02.14-.01.14-.01.13-.01.14v30.35l.01.14v.01h-30.15V69.25h-13.54L498.94 13l20.31 21.09V22.38z" id="f"/>
                  <path d="M503.94 63c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="g"/>
                  <path d="M503.94 149.94c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="h"/>
                  <path d="M498.94 149.94V63" id="i"/>
                  <path d="M31.9 665V535h132v130h-132zm16.5-16.25l24.75-24.37 16.5 8.12L114.4 600l33 43.33v-92.08h-99v97.5zm30.06-79.17l.58.06.58.08.57.1.56.12.55.15.54.17.53.18.53.21.51.22.5.25.49.26.48.28.47.3.45.31.44.34.43.34.42.37.4.38.38.39.37.41.35.42.34.43.32.45.3.46.29.47.26.49.25.49.23.51.21.51.19.53.17.53.14.54.13.55.11.56.08.57.06.57.03.58.01.59-.01.59-.03.58-.06.57-.08.57-.11.56-.13.55-.14.54-.17.53-.19.53-.21.51-.23.51-.25.49-.26.49-.29.47-.3.46-.32.45-.34.43-.35.42-.37.41-.38.39-.4.38-.42.37-.43.34-.44.34-.45.31-.47.3-.48.28-.49.26-.5.25-.51.22-.53.21-.53.18-.54.17-.55.15-.56.12-.57.1-.58.08-.58.06-.59.04-.59.01-.6-.01-.59-.04-.58-.06-.57-.08-.57-.1-.56-.12-.55-.15-.55-.17-.53-.18-.52-.21-.52-.22-.5-.25-.49-.26-.48-.28-.47-.3-.45-.31-.44-.34-.43-.34-.41-.37-.4-.38-.39-.39-.37-.41-.35-.42-.33-.43-.32-.45-.31-.46-.28-.47-.27-.49-.25-.49-.23-.51-.21-.51-.18-.53-.17-.53-.15-.54-.13-.55-.1-.56-.08-.57-.06-.57-.04-.58-.01-.59.01-.59.04-.58.06-.57.08-.57.1-.56.13-.55.15-.54.17-.53.18-.53.21-.51.23-.51.25-.49.27-.49.28-.47.31-.46.32-.45.33-.43.35-.42.37-.41.39-.39.4-.38.41-.37.43-.34.44-.34.45-.31.47-.3.48-.28.49-.26.5-.25.52-.22.52-.21.53-.18.55-.17.55-.15.56-.12.57-.1.57-.08.58-.06.59-.04.6-.01.59.01.59.04z" id="j"/>
                  <path d="M103.4 595c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="k"/>
                  <path d="M420.18 595c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="l"/>
                  <path d="M415.18 595H97.9" id="m"/>
                  <path d="M46.99 330.01l.16.02.16.02.15.03.15.03.15.04.14.04.13.05.13.05.13.06.13.07.12.07.11.07.12.08.11.08.11.09.1.09.1.1.1.1.1.1.09.11.09.11.09.11.09.12.08.12.08.12.09.13.08.13.07.13.08.14.08.14.07.14.08.14.07.15.07.14.08.15.07.15.07.16.07.15 2.24 5.93h75.19l.16.01.15.02.16.02.15.04.15.04.14.04.15.06.14.06.14.06.14.07.13.08.13.08.13.09.12.1.12.1.12.1.12.11.11.12.1.12.1.12.1.13.1.14.09.14.08.14.08.14.08.15.07.16.06.15.07.17.05.16.05.17.05.17.04.17.03.17.03.18.02.18.02.18v.19l.01.18v81.3l-.01.19v.18l-.02.19-.02.18-.03.17-.03.18-.04.17-.05.17-.05.17-.05.16-.07.16-.06.16-.07.15-.08.15-.08.15-.08.14-.09.14-.1.13-.1.13-.1.13-.1.12-.11.11-.12.11-.12.11-.12.1-.12.09-.13.09-.13.09-.13.07-.14.07-.14.07-.14.06-.15.05-.14.05-.15.04-.15.03-.16.03-.15.02-.16.01H12.69l-.15-.01-.16-.02-.15-.03-.15-.03-.15-.04-.15-.05-.14-.05-.14-.06-.14-.07-.14-.07-.13-.07-.13-.09-.13-.09-.13-.09-.12-.1-.12-.11-.11-.11-.11-.11-.11-.12-.1-.13-.1-.13-.09-.13-.09-.14-.09-.14-.08-.15-.07-.15-.07-.15-.07-.16-.06-.16-.06-.16-.05-.17-.04-.17-.04-.17-.03-.18-.03-.17-.02-.18-.02-.19-.01-.18V344l.01-.19.02-.18.02-.18.03-.18.03-.17.04-.17.04-.17.05-.17.06-.16.06-.17.07-.15.07-.16.07-.15.08-.14.09-.14.09-.14.09-.14.1-.13.1-.12.11-.12.11-.12.11-.11.12-.1.12-.1.13-.1.13-.09.13-.08.13-.08.14-.07.14-.06.14-.06.14-.06.15-.04.15-.04.15-.04.15-.02.16-.02.15-.01H14.7l2.24-5.93.05-.15.06-.16.05-.15.06-.15.06-.14.07-.15.06-.14.07-.14.07-.14.07-.14.08-.13.07-.13.09-.13.08-.12.09-.12.08-.12.1-.11.09-.11.1-.11.1-.1.1-.1.11-.1.11-.09.12-.09.11-.08.12-.08.13-.07.12-.07.13-.07.14-.06.14-.05.14-.05.15-.04.14-.04.16-.03.16-.03.16-.02.16-.02.17-.01H46.82l.17.01z" id="n"/>
                  <path d="M76.68 385c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="o"/>
                  <path d="M273.96 385c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" id="p"/>
                  <path d="M270.05 385H71.68" id="q"/>
                </defs>
                <use xlink:href="#a" fill="#f3f3f3" />
                <use xlink:href="#b" fill="#964456" fill-opacity="0"/>
                <use xlink:href="#b" fill-opacity="0" stroke="#600060" stroke-width="2"/>
                <use xlink:href="#c" fill="#600060"/>
                <use xlink:href="#d" fill-opacity="0" stroke="#600060" class="purple-line"/>
                <use xlink:href="#e" fill="#600060"/>
                <use xlink:href="#f" fill-opacity="0" stroke="#008c3a" stroke-width="2"/>
                <use xlink:href="#g" fill="#008c3a"/>
                <use xlink:href="#h" fill="#008c3a"/>
                <use xlink:href="#i" fill-opacity="0" stroke="#008c3a" class="green-line"/>
                <use xlink:href="#j" fill-opacity="0" stroke="#3367d6" stroke-width="2" />
                <use xlink:href="#k" fill="#3367d6" />
                <use xlink:href="#l" fill="#3367d6"/>
                <use xlink:href="#m" fill-opacity="0" stroke="#3367d6"  class="blue-line"/>
                <use xlink:href="#n" fill-opacity="0" stroke="#f4b400" stroke-width="2"/>
                <use xlink:href="#o" fill="#f4b400"/>
                <use xlink:href="#p" fill="#f4b400"/>
                <g>
                  <use xlink:href="#q" fill-opacity="0" stroke="#f4b400" class="yellow-line"/>
                </g>
              </svg>
            </div>
          </div>
        </header>
        <div class="ts-section ts-section--border">
          <div class="ts-section__spacer">
            <section class="ts-copy">
              <div class="ts-grid--alternate ts-copy__inner ts-copy--60-40 ts-grid--vertical-center">
                <div class="ts-grid__col ts-copy--flipped ts-grid__col--horizontal-center ts-copy__img is-4 is-8--offset is-7__large--offset ts-grid-row-start">
                  <img class="ts-content-grid-image" src="/images/content/ts-security-vaccinated-200x200-opt.svg" alt="You own what you create, we store and deliver it" />
                </div>
                <div class="ts-grid__col is-1__large--offset ts-copy__text is-7 is-6__large ts-grid-row-start">
                  <h3 class="ts-headline3" id="engaging-experiences-regardless-screen-size">You own what you create. We deliver it. Faster, farther, better.</h3>
                  <p>You've invested time and energy into creating amazing content for your readers. Finally, a publishing platform worthy of your effort. HyperPress leverages what's best about WordPress content management combined with a beautiful progressive web application (PWA) frontend your readers will love. Own your content, decide when and how to monitize it.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="ts-home-sections ts-home-v">
          <section>
            <iron-selector selected="[[page]]" attr-for-selected="name" class="main-navigation" role="navigation">
              <div class="ts-grid ts-grid__no-gap">
                <header class="ts-grid__col is-6 is-4__large ts-section-header ts-section-header--solutions">
                  <h1 class="ts-section-header__eyebrow ts-eyebrow">The HyperPress difference</h1>
                  <h2 class="ts-section-header__heading ts-headline3" id="wordpress-you-need-solutions-you-deserve">A smarter online publishing platform</h2>
                  <div class="ts-section-header__link">
                    <a 
                      href="/contact/" 
                      class="ts-button ts-button--primary" 
                      track-type="navigateTo" 
                      track-name="home"
                      track-metadata-position="banner">Contact a HyperPress expert</a>
                  </div>
                </header>
                <div class="ts-grid__col is-6 is-4__large">
                  <section class="ts-card ts-card--solution">
                    <header>
                      <h1 class="ts-card__eyebrow ts-eyebrow">PWA Designed Frontend</h1>
                      <img class="ts-card__icon" src="/images/icons/ts-icon-pwa-62x-62.svg" alt="Progressive web application design">
                      <a class="ts-link ts-card__link ts-card__link-text" href="${HP_HOST}design/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="progressiveWebDesign" track-metadata-position="body">
                        <h2 class="ts-card__heading ts-headline4" id="progressive-web-frontend">Inviting and Engaging</h2>
                      </a>
                    </header>
                    <p class="ts-card__body">HyperPress transforms WordPress into responsive, instant loading, accessible, progressive web application.</p>
                      <div class="ts-card__arrow">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <title>Arrow</title>
                          <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                        </svg>
                      </div>
                  </section>
                </div>
                <div class="ts-grid__col is-6 is-4__large">
                  <section class="ts-card ts-card--solution">
                    <header>
                      <h1 class="ts-card__eyebrow ts-eyebrow">Baked in Performance</h1>
                      <img class="ts-card__icon" src="/images/icons/ts-icon-pagespeed-62x62.svg" alt="Pagespeed optimization service">
                      <a class="ts-link ts-card__link ts-card__link-text" href="${HP_HOST}pagespeed/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="workloadMigration" track-metadata-position="body">
                        <h2 class="ts-card__heading ts-headline4" id="pagespeed-optimization">Hyper Optimized Delivery</h2>
                      </a>
                    </header>
                    <p class="ts-card__body">We've supercharged HyperPress to globally deliver lightning fast, secure content to any screen.</p>
                      <div class="ts-card__arrow">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <title>Arrow</title>
                          <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                        </svg>
                      </div>
                  </section>
                </div>
                <div class="ts-grid__col is-6 is-4__large">
                  <section class="ts-card ts-card--solution">
                    <header>
                      <h1 class="ts-card__eyebrow ts-eyebrow">HyperPress Reliability</h1>
                      <img class="ts-card__icon" src="/images/icons/ts-icon-stethescope-62x62-opt.svg" alt="Monitored and maintained">
                      <a class="ts-link ts-card__link ts-card__link-text" href="${HP_HOST}emergency/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="emergencyResponse" track-metadata-position="body">
                        <h2 class="ts-card__heading ts-headline4" id="repairs-restoration">Automated Health Checks</h2>
                      </a>
                    </header>
                    <p class="ts-card__body">We constantly monitor the health of your site taking immediate action to prevent service interruptions 24/7.</p>
                      <div class="ts-card__arrow">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <title>Arrow</title>
                          <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                        </svg>
                      </div>
                  </section>
                </div>
                <div class="ts-grid__col is-6 is-4__large">
                  <section class="ts-card ts-card--solution">
                    <header>
                      <h1 class="ts-card__eyebrow ts-eyebrow">Preceisely Maintained</h1>
                      <img class="ts-card__icon" src="/images/icons/ts-icon-security-62x62.svg" alt="In depth security program">
                      <a class="ts-link ts-card__link ts-card__link-text" href="${HP_HOST}security/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="securityResponse" track-metadata-position="body">
                        <h2 class="ts-card__heading ts-headline4" id="security-response">Backups and Updates</h2>
                      </a>
                    </header>
                    <p class="ts-card__body">Focus on creating, leave the maintaining to us. Live encrypted backups of your content, always up-to-date, no muss, no fuss.</p>
                      <div class="ts-card__arrow">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <title>Arrow</title>
                          <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                          <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                        </svg>
                      </div>
                  </section>
                </div>
                <div class="ts-grid__col is-6 is-4__large">
                  <section class="ts-card ts-card--solution">
                    <header>
                      <h1 class="ts-card__eyebrow ts-eyebrow">Migration Services</h1>
                      <img class="ts-card__icon" src="/images/icons/ts-icon-migrations-62x62.svg" alt="WordPress migration">
                      <a class="ts-link ts-card__link ts-card__link-text" href="${HP_HOST}migrations/" track-type="navigateTo" track-name="solution" track-metadata-eventdetail="wordpressRelocation" track-metadata-position="body">
                        <h2 class="ts-card__heading ts-headline4" id="wordpress-relocation">WordPress Relocation</h2>
                      </a>
                    </header>
                    <p class="ts-card__body">Existing WordPress content? No problem. We'll safely move your content to it's new HyperPress home.</p>
                    <div class="ts-card__arrow">
                      <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <title>Arrow</title>
                        <polyline points="1,9 17,9" stroke="#800080" stroke-width="2" fill="none"></polyline>
                        <polyline points="9,1 17,9 9,17" stroke="#800080" stroke-width="2" fill="none"></polyline>
                      </svg>
                    </div>
                  </section>
                </div>
              </div>
            </iron-selector>
          </section>
        </div>
        <div class="ts-section ts-section--border">
          <div class="ts-section__header ts-text-center ts-grid">
            <div class="ts-grid__col is-12 is-10__large is-1__large--offset">
              <h2 class="ts-headline3" id="features">HyperPress Features</h2>
            </div>
          </div>
          <section class="ts-copy">
            <div class="ts-grid--alternate ts-copy__inner ts-copy--two-column">
              <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">WordPress Gutenberg goodness</h4>
                <p>The latest WordPress backend dashboard streamlined for productive writing and publishing. Focus on great writing using great writing tools.</p>
              </div>
              <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">Progressive Web Application (PWA).</h4>
                <p>No more theme mess. Just our beautiful PWA frontend, built with Google LitElement, Material Design, and web components fully decoupled from WordPress.</p>
              </div>
              <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">You own your content</h4>
                <p>HyperPress doesn't capitalize on your content like other services. We don't use paywalls or advertisements&#8212;that's for your to decide. Moving your content is as easy as moving any other self-hosted WordPress site.</p>
              </div>
              <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">Smooth and natural</h4>
                <p>Quick smooth transitions and animations are baked right in to make for a more natural, pleasing application look and feel. No more janking, confusing view changes </p>
              </div>
              <div class="ts-grid__col is-1__large--offset ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">Installable and always up-to-date</h4>
                <p>Users can optionally install your HyperPress PWA just like any native application. Best of all, PWAs don't take up any storage memory and they're updated to the latest version without any user effort.</p>
              </div>
              <div class="ts-grid__col ts-copy__text is-6 is-5__large">
                <h4 class="ts-headline4">Fast loading and reliable</h4>
                <p>HyperPress PWAs load instantly even in spotty internet conditions. Your readers can continue to read your posts offline uninterrupted.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  `;
  }
}
window.customElements.define("ts-home", TSHome);
