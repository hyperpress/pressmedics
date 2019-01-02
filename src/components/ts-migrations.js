import { LitElement, html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles';
class TSMigrations extends LitElement {
  render(props) {
    return html `
      ${ SharedStyles }
      <style>
      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      h3 {
        padding-top: 20px; }

      .hero {
        background: var(--app-light-text-color) url(/images/header/ts-migrations-header.svg) no-repeat;
        background-size: 380px;;
        background-position: center top;
      }

      @media (min-width: 460px) {
        .hero {
          background: var(--app-light-text-color) url(/images/header/ts-migrations-header.svg) no-repeat;
          background-size: 380px;;
          background-position: 92% top;
        }
      }

      @media (max-width: 800px) {
        .ts-header-wrapper {
          background-size: 380px;
          background-position: 95% top !important; }
        .ts-right {
          float: none !important;
          margin: 24px 30px 5px;
        }
      }    
      </style>
      <article id="ts-site" class="ts-migrations">
        <header class="hero">
          <div class="ts-header-wrapper fade-in">
            <h1 class="paper-font-display2 paper-font-light">WordPress Migrations</h1>
            <h2 class="paper-font-title paper-font-light">We're experts at relocating WordPress.</h2>
            <div class="center-button">
              <a href="https://themesurgeons.com/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home" track-metadata-position="banner">Contact a WordPress Pro</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
        <section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <div class="columns">
            <main class="main delayed-fade-in">
              <div class="ts-content-grid-box">
                <figure>
                  <svg class="ts-right" title="HyperPress WordPress Migrations Moving Van" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="200" height="200"><defs><path d="M294.91 458.2L16.44 433.99L16.44 31.2L375.73 31.2L375.73 202.84L445.78 377.94L375.73 433.99L332.07 458.2" id="aJUMvDK2y"></path><path d="M220.94 109.62L277.43 109.62L277.43 179.88L315.96 218.41L302.3 232.08L285.68 215.46L285.68 362.65L106.48 362.65L106.48 215.46L89.87 232.08L76.2 218.41L196.08 98.53L220.94 123.4L220.94 109.62ZM125.81 343.33L266.36 343.33L266.36 196.14L196.08 125.86L125.81 196.14L125.81 343.33ZM240.27 142.72L258.11 160.56L258.11 128.95L240.27 128.95L240.27 142.72Z" id="e57ZJGo3NE"></path><path d="M155.89 317.93L155.89 223.4L236.27 223.4L236.27 317.93L155.89 317.93ZM175.22 298.61L216.95 298.61L216.95 242.72L175.22 242.72L175.22 298.61Z" id="apgXJoyq5"></path><path d="M407.88 433.98C407.88 433.98 407.88 433.98 407.88 433.98C407.88 496.6 407.88 531.39 407.88 538.34C407.88 538.34 407.88 538.34 407.88 538.34C173.02 538.34 42.54 538.34 16.44 538.34C16.44 538.34 16.44 538.34 16.44 538.34C16.44 475.73 16.44 440.94 16.44 433.98C16.44 433.98 16.44 433.98 16.44 433.98C251.3 433.98 381.78 433.98 407.88 433.98Z" id="abEswlxHd"></path><path d="M423.72 538.34L375.73 538.34C375.73 337.04 375.73 225.2 375.73 202.83C375.73 189.7 386.37 179.06 399.5 179.06C409.64 179.06 490.75 179.06 500.89 179.06C568.65 179.06 623.56 233.97 623.56 301.71C623.56 317.48 623.56 396.36 623.56 538.34L564.62 538.34" id="b95uva8rl"></path><path d="M139.73 467.92C100.82 467.92 69.28 499.46 69.28 538.36C69.28 577.26 100.82 608.8 139.73 608.8C178.63 608.8 210.17 577.26 210.17 538.36C210.17 499.46 178.63 467.92 139.73 467.92Z" id="cu5kOH64c"></path><path d="M494.17 467.92C455.26 467.92 423.73 499.46 423.73 538.36C423.73 577.26 455.26 608.8 494.17 608.8C533.07 608.8 564.61 577.26 564.61 538.36C564.61 499.46 533.07 467.92 494.17 467.92Z" id="bASbndVr4"></path><path d="M570.73 301.72C570.73 263.22 539.4 231.91 500.89 231.91C496.07 231.9 471.96 231.9 428.56 231.91L428.56 356.07L570.73 356.07C570.73 323.46 570.73 305.34 570.73 301.72Z" id="conm65PSe"></path><path d="M139.73 510.23C124.19 510.23 111.6 522.82 111.6 538.36C111.6 553.9 124.19 566.49 139.73 566.49C155.26 566.49 167.86 553.9 167.86 538.36C167.86 522.82 155.26 510.23 139.73 510.23Z" id="a6W5T8zarV"></path><path d="M494.17 510.23C478.63 510.23 466.04 522.82 466.04 538.36C466.04 553.9 478.63 566.49 494.17 566.49C509.7 566.49 522.3 553.9 522.3 538.36C522.3 522.82 509.7 510.23 494.17 510.23Z" id="d6slbTtsI"></path><path d="M142.7 502.17L144.16 502.32L145.6 502.53L147.03 502.79L148.44 503.11L149.82 503.48L151.19 503.9L152.53 504.38L153.84 504.91L155.13 505.48L156.39 506.11L157.63 506.78L158.83 507.5L160.01 508.26L161.15 509.06L162.26 509.91L163.34 510.8L164.38 511.73L165.38 512.7L166.35 513.7L167.28 514.74L168.17 515.82L169.01 516.93L169.82 518.07L170.58 519.25L171.3 520.45L171.97 521.69L172.59 522.95L173.17 524.24L173.7 525.55L174.17 526.89L174.6 528.26L174.97 529.64L175.29 531.05L175.55 532.47L175.76 533.92L175.91 535.38L176 536.86L176.03 538.36L176 539.85L175.91 541.33L175.76 542.79L175.55 544.24L175.29 545.66L174.97 547.07L174.6 548.45L174.17 549.82L173.7 551.16L173.17 552.47L172.59 553.76L171.97 555.02L171.3 556.26L170.58 557.46L169.82 558.64L169.01 559.78L168.17 560.89L167.28 561.97L166.35 563.01L165.38 564.01L164.38 564.98L163.34 565.91L162.26 566.8L161.15 567.65L160.01 568.45L158.83 569.21L157.63 569.93L156.39 570.6L155.13 571.23L153.84 571.8L152.53 572.33L151.19 572.81L149.82 573.23L148.44 573.6L147.03 573.92L145.6 574.18L144.16 574.39L142.7 574.54L141.22 574.63L139.72 574.66L138.23 574.63L136.75 574.54L135.29 574.39L133.84 574.18L132.41 573.92L131.01 573.6L129.62 573.23L128.26 572.81L126.92 572.33L125.6 571.8L124.31 571.23L123.05 570.6L121.82 569.93L120.61 569.21L119.44 568.45L118.3 567.65L117.18 566.8L116.11 565.91L115.07 564.98L114.06 564.01L113.1 563.01L112.17 561.97L111.28 560.89L110.43 559.78L109.63 558.64L108.86 557.46L108.15 556.26L107.48 555.02L106.85 553.76L106.28 552.47L105.75 551.16L105.27 549.82L104.85 548.45L104.47 547.07L104.16 545.66L103.89 544.24L103.69 542.79L103.54 541.33L103.45 539.85L103.42 538.36L103.45 536.86L103.54 535.38L103.69 533.92L103.89 532.47L104.16 531.05L104.47 529.64L104.85 528.26L105.27 526.89L105.75 525.55L106.27 524.24L106.85 522.95L107.48 521.69L108.15 520.45L108.86 519.25L109.63 518.07L110.43 516.93L111.28 515.82L112.17 514.74L113.1 513.7L114.06 512.7L115.07 511.73L116.11 510.8L117.18 509.91L118.29 509.06L119.44 508.26L120.61 507.5L121.82 506.78L123.05 506.11L124.31 505.48L125.6 504.91L126.92 504.38L128.26 503.9L129.62 503.48L131.01 503.11L132.41 502.79L133.84 502.53L135.29 502.32L136.75 502.17L138.23 502.08L139.72 502.05L141.22 502.08L142.7 502.17ZM137.12 518.57L135.86 518.77L134.63 519.06L133.42 519.42L132.25 519.85L131.11 520.35L130.02 520.92L128.96 521.56L127.95 522.26L126.98 523.01L126.06 523.82L125.19 524.69L124.38 525.61L123.62 526.58L122.93 527.59L122.29 528.65L121.72 529.75L121.22 530.88L120.79 532.05L120.43 533.26L120.14 534.49L119.94 535.76L119.81 537.04L119.77 538.35L119.81 539.66L119.94 540.95L120.14 542.21L120.43 543.45L120.79 544.65L121.22 545.83L121.72 546.96L122.29 548.06L122.93 549.12L123.62 550.13L124.38 551.1L125.19 552.02L126.06 552.88L126.98 553.7L127.95 554.45L128.96 555.15L130.02 555.78L131.11 556.35L132.25 556.86L133.42 557.29L134.63 557.65L135.86 557.93L137.12 558.14L138.41 558.26L139.72 558.31L141.03 558.26L142.32 558.14L143.58 557.93L144.82 557.65L146.02 557.29L147.19 556.86L148.33 556.35L149.43 555.78L150.49 555.15L151.5 554.45L152.47 553.7L153.39 552.88L154.25 552.02L155.07 551.1L155.82 550.13L156.52 549.12L157.15 548.06L157.72 546.96L158.23 545.83L158.66 544.65L159.02 543.45L159.3 542.21L159.51 540.95L159.63 539.66L159.68 538.35L159.63 537.04L159.51 535.76L159.3 534.49L159.02 533.26L158.66 532.05L158.22 530.88L157.72 529.75L157.15 528.65L156.52 527.59L155.82 526.58L155.07 525.61L154.25 524.69L153.39 523.82L152.47 523.01L151.5 522.26L150.49 521.56L149.43 520.92L148.33 520.35L147.19 519.85L146.02 519.42L144.82 519.06L143.58 518.77L142.32 518.57L141.03 518.44L139.72 518.4L138.41 518.44L137.12 518.57Z" id="a2UlBYkmhc"></path><path d="M497.14 502.17L498.6 502.32L500.05 502.53L501.47 502.79L502.88 503.11L504.26 503.48L505.63 503.9L506.97 504.38L508.28 504.91L509.57 505.48L510.83 506.11L512.07 506.78L513.27 507.5L514.45 508.26L515.59 509.06L516.7 509.91L517.78 510.8L518.82 511.73L519.82 512.7L520.79 513.7L521.72 514.74L522.61 515.82L523.46 516.93L524.26 518.07L525.02 519.25L525.74 520.45L526.41 521.69L527.04 522.95L527.61 524.24L528.14 525.55L528.61 526.89L529.04 528.26L529.41 529.64L529.73 531.05L529.99 532.47L530.2 533.92L530.35 535.38L530.44 536.86L530.47 538.36L530.44 539.85L530.35 541.33L530.2 542.79L529.99 544.24L529.73 545.66L529.41 547.07L529.04 548.45L528.61 549.82L528.14 551.16L527.61 552.47L527.04 553.76L526.41 555.02L525.74 556.26L525.02 557.46L524.26 558.64L523.46 559.78L522.61 560.89L521.72 561.97L520.79 563.01L519.82 564.01L518.82 564.98L517.78 565.91L516.7 566.8L515.59 567.65L514.45 568.45L513.27 569.21L512.07 569.93L510.83 570.6L509.57 571.23L508.28 571.8L506.97 572.33L505.63 572.81L504.26 573.23L502.88 573.6L501.47 573.92L500.05 574.18L498.6 574.39L497.14 574.54L495.66 574.63L494.16 574.66L492.67 574.63L491.19 574.54L489.73 574.39L488.28 574.18L486.86 573.92L485.45 573.6L484.06 573.23L482.7 572.81L481.36 572.33L480.05 571.8L478.76 571.23L477.49 570.6L476.26 569.93L475.05 569.21L473.88 568.45L472.74 567.65L471.63 566.8L470.55 565.91L469.51 564.98L468.5 564.01L467.54 563.01L466.61 561.97L465.72 560.89L464.87 559.78L464.07 558.64L463.3 557.46L462.59 556.26L461.92 555.02L461.29 553.76L460.72 552.47L460.19 551.16L459.71 549.82L459.29 548.45L458.91 547.07L458.6 545.66L458.33 544.24L458.13 542.79L457.98 541.33L457.89 539.85L457.86 538.36L457.89 536.86L457.98 535.38L458.13 533.92L458.33 532.47L458.6 531.05L458.91 529.64L459.29 528.26L459.71 526.89L460.19 525.55L460.72 524.24L461.29 522.95L461.92 521.69L462.59 520.45L463.3 519.25L464.07 518.07L464.87 516.93L465.72 515.82L466.61 514.74L467.54 513.7L468.5 512.7L469.51 511.73L470.55 510.8L471.63 509.91L472.74 509.06L473.88 508.26L475.05 507.5L476.26 506.78L477.49 506.11L478.76 505.48L480.05 504.91L481.36 504.38L482.7 503.9L484.06 503.48L485.45 503.11L486.86 502.79L488.28 502.53L489.73 502.32L491.19 502.17L492.67 502.08L494.16 502.05L495.66 502.08L497.14 502.17ZM491.57 518.57L490.3 518.77L489.07 519.06L487.86 519.42L486.69 519.85L485.56 520.35L484.46 520.92L483.4 521.56L482.39 522.26L481.42 523.01L480.5 523.82L479.63 524.69L478.82 525.61L478.06 526.58L477.37 527.59L476.73 528.65L476.16 529.75L475.66 530.88L475.23 532.05L474.87 533.26L474.58 534.49L474.38 535.76L474.25 537.04L474.21 538.35L474.25 539.66L474.38 540.95L474.58 542.21L474.87 543.45L475.23 544.65L475.66 545.83L476.16 546.96L476.73 548.06L477.37 549.12L478.06 550.13L478.82 551.1L479.63 552.02L480.5 552.88L481.42 553.7L482.39 554.45L483.4 555.15L484.46 555.78L485.55 556.35L486.69 556.86L487.86 557.29L489.07 557.65L490.3 557.93L491.57 558.14L492.85 558.26L494.16 558.31L495.47 558.26L496.76 558.14L498.02 557.93L499.26 557.65L500.46 557.29L501.64 556.86L502.77 556.35L503.87 555.78L504.93 555.15L505.94 554.45L506.91 553.7L507.83 552.88L508.69 552.02L509.51 551.1L510.26 550.13L510.96 549.12L511.59 548.06L512.16 546.96L512.67 545.83L513.1 544.65L513.46 543.45L513.74 542.21L513.95 540.95L514.07 539.66L514.12 538.35L514.07 537.04L513.95 535.76L513.74 534.49L513.46 533.26L513.1 532.05L512.67 530.88L512.16 529.75L511.59 528.65L510.96 527.59L510.26 526.58L509.51 525.61L508.69 524.69L507.83 523.82L506.91 523.01L505.94 522.26L504.93 521.56L503.87 520.92L502.77 520.35L501.64 519.85L500.46 519.42L499.26 519.06L498.02 518.77L496.76 518.57L495.47 518.44L494.16 518.4L492.85 518.44L491.57 518.57Z" id="bvWM6VJtt"></path><path d="M559.58 452.06C559.58 448.71 559.58 421.94 559.58 418.59C559.58 412.44 564.57 407.44 570.73 407.44C576.88 407.44 581.87 412.44 581.87 418.59C581.87 421.94 581.87 448.71 581.87 452.06C581.87 458.21 576.88 463.2 570.73 463.2C564.57 463.2 559.58 458.21 559.58 452.06Z" id="cE9g4xDZ4"></path><path d="M593.83 517.97C587.67 517.97 582.68 512.98 582.68 506.82C582.68 500.67 587.67 495.67 593.83 495.67C597.33 495.67 625.35 495.67 628.85 495.67C635.01 495.67 640 500.67 640 506.82C640 512.98 635.01 517.97 628.85 517.97C621.85 517.97 597.33 517.97 593.83 517.97Z" id="fQrjnLMZm"></path><path d="M11.15 517.97C4.99 517.97 0 512.98 0 506.82C0 500.67 4.99 495.67 11.15 495.67C13.91 495.67 35.98 495.67 38.74 495.67C44.89 495.67 49.88 500.67 49.88 506.82C49.88 512.98 44.89 517.97 38.74 517.97C33.22 517.97 13.91 517.97 11.15 517.97Z" id="m2gcrwKkrg"></path></defs><g><g><g><g><use xlink:href="#aJUMvDK2y" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use></g></g><g><use xlink:href="#e57ZJGo3NE" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#e57ZJGo3NE" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#apgXJoyq5" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#apgXJoyq5" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#abEswlxHd" opacity="1" fill="#415e72" fill-opacity="1"></use><g><use xlink:href="#abEswlxHd" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#b95uva8rl" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#b95uva8rl" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use></g></g><g><use xlink:href="#cu5kOH64c" opacity="1" fill="#808080" fill-opacity="1"></use><g><use xlink:href="#cu5kOH64c" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#bASbndVr4" opacity="1" fill="#808080" fill-opacity="1"></use><g><use xlink:href="#bASbndVr4" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#conm65PSe" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#conm65PSe" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#a6W5T8zarV" opacity="1" fill="#e6e6e6" fill-opacity="1"></use><g><use xlink:href="#a6W5T8zarV" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#d6slbTtsI" opacity="1" fill="#e6e6e6" fill-opacity="1"></use><g><use xlink:href="#d6slbTtsI" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#a2UlBYkmhc" opacity="1" fill="#314a5f" fill-opacity="1"></use><g><use xlink:href="#a2UlBYkmhc" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#bvWM6VJtt" opacity="1" fill="#314a5f" fill-opacity="1"></use><g><use xlink:href="#bvWM6VJtt" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#cE9g4xDZ4" opacity="1" fill="var(--app-light-text-color)" fill-opacity="1"></use><g><use xlink:href="#cE9g4xDZ4" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#fQrjnLMZm" opacity="1" fill="#cfdce5" fill-opacity="1"></use><g><use xlink:href="#fQrjnLMZm" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#m2gcrwKkrg" opacity="1" fill="#cfdce5" fill-opacity="1"></use><g><use xlink:href="#m2gcrwKkrg" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>
                </figure>
                <h3 class="text-headline">Moving WordPress can seem overwhelming, but we've got you covered</h3>
                <p>We've moved hundreds of WordPress sites to new hosting. We know exactly what needs to be done to eliminate downtime, protect your data, and complete all of other tasks needed to make your move a stress free one.</p>
                <ul class="body-checks">
                  <li>Full backup of current site</li>
                  <li>Transfer site files and data</li>
                  <li>Database updates if applicable</li>
                  <li>SSL certificate and site HTTPS (optional)</li>
                  <li>DNS host record changes</li>
                  <li>Monitor DNS propagation</li>
                  <li>Testing site on your new host</li>
                </ul>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/migration-order-form">Move WordPress to New Hosting</a>
              </div>
              <div class="ts-content-grid-box">
                <figure class="mobile-spacing">
                  <svg class="ts-right adjust-top" title="Migrating Existing Site to WordPress" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" width="200" height="200"><defs><path d="M45.45 27.89C45.45 27.81 45.45 27.77 45.45 27.76C45.45 25.92 43.94 24.41 42.09 24.41C41.31 24.41 35.07 24.41 34.29 24.41C32.44 24.41 30.93 25.92 30.93 27.76C30.93 27.99 30.93 29.15 30.93 31.24L30.93 38.83C30.93 43.21 30.93 45.65 30.93 46.14C30.93 47.98 32.44 49.48 34.29 49.48C36.95 49.48 58.23 49.48 60.89 49.48C62.74 49.48 64.26 47.98 64.26 46.14C64.26 44.65 64.26 32.73 64.26 31.24C64.26 29.4 62.74 27.89 60.89 27.89C58.83 27.89 53.69 27.89 45.45 27.89Z" id="b7n6ICDteE"></path><path d="M92.29 27.89C92.29 27.81 92.29 27.77 92.29 27.76C92.29 25.92 90.78 24.41 88.93 24.41C88.15 24.41 81.91 24.41 81.14 24.41C79.29 24.41 77.77 25.92 77.77 27.76C77.77 27.99 77.77 29.15 77.77 31.24L77.77 38.83C77.77 43.21 77.77 45.65 77.77 46.14C77.77 47.98 79.29 49.48 81.14 49.48C83.8 49.48 105.07 49.48 107.73 49.48C109.58 49.48 111.1 47.98 111.1 46.14C111.1 44.65 111.1 32.73 111.1 31.24C111.1 29.4 109.58 27.89 107.73 27.89C105.68 27.89 100.53 27.89 92.29 27.89Z" id="k50ni86SIE"></path><path d="M139.36 27.78C139.36 27.7 139.36 27.66 139.36 27.65C139.36 25.81 137.85 24.3 136 24.3C135.22 24.3 128.98 24.3 128.21 24.3C126.35 24.3 124.84 25.81 124.84 27.65C124.84 27.88 124.84 29.04 124.84 31.13L124.84 38.72C124.84 43.1 124.84 45.54 124.84 46.02C124.84 47.86 126.35 49.37 128.21 49.37C130.87 49.37 152.14 49.37 154.8 49.37C156.65 49.37 158.17 47.86 158.17 46.02C158.17 44.53 158.17 32.62 158.17 31.13C158.17 29.29 156.65 27.78 154.8 27.78C152.74 27.78 147.6 27.78 139.36 27.78Z" id="k1oScKCyPq"></path><path d="M9.35 131.79C9.35 107.87 9.35 94.58 9.35 91.93C9.35 90.7 10.36 89.69 11.6 89.69C17.58 89.69 65.47 89.69 71.46 89.69C72.7 89.69 73.71 90.7 73.71 91.93C73.71 94.58 73.71 107.87 73.71 131.79L9.35 131.79Z" id="h7SCWcbfD"></path><path d="M0.84 138C0.38 138 0 138.38 0 138.84C0 139 0 140.3 0 140.47C0 140.92 0.38 141.3 0.84 141.3C9.02 141.3 74.46 141.3 82.64 141.3C83.1 141.3 83.48 140.92 83.48 140.47C83.48 140.3 83.48 139 83.48 138.84C83.48 138.38 83.1 138 82.64 138C66.28 138 9.02 138 0.84 138Z" id="d71ebFIRKX"></path><path d="M125.87 131.79C125.87 107.87 125.87 94.58 125.87 91.93C125.87 90.7 126.88 89.69 128.12 89.69C134.11 89.69 182 89.69 187.98 89.69C189.22 89.69 190.23 90.7 190.23 91.93C190.23 94.58 190.23 107.87 190.23 131.79L125.87 131.79Z" id="aflYMXM6h"></path><path d="M117.36 138C116.9 138 116.52 138.38 116.52 138.84C116.52 139 116.52 140.3 116.52 140.47C116.52 140.92 116.9 141.3 117.36 141.3C125.54 141.3 190.98 141.3 199.16 141.3C199.62 141.3 200 140.92 200 140.47C200 140.3 200 139 200 138.84C200 138.38 199.62 138 199.16 138C182.8 138 125.54 138 117.36 138Z" id="i22nOBYKr"></path><path d="M142.65 80.33C123.94 54.97 69.44 40.83 42.11 78.4" id="bSwrWQ3nb"></path><path d="M42.01 73.48C39.09 73.26 36.54 75.43 36.32 78.33C36.09 81.23 38.28 83.77 41.19 83.99C44.11 84.21 46.66 82.04 46.88 79.14C47.11 76.24 44.92 73.7 42.01 73.48Z" id="c9eTLIctfI"></path><path d="M161.42 102.36L162.64 102.87L163.75 103.56L164.74 104.4L165.59 105.38L166.28 106.49L166.79 107.7L167.12 109L167.23 110.37L167.12 111.74L166.79 113.05L166.28 114.26L165.59 115.36L164.74 116.35L163.75 117.19L162.64 117.88L161.42 118.39L160.11 118.71L158.74 118.82L157.36 118.71L156.05 118.39L154.83 117.88L153.72 117.19L152.73 116.35L151.88 115.36L151.19 114.26L150.68 113.05L150.35 111.74L150.24 110.37L150.35 109L150.68 107.7L151.19 106.49L151.88 105.38L152.73 104.4L153.72 103.56L154.83 102.87L156.05 102.36L157.36 102.04L158.74 101.93L160.11 102.04L161.42 102.36ZM157.06 117.99L157.6 118.09L158.16 118.15L158.74 118.17L159.41 118.14L160.07 118.06L160.72 117.92L161.34 117.73L161.32 117.7L161.31 117.68L161.29 117.65L161.28 117.62L158.87 111.06L156.52 117.86L157.06 117.99ZM151.07 108.73L150.94 109.54L150.9 110.37L151.22 112.6L152.13 114.57L153.52 116.2L155.32 117.39L151.58 107.2L151.29 107.95L151.07 108.73ZM165.65 107.02L165.66 107.22L165.67 107.44L165.63 107.91L165.52 108.53L165.33 109.3L165.07 110.23L162.68 117.11L164.27 115.9L165.5 114.32L166.29 112.45L166.57 110.37L166.51 109.37L166.32 108.41L166.02 107.5L165.61 106.63L165.64 106.82L165.65 107.02ZM157.4 102.69L156.75 102.83L156.13 103.02L155.53 103.26L154.96 103.54L154.42 103.87L153.9 104.24L153.42 104.65L152.97 105.1L152.56 105.58L152.19 106.09L152.23 106.09L152.28 106.09L152.32 106.1L152.37 106.1L152.41 106.1L152.45 106.1L152.5 106.1L152.54 106.1L152.58 106.1L152.62 106.1L152.65 106.1L152.69 106.1L152.9 106.1L153.13 106.09L153.36 106.09L153.6 106.08L153.83 106.06L154.04 106.05L154.24 106.04L154.42 106.03L154.57 106.02L154.68 106.01L154.76 106L154.78 106L154.88 106.01L154.96 106.04L155.03 106.08L155.07 106.15L155.11 106.22L155.12 106.3L155.12 106.37L155.1 106.45L155.06 106.52L155 106.58L154.93 106.62L154.83 106.64L154.82 106.65L154.8 106.65L154.76 106.65L154.7 106.66L154.64 106.66L154.56 106.67L154.47 106.68L154.38 106.69L154.27 106.7L154.16 106.7L154.05 106.71L153.93 106.72L156.79 115.16L158.5 110.05L157.28 106.72L157.18 106.71L157.07 106.7L156.98 106.7L156.88 106.69L156.79 106.68L156.71 106.67L156.64 106.66L156.58 106.66L156.53 106.65L156.49 106.65L156.46 106.64L156.36 106.63L156.29 106.59L156.23 106.53L156.19 106.46L156.17 106.39L156.17 106.31L156.18 106.23L156.22 106.15L156.26 106.09L156.33 106.04L156.41 106.01L156.51 106L156.54 106L156.61 106.01L156.72 106.02L156.87 106.03L157.05 106.04L157.25 106.05L157.47 106.06L157.7 106.08L157.93 106.09L158.15 106.09L158.37 106.1L158.57 106.1L158.79 106.1L159.01 106.09L159.25 106.09L159.48 106.08L159.71 106.06L159.93 106.05L160.13 106.04L160.3 106.03L160.45 106.02L160.56 106.01L160.64 106L160.66 106L160.76 106.01L160.84 106.04L160.91 106.08L160.96 106.15L160.99 106.22L161 106.3L161 106.37L160.98 106.45L160.94 106.52L160.88 106.58L160.81 106.62L160.71 106.64L160.7 106.65L160.68 106.65L160.64 106.65L160.58 106.66L160.52 106.66L160.44 106.67L160.35 106.68L160.26 106.69L160.15 106.7L160.05 106.7L159.93 106.71L159.82 106.72L162.65 115.1L163.43 112.5L163.52 112.25L163.61 112.01L163.69 111.77L163.76 111.55L163.82 111.33L163.88 111.11L163.92 110.91L163.96 110.71L163.99 110.51L164.01 110.33L164.02 110.15L164.03 109.98L164.02 109.75L164 109.52L163.97 109.31L163.92 109.11L163.87 108.92L163.81 108.74L163.75 108.57L163.68 108.4L163.61 108.25L163.53 108.1L163.45 107.96L163.38 107.83L163.28 107.67L163.18 107.52L163.09 107.36L163 107.21L162.92 107.06L162.85 106.92L162.78 106.77L162.72 106.62L162.67 106.47L162.64 106.32L162.62 106.16L162.61 106L162.62 105.82L162.65 105.65L162.71 105.48L162.78 105.32L162.87 105.18L162.98 105.04L163.1 104.92L163.24 104.82L163.4 104.73L163.56 104.67L163.74 104.63L163.93 104.62L163.94 104.62L163.94 104.62L163.95 104.62L163.96 104.62L163.97 104.62L163.99 104.62L164.02 104.62L164.03 104.62L163.67 104.32L163.29 104.03L162.9 103.77L162.49 103.53L162.06 103.31L161.62 103.12L161.17 102.96L160.7 102.83L160.23 102.72L159.74 102.64L159.24 102.59L158.74 102.58L158.06 102.61L157.4 102.69Z" id="a6w3swPyB"></path><path d="M145.67 71.06L142.75 80.99L130.88 77.53" id="g11YjMMuwj"></path><path d="M44.78 103.87L44.78 103.85L44.79 103.83L44.79 103.81L44.79 103.79L44.79 103.77L44.8 103.75L44.8 103.73L44.81 103.71L44.82 103.69L44.83 103.67L44.83 103.65L44.84 103.63L44.85 103.61L44.86 103.6L44.87 103.58L44.89 103.56L44.9 103.55L44.91 103.53L44.93 103.52L44.94 103.5L44.95 103.49L44.97 103.47L44.98 103.46L45 103.45L45.02 103.44L45.03 103.43L45.05 103.41L45.07 103.41L45.09 103.4L45.11 103.39L45.13 103.38L45.15 103.37L45.17 103.37L45.19 103.36L45.21 103.36L45.23 103.35L45.25 103.35L45.27 103.35L45.29 103.35L45.31 103.35L47.44 103.35L47.46 103.35L47.48 103.35L47.5 103.35L47.52 103.35L47.54 103.36L47.56 103.36L47.59 103.37L47.61 103.37L47.62 103.38L47.64 103.39L47.66 103.4L47.68 103.41L47.7 103.41L47.72 103.43L47.73 103.44L47.75 103.45L47.77 103.46L47.78 103.47L47.8 103.49L47.81 103.5L47.83 103.52L47.84 103.53L47.85 103.55L47.87 103.56L47.88 103.58L47.89 103.6L47.9 103.61L47.91 103.63L47.92 103.65L47.93 103.67L47.93 103.69L47.94 103.71L47.95 103.73L47.95 103.75L47.96 103.77L47.96 103.79L47.96 103.81L47.97 103.83L47.97 103.85L47.97 103.87L47.97 109.42L50.09 111.8L47.97 111.8L47.97 119.19L43.24 119.19L43.24 119.19L43.24 119.16L43.24 114.03L43.24 114.01L43.24 113.99L43.24 113.96L43.24 113.94L43.23 113.92L43.23 113.9L43.22 113.88L43.21 113.85L43.21 113.83L43.2 113.81L43.19 113.79L43.18 113.77L43.17 113.75L43.16 113.73L43.15 113.72L43.14 113.7L43.12 113.68L43.11 113.66L43.1 113.65L43.08 113.63L43.07 113.62L43.05 113.6L43.04 113.59L43.02 113.57L43 113.56L42.98 113.55L42.97 113.54L42.95 113.53L42.93 113.52L42.91 113.51L42.89 113.5L42.87 113.49L42.85 113.49L42.83 113.48L42.81 113.48L42.78 113.47L42.76 113.47L42.74 113.47L42.72 113.46L42.69 113.46L40.5 113.46L40.48 113.46L40.46 113.47L40.44 113.47L40.41 113.47L40.39 113.48L40.37 113.48L40.35 113.49L40.33 113.49L40.31 113.5L40.29 113.51L40.27 113.52L40.25 113.53L40.23 113.54L40.22 113.55L40.2 113.56L40.18 113.57L40.16 113.59L40.15 113.6L40.13 113.62L40.12 113.63L40.1 113.65L40.09 113.66L40.07 113.68L40.06 113.7L40.05 113.72L40.04 113.73L40.03 113.75L40.02 113.77L40.01 113.79L40 113.81L39.99 113.83L39.98 113.85L39.98 113.88L39.97 113.9L39.97 113.92L39.96 113.94L39.96 113.96L39.96 113.99L39.96 114.01L39.96 114.03L39.96 119.16L39.96 119.19L39.96 119.19L35.23 119.19L35.23 111.8L33.11 111.8L41.6 102.29L44.78 105.85L44.78 103.87Z" id="b2xCcqQLNv"></path><path d="M86.38 43.39L86.38 32.76L99.97 32.76L99.97 43.39L86.38 43.39ZM88.08 42.06L90.63 40.06L92.33 40.73L94.88 38.07L98.27 41.61L98.27 34.09L88.08 34.09L88.08 42.06ZM91.18 35.58L91.24 35.59L91.3 35.6L91.35 35.6L91.41 35.61L91.47 35.63L91.52 35.64L91.58 35.66L91.63 35.67L91.69 35.69L91.74 35.71L91.79 35.73L91.84 35.75L91.89 35.78L91.93 35.81L91.98 35.83L92.02 35.86L92.06 35.89L92.11 35.92L92.15 35.95L92.18 35.99L92.22 36.02L92.25 36.06L92.29 36.09L92.32 36.13L92.35 36.17L92.38 36.21L92.4 36.25L92.42 36.29L92.45 36.33L92.47 36.38L92.48 36.42L92.5 36.46L92.51 36.51L92.52 36.55L92.53 36.6L92.54 36.65L92.54 36.7L92.54 36.74L92.54 36.79L92.54 36.84L92.53 36.89L92.52 36.93L92.51 36.98L92.5 37.02L92.48 37.07L92.47 37.11L92.45 37.15L92.42 37.2L92.4 37.24L92.38 37.28L92.35 37.32L92.32 37.36L92.29 37.39L92.25 37.43L92.22 37.47L92.18 37.5L92.15 37.53L92.11 37.57L92.06 37.6L92.02 37.63L91.98 37.65L91.93 37.68L91.89 37.71L91.84 37.73L91.79 37.75L91.74 37.78L91.69 37.8L91.63 37.81L91.58 37.83L91.52 37.85L91.47 37.86L91.41 37.87L91.35 37.88L91.3 37.89L91.24 37.9L91.18 37.9L91.12 37.9L91.06 37.91L90.99 37.9L90.93 37.9L90.87 37.9L90.81 37.89L90.76 37.88L90.7 37.87L90.64 37.86L90.59 37.85L90.53 37.83L90.48 37.81L90.42 37.8L90.37 37.78L90.32 37.75L90.27 37.73L90.22 37.71L90.18 37.68L90.13 37.65L90.09 37.63L90.05 37.6L90 37.57L89.96 37.53L89.93 37.5L89.89 37.47L89.86 37.43L89.82 37.39L89.79 37.36L89.76 37.32L89.73 37.28L89.71 37.24L89.69 37.2L89.66 37.15L89.64 37.11L89.63 37.07L89.61 37.02L89.6 36.98L89.59 36.93L89.58 36.89L89.57 36.84L89.57 36.79L89.57 36.74L89.57 36.7L89.57 36.65L89.58 36.6L89.59 36.55L89.6 36.51L89.61 36.46L89.63 36.42L89.64 36.38L89.66 36.33L89.69 36.29L89.71 36.25L89.73 36.21L89.76 36.17L89.79 36.13L89.82 36.09L89.86 36.06L89.89 36.02L89.93 35.99L89.96 35.95L90 35.92L90.05 35.89L90.09 35.86L90.13 35.83L90.18 35.81L90.22 35.78L90.27 35.75L90.32 35.73L90.37 35.71L90.42 35.69L90.48 35.67L90.53 35.66L90.59 35.64L90.64 35.63L90.7 35.61L90.76 35.6L90.81 35.6L90.87 35.59L90.93 35.58L90.99 35.58L91.06 35.58L91.12 35.58L91.18 35.58Z" id="g1f5O0D1sE"></path><path d="M47.46 33.76L43.14 33.76L43.14 42.48L50.65 42.48L50.65 36.11L51.78 36.11L51.78 43.48L42.02 43.48L42.02 32.76L47.46 32.76L47.46 33.76ZM48.21 35.53L48.21 32.76L51.78 35.53L48.21 35.53Z" id="d1sRTbcRVS"></path><path d="M146.22 32.76C147.17 32.76 147.95 33.53 147.95 34.48C147.95 34.83 147.95 34.14 147.95 34.48C147.95 35.44 147.17 36.21 146.22 36.21C144.45 36.21 140.85 36.21 139.08 36.21C138.12 36.21 137.35 35.44 137.35 34.48C137.35 34.14 137.35 34.83 137.35 34.48C137.35 33.53 138.12 32.76 139.08 32.76C140.85 32.76 144.45 32.76 146.22 32.76Z" id="b1Gv0xgInI"></path><path d="M146.22 36.07C147.17 36.07 147.95 36.84 147.95 37.79C147.95 38.14 147.95 37.45 147.95 37.79C147.95 38.75 147.17 39.52 146.22 39.52C144.45 39.52 140.85 39.52 139.08 39.52C138.12 39.52 137.35 38.75 137.35 37.79C137.35 37.45 137.35 38.14 137.35 37.79C137.35 36.84 138.12 36.07 139.08 36.07C140.85 36.07 144.45 36.07 146.22 36.07Z" id="a3PY56zkDT"></path><path d="M146.22 39.66C147.17 39.66 147.95 40.43 147.95 41.38C147.95 41.73 147.95 41.04 147.95 41.38C147.95 42.34 147.17 43.11 146.22 43.11C144.45 43.11 140.85 43.11 139.08 43.11C138.12 43.11 137.35 42.34 137.35 41.38C137.35 41.04 137.35 41.73 137.35 41.38C137.35 40.43 138.12 39.66 139.08 39.66C140.85 39.66 144.45 39.66 146.22 39.66Z" id="a4HFMeXXY"></path></defs><g><g><g><g><use xlink:href="#b7n6ICDteE" opacity="1" fill-opacity="0" stroke="#4285f4" stroke-width="2" stroke-opacity="1"></use></g></g><g><use xlink:href="#k50ni86SIE" opacity="1" fill="var(--app-secondary-color)" fill-opacity="0"></use><g><use xlink:href="#k50ni86SIE" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#k1oScKCyPq" opacity="1" fill-opacity="0" stroke="#77c800" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#h7SCWcbfD" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use></g></g><g><use xlink:href="#d71ebFIRKX" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#d71ebFIRKX" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="1" stroke-opacity="0"></use></g></g><g><g><use xlink:href="#aflYMXM6h" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use></g></g><g><use xlink:href="#i22nOBYKr" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#i22nOBYKr" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#bSwrWQ3nb" opacity="1" fill="var(--app-secondary-color)" fill-opacity="0"></use><g><use xlink:href="#bSwrWQ3nb" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="3" stroke-opacity="1"></use></g></g><g><use xlink:href="#c9eTLIctfI" opacity="1" fill="#a434b7" fill-opacity="1"></use><g><use xlink:href="#c9eTLIctfI" opacity="1" fill-opacity="0" stroke="var(--app-secondary-color)" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#a6w3swPyB" opacity="1" fill="#a434b7" fill-opacity="1"></use></g><g><g><use xlink:href="#g11YjMMuwj" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="3" stroke-opacity="1"></use></g></g><g><use xlink:href="#b2xCcqQLNv" opacity="1" fill="#a434b7" fill-opacity="1"></use></g><g><use xlink:href="#g1f5O0D1sE" opacity="1" fill="#a434b7" fill-opacity="1"></use></g><g><use xlink:href="#d1sRTbcRVS" opacity="1" fill="#4285f4" fill-opacity="1"></use></g><g><g><use xlink:href="#b1Gv0xgInI" opacity="1" fill-opacity="0" stroke="#77c800" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#a3PY56zkDT" opacity="1" fill-opacity="0" stroke="#77c800" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#a4HFMeXXY" opacity="1" fill-opacity="0" stroke="#77c800" stroke-width="2" stroke-opacity="1"></use></g></g></g></g></svg>
                </figure>
                <h3 class="text-headline">Migrating to WordPress</h3>
                <p>You've heard great things about WordPress, but your site was built using some other software or content mangement system (CMS). The idea of trying to move your site into WordPress seems impossibly complex. Well, don't let that stop you. We built tools that automate importing your content into a brand new WordPress instance, quickly, safely, and without error. So, if you're ready to move to WordPress, we'll make it happen.</p>
                <a class="button button-secondary-cta shadow-4dp" data-customizer="pagespeed-order-form" href="/migration-order-form">Migrate My Site to WordPress</a>
              </div>
            </main>
            <aside class="sidebar">
                <div class="nav">
                  <div class="sticky">
                    <ul class="right-side-nav l-space-bottom-5">
                      <li>
                        <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Solutions Menu</h3>
                      </li>
                      <li>
                        <a class="pagespeed" track-type="pagespeedOptimization" track-name="web-page" track-metadata-position="sidebar" href="/pagespeed">Pagespeed Optimization</a>
                      </li>
                      <li>
                        <a class="design" track-type="detailResponse" track-name="web-page" track-metadata-position="sidebar" href="/design">Mobile First Design</a>
                      </li>
                      <li>
                        <a class="emergency" track-type="emergencyResponse" track-name="web-page" track-metadata-position="sidebar" href="/emergency">Emergency Response</a>
                      </li>
                      <li>
                        <a class="security" track-type="security" track-name="web-page" track-metadata-position="sidebar" href="/security">WordPress Security</a>
                      </li>
                      <li>
                        <a style="background:#edf0f2;color:#a434b7;text-decoration:none;" track-type="migrations" track-name="web-page" track-metadata-position="sidebar" href="/migrations">WordPress Migrations</a>
                      </li>
                      <li>
                        <a class="care" track-type="preventiveCare" track-name="web-page" track-metadata-position="sidebar" href="/care">Preventive Care</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>     
            </div>
          </section>
        </div>
      </article>
    `;
  }
}
window.customElements.define('ts-migrations', TSMigrations);