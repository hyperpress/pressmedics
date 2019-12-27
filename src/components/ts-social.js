import { LitElement, html, css } from 'lit-element';

import { Calendar, Mail, Twitter, Facebook, Linkedin,  Blogger } from './ts-icons.js';

class TSSocial extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
        }
        #placeholder {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-size: cover;
          background-position: center;
        }
        :host([blur-up]) #placeholder {
          background-position: center 10%;
          background-size: 80%;
          background-repeat: no-repeat;
          filter: blur(3px);
          will-change: filter;
        }
        :host([blur-up]) #placeholder[loaded] {
          filter: blur(0);
          transition: 0.2s filter ease-in-out;
        }
        :host([center]) span {
          left: -9999px;
          right: -9999px;
          max-width: none;
        }
        #placeholder[loaded] span {
          opacity: 1;
          transition: 0.5s opacity;
        }

        .small-print .social-icon {
          padding-left: 0px;
        }
        .social-icon svg {
          border:1px solid var(--app-primary-text-thin-color);
          border-radius: 5px;
          padding: 3px;
        }
        .social-icon {
          fill: #111;
          padding-left: 7px;
          cursor: pointer;
        }
        .gplus-icon:hover {
          fill: #db4437;
        }
        .blogger-icon:hover {
          fill: #fb8f3d;
        }
        .twitter-icon:hover {
          fill: #1da1f2;
        }
        .facebook-icon:hover {
          fill: #3b5998;
        }
        .linkedin-icon:hover {
          fill: #007bb5;
        }
      `,
    ];
  }

  render() {
    const { link, title, placeholder, _loaded, slug } = this;

    return html`
      <div id="placeholder">
        <div class="slide-icons slide-left">
          <span
            class="social-icon twitter-icon"
            .link=${`https://twitter.com/share?url=https://themesurgeons.com/${slug}/`}
            @click=${e => this._getDataHref(e)}
            >${Twitter}</span
          >
          <span
            class="social-icon linkedin-icon"
            .link=${`https://www.linkedin.com/cws/share?url=https://themesurgeons.com/${slug}/`}
            @click=${e => this._getDataHref(e)}
            >${Linkedin}</span
          >
          <span
            class="social-icon facebook-icon"
            .link=${`https://www.facebook.com/sharer.php?u=https://themesurgeons.com/${slug}/`}
            @click=${e => this._getDataHref(e)}
            >${Facebook}</span
          >
          <span
            class="social-icon blogger-icon"
            .link=${`https://www.facebook.com/sharer.php?u=https://themesurgeons.com/${slug}/`}
            @click=${e => this._getDataHref(e)}
            >${Blogger}</span
          >
          <span
            class="social-icon mail-icon"
            .link=${`mailto:?subject=${title}">`}
            @click=${e => this._getDataHref(e)}
            >${Mail}</span
          >
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      src: { type: String },
      link: { type: String },
      _loaded: { type: Boolean },
    };
  }

  update(changedProps) {
    if (changedProps.has('link')) {
      this._loaded = false;
    }
    super.update(changedProps);
  }

  _getDataHref(e) {
    let link = e.currentTarget.link;
    // Pop a new window for specific social media platform
    window.open(
      link,
      '_blank',
      'scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500',
    );
  }

  _onSocialError() {
    if (!this.placeholder) {
      return html`
        <p>Bummer. Unable to load social media share buttons.</p>
      `;
    }
  }
}

customElements.define('ts-social', TSSocial);
